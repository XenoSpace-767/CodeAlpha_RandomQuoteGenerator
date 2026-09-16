export default function CategorySelector({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        justifyContent: "center",
        marginBottom: "1.5rem",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          style={{
            padding: "0.4rem 0.85rem",
            borderRadius: "20px",
            border: "none",
            backgroundColor: selectedCategory === cat ? "#0284c7" : "#334155",
            color: "#ffffff",
            fontSize: "0.85rem",
            cursor: "pointer",
            fontWeight: selectedCategory === cat ? "600" : "400",
            transition: "all 0.2s ease",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}