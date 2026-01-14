
import "../styles/layout.css";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 0",
      color: "var(--headline)"
    }}>
      <h2 style={{ margin: 0, color: "var(--accent)" }}>CineBluff</h2>
      
    </nav>
  );
}

export default Navbar;
