export default function QuoteCard({ quote }) {
  if (!quote) return null;

  return (
    <div
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
        }}
      >
        — {quote.author}
      </h3>
    </div>
  );
}