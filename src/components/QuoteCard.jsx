import { useState } from "react";

export default function QuoteCard({ quote, isFavorite, onToggleFavorite }) {
  const [copied, setCopied] = useState(false);

  if (!quote) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Random Quote",
        text: `"${quote.text}" — ${quote.author}`,
      });
    } else {
      handleCopy();
      alert("Quote copied to clipboard for sharing!");
    }
  };

  return (
    <div
      key={quote.id}
      className="quote-animate"
      style={{
        backgroundColor: "#1e293b",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
        border: "1px solid #334155",
        textAlign: "center",
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "0.25rem 0.75rem",
          backgroundColor: "#0284c7",
          color: "#ffffff",
          borderRadius: "9999px",
          fontSize: "0.85rem",
          fontWeight: "600",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}
      >
        {quote.category}
      </span>

      <p
        style={{
          fontSize: "1.35rem",
          fontStyle: "italic",
          lineHeight: "1.6",
          color: "#f1f5f9",
          marginBottom: "1rem",
        }}
      >
        "{quote.text}"
      </p>

      <h3
        style={{
          fontSize: "1rem",
          fontWeight: "600",
          color: "#94a3b8",
          marginBottom: "1.5rem",
        }}
      >
        — {quote.author}
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          paddingTop: "1rem",
          borderTop: "1px solid #334155",
        }}
      >
        <button
          onClick={handleCopy}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#334155",
            color: "#f8fafc",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          {copied ? "Copied! ✅" : "Copy 📋"}
        </button>

        <button
          onClick={() => onToggleFavorite(quote)}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: isFavorite ? "#ef4444" : "#334155",
            color: "#f8fafc",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          {isFavorite ? "Favorited ❤️" : "Favorite 🤍"}
        </button>

        <button
          onClick={handleShare}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#334155",
            color: "#f8fafc",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Share 🔗
        </button>
      </div>
    </div>
  );
}