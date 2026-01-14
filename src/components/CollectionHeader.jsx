import "../styles/layout.css";

function CollectionHeader({ name, overview, backdrop }) {
  const img = `https://image.tmdb.org/t/p/original${backdrop}`;

  return (
    <div style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "var(--radius)",
      height: "260px",
      position: "relative",
      marginTop: "16px",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "24px"
      }}>
        <h1 style={{ margin: 0, color: "var(--headline)" }}>{name}</h1>
        <p style={{ marginTop: "10px", maxWidth: "700px", color: "var(--text)" }}>
          {overview}
        </p>
      </div>
    </div>
  );
}

export default CollectionHeader;
