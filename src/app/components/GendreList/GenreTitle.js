"use client";
import { useState, useEffect } from "react";
import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "../AnimeList";
const GenreTitle = () => {
  const [filter, setFilter] = useState("airing"); // State untuk menyimpan filter yang sedang aktif
  const [animeData, setAnimeData] = useState([]); // State untuk menyimpan data anime

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAnimeResponse(
          "top/anime",
          `filter=${filter}`
        );
        setAnimeData(response.data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    }

    fetchData();
  }, [filter]);

  const handleFilterChange = async (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="">
      <div className="bg-f1 flex justify-between mt-4 mx-5 rounded-sm">
        <div className="w-full p-1 rounded-sm flex justify-between">
          <button
            className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${
              filter === "airing" ? "bg-green text-white" : ""
            }`}
            onClick={() => handleFilterChange("airing")}
          >
            airing
          </button>
          <button
            className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${
              filter === "upcoming" ? "bg-green text-white" : ""
            }`}
            onClick={() => handleFilterChange("upcoming")}
          >
            upcoming
          </button>
          <button
            className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${
              filter === "bypopularity" ? "bg-green text-white" : ""
            }`}
            onClick={() => handleFilterChange("bypopularity")}
          >
            popularity
          </button>
          <button
            className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${
              filter === "favorite" ? "bg-green text-white" : ""
            }`}
            onClick={() => handleFilterChange("favorite")}
          >
            favorite
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-4 mx-5 flex-wrap p-2">
        {animeData.slice(0, 5).map((data) => (
          <AnimeList
            key={data.mal_id}
            id={data.mal_id}
            title={data.title}
            images={data.images.webp.large_image_url}
            episodes={data.episodes}
          />
        ))}
      </div>
    </div>
  );
};

export default GenreTitle;
