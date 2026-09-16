import { useState } from "react";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import CategorySelector from "./components/CategorySelector";
import ActionButtons from "./components/ActionButtons";
import { quotes } from "./data/quotes";

export default function App() {
  const categories = ["All", ...new Set(quotes.map((q) => q.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  return (
    <main>
      <Header />
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <QuoteCard quote={currentQuote} />
      <ActionButtons onNewQuote={handleNewQuote} />
    </main>
  );
}