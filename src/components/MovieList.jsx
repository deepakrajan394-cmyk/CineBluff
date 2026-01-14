import MovieHoverCard from "./MovieHoverCard";
import "../styles/cards.css";

function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div className="hover-card" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="poster"
            alt={movie.title}
          />

          <MovieHoverCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
