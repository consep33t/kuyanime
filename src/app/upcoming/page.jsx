"use client";
import AnimeList from "../components/AnimeList";
import { getAnimeResponse } from "../libs/api-libs";
import { useState, useEffect } from "react";
const UpComing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [upComingAnime, setupComingAnime] = useState([]);

  const fetchupComingAnime = async (page) => {
    try {
      const response = await getAnimeResponse(
        "seasons/upcoming",
        `page=${page}`
      );
      setupComingAnime(response.data);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error fetching ongoing anime:", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    fetchupComingAnime(currentPage);
  }, [currentPage]);

  return (
    <div className="w-full md:p-0 lg:p-10">
      <div className="w-full">
        <div className="bg-white">
          <div>
            <h3 className="pt-10 px-10 w-full font-bold capitalize border-b-2">
              upcoming anime next seasons...
            </h3>
          </div>
          <div className="w-full flex flex-wrap gap-4 p-10 justify-between">
            {upComingAnime.map((data) => (
              <AnimeList
                key={data.mal_id}
                id={data.mal_id}
                title={data.title}
                images={data.images.webp.large_image_url}
                episodes={data.episodes}
              />
            ))}
          </div>
          <div className="text-sm text-white flex justify-center gap-5 p-4">
            {currentPage > 1 && (
              <button
                onClick={handlePrevPage}
                className="bg-green rounded-sm px-2 py-1 mt-3"
              >
                sebelumnya
              </button>
            )}
            {currentPage > 1 && (
              <p className="bg-yelow rounded-sm px-2 py-1 mt-3">
                page: {currentPage}
              </p>
            )}
            {currentPage < 18 && (
              <button
                onClick={handleNextPage}
                className="bg-green rounded-sm px-2 py-1 mt-3"
              >
                selanjutnya
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpComing;
