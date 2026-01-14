import { useRef, useState, useEffect } from "react";

export default function MovieHoverCard({ movie }) {
  const popupRef = useRef(null);
  const cardRef = useRef(null);
  const [position, setPosition] = useState("top");

  useEffect(() => {
    function updatePosition() {
      if (!popupRef.current || !cardRef.current) return;

      const cardRect = cardRef.current.getBoundingClientRect();
      const popupHeight = popupRef.current.offsetHeight;
      const buffer = 20;

      const spaceBelow = window.innerHeight - cardRect.bottom;

      if (spaceBelow >= popupHeight + buffer) {
        setPosition("bottom");
      } else {
        setPosition("top");
      }
    }

    updatePosition();
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <>
      {}
      <div ref={cardRef} className="position-anchor" />

      <div ref={popupRef} className={`hover-info-card ${position}`}>
        <h3 className="title">{movie.title}</h3>

        <div className="meta">
          <span>⭐ {movie.vote_average?.toFixed(1)}</span>
          <span className="tag">{movie.release_date?.slice(0, 4)}</span>
        </div>

        <p className="overview">{movie.overview}</p>
      </div>
    </>
  );
}
