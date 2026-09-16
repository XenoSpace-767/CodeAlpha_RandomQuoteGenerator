import { useState, useEffect } from "react";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import CategorySelector from "./components/CategorySelector";
import ActionButtons from "./components/ActionButtons";
import Favorites from "./components/Favorites";
import { quotes } from "./data/quotes";

export default function App() {
  const categories = ["All", ...new Set(quotes.map((q) => q.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load initial favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("quote_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Save favorites to localStorage whenever favorites state changes
  useEffect(() => {
    localStorage.setItem("quote_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const getFilteredQuotes = () => {
    if (selectedCategory === "All") return quotes;
    return quotes.filter((q) => q.category === selectedCategory);
  };

  const getRandomQuote = () => {
    const available = getFilteredQuotes();
    const randomIndex = Math.floor(Math.random() * available.length);
    return available[randomIndex];
  };

  const [currentQuote, setCurrentQuote] = useState(getRandomQuote);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    const filtered =
      category === "All"
        ? quotes
        : quotes.filter((q) => q.category === category);
    const randomIndex = Math.floor(Math.random() * filtered.length);
    setCurrentQuote(filtered[randomIndex]);
  };

  const handleNewQuote = () => {
    const available = getFilteredQuotes();
    if (available.length <= 1) return;

    let nextQuote = getRandomQuote();
    while (nextQuote.id === currentQuote.id) {
      nextQuote = getRandomQuote();
    }
    setCurrentQuote(nextQuote);
  };

  const handleToggleFavorite = (quote) => {
    const exists = favorites.some((q) => q.id === quote.id);
    if (exists) {
      setFavorites(favorites.filter((q) => q.id !== quote.id));
    } else {
      setFavorites([...favorites, quote]);
    }
  };

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter((q) => q.id !== id));
  };

  const isCurrentFavorite = favorites.some((q) => q.id === currentQuote?.id);

  return (
    <main style={{ paddingBottom: "2rem" }}>
      <Header />
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <QuoteCard
        quote={currentQuote}
        isFavorite={isCurrentFavorite}
        onToggleFavorite={handleToggleFavorite}
      />
      <ActionButtons onNewQuote={handleNewQuote} />
      <Favorites
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
      />
    </main>
  );
}