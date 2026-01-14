import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CollectionHeader from "./components/CollectionHeader";
import MovieList from "./components/MovieList";
import HeroSlider from "./components/HeroSlider";

import "./styles/theme.css";
import "./styles/layout.css";
import "./styles/cards.css";   

function App() {
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/collection/10?language=en-US", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGZkOGY5MTg5NzdjNmZkZWZmYjllMWMzZjZlOTJjZSIsIm5iZiI6MTc2ODI4MDY5Ny45NzMsInN1YiI6IjY5NjVkMjc5MGNkNDNjZDYxMmE0MmY2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R7xbG_2f7Sa78Qs8Duf_nbnBipi_ajSM99ERPa55ego",
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(setCollection)
      .catch(console.error);
  }, []);

  if (!collection) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="page-container">
      <Navbar />
      <HeroSlider movies={collection.parts} />
      <CollectionHeader {...collection} />
      <MovieList movies={collection.parts} />
    </div>
  );
}

export default App;
