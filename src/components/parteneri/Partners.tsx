import React, { useRef, useEffect } from "react";
import "./Partners.css";

type Brand = {
  id: number;
  src: string;
  alt: string;
};

const Partners: React.FC = () => {
  const brands: Brand[] = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    src: `/partners/${i + 1}.png`,
    alt: `Partner Brand ${i + 1}`,
  }));

  const trackRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 25;
  const clonedBrands = [...brands, ...brands];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollLeft = 0;

    const animate = () => {
      if (track.scrollLeft >= brands.length * 150) {
        track.style.scrollBehavior = "auto";
        track.scrollLeft = 0;
        setTimeout(() => {
          track.style.scrollBehavior = "smooth";
        }, 0);
      } else {
        track.scrollLeft += scrollSpeed;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [brands.length]);

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-track" ref={trackRef}>
          {clonedBrands.map((brand, index) => (
            <div className="partner-item" key={`${brand.id}-${index}`}>
              <img
                src={brand.src}
                alt={brand.alt}
                loading="lazy"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
