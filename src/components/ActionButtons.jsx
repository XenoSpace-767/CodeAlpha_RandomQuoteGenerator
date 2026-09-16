export default function ActionButtons({ onNewQuote }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "1.5rem",
      }}
    >
      <button
        onClick={onNewQuote}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#38bdf8",
          color: "#0f172a",
          border: "none",
          borderRadius: "8px",
          fontWeight: "700",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "transform 0.1s ease, background-color 0.2s ease",
        }}
      >
        Get New Quote 🎲
      </button>
    </div>
  );
}