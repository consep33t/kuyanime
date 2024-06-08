// src/app/searcha-z/page.jsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LetterBtn from "../components/footer/letterBtn";
import AnimeList from "../components/AnimeList"; // Pastikan Anda memiliki komponen AnimeList

const SearchAZPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [letter, setLetter] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const letterParam = searchParams.get("letter");
    if (letterParam) {
      setLetter(letterParam);
      fetchData(letterParam, currentPage);
    }
  }, [searchParams, currentPage]);

  const fetchData = async (letter, page) => {
    // Ganti URL dengan URL API yang sesuai
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?letter=${letter}&page=${page}`
    );
    const anime = await response.json();
    setSearchResult(anime.data);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16">
      <div className="flex flex-wrap px-5 py-2 justify-center gap-3">
        <LetterBtn />
      </div>
      <div className="lista-z bg-white mx-auto my-5 py-4 px-7 sm:px-10 lg:px-14 xl:px-14">
        <h1 className="py-10 capitalize font-bold">
          Pencarian untuk alfabet: {letter}
        </h1>
        <div className="flex gap-3 justify-between flex-wrap">
          {searchResult.map((data) => (
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
              Sebelumnya
            </button>
          )}
          {currentPage > 1 && (
            <p className="bg-yelow rounded-sm px-2 py-1 mt-3">
              page: {currentPage}
            </p>
          )}
          {searchResult.length === 25 && (
            <button
              onClick={handleNextPage}
              className="bg-green rounded-sm px-2 py-1 mt-3"
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchAZPage;
