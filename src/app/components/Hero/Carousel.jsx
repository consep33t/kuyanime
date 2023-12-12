// components/Carousel.js
'use client';
import { useEffect, useState } from 'react';
import MovieSlide from './MovieSlide';
import { getAnimeResponse } from '../../libs/api-libs';

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomAnime = await getAnimeResponse("anime", "limit=8");
        setMovies(randomAnime.data || []); 
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (movies.length || 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
      <div className="relative h-full md:h-96" data-carousel-wrapper>
        {movies.map((movie, index) => (
          <div key={index} className={`duration-200 ease-in-out absolute w-full ${currentIndex === index ? ' translate-x-0' : ' translate-x-full'}`} data-carousel-item>
            <MovieSlide
              id={movie.mal_id}
              title={movie.title}
              images={movie.images.webp.large_image_url}
              genres={movie.genres.map((genre) => genre.name)}
              synopsis={movie.title_synonyms}
              status={movie.status}
              score={movie.score}
              type={movie.type}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse" data-carousel-indicators>
        {movies.map((_, index) => (
          <button
          key={index}
          type="button"
          className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-yelow' : 'bg-white'}`}
          aria-current={currentIndex === index}
          aria-label={`Slide ${index + 1}`}
          data-carousel-slide-to={index}
          onClick={() => setCurrentIndex(index)}
        ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
