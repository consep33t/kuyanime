"use client";
import React, { useState, useEffect } from "react";
import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from ".";

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ongoingAnime, setOngoingAnime] = useState([]);

  const fetchOngoingAnime = async (page) => {
    try {
      const response = await getAnimeResponse("seasons/now", `page=${page}`);
      setOngoingAnime(response.data);
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
    fetchOngoingAnime(currentPage);
  }, [currentPage]);

  return (
    <div className="anime-list col-span-3">
      <div className="shadow-sm bg-white rounded-md">
        <div className="flex justify-between bg-green shadow-xl p-3 text-sm rounded-t-sm">
          <h3 className="font-bold text-white">Rilisan terbaru</h3>
        </div>
        <div className="shadow-lg p-2">
          <div className="flex justify-between mt-4 mx-5 flex-wrap gap-2">
            {ongoingAnime.map((data) => (
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
            {currentPage < 9 && (
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

export default List;
