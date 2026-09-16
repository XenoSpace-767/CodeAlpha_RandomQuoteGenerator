export default function Favorites({ favorites, onRemoveFavorite }) {
  if (favorites.length === 0) return null;

  return (
    <div
      style={{
        marginTop: "2rem",
        backgroundColor: "#1e293b",
        padding: "1.5rem",
        borderRadius: "12px",
        border: "1px solid #334155",
      }}
    >
      <h2
        style={{
          fontSize: "1.2rem",
          color: "#38bdf8",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Saved Favorites ({favorites.length})
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {favorites.map((q) => (
          <div
            key={q.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#0f172a",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              border: "1px solid #334155",
            }}
          >
            <div style={{ paddingRight: "1rem" }}>
              <p style={{ fontSize: "0.95rem", color: "#f8fafc" }}>
                "{q.text}"
              </p>
              <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                — {q.author}
              </span>
            </div>
            <button
              onClick={() => onRemoveFavorite(q.id)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#ef4444",
                cursor: "pointer",
                fontSize: "1rem",
                padding: "0.25rem",
              }}
              title="Remove favorite"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}