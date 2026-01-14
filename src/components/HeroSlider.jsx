import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/hero.css"

function HeroSlider({ movies }) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 3500 }}
      navigation
      pagination={{ clickable: true }}
      loop
      className="hero-swiper"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          >
            <div className="overlay">
              <div className="content">
                <h3 className="tag">Spotlight</h3>
                <h1>{movie.title}</h1>
                <p className="meta">
                  {movie.release_date.slice(0, 4)} • {movie.vote_average}⭐
                </p>
                <p className="overview">{movie.overview.slice(0, 180)}...</p>

                <div className="buttons">
                  <button className="watch">▶ Watch Trailer</button>
                  <button className="details">➜ Details</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
