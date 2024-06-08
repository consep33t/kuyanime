import './globals.css'
import GenreTitle from "./components/GendreList/GenreTitle";
import TopAnime from "./components/topAnime/TopAnime";
import TopMovies from "./components/topManga/TopMovies";
import List from "./components/AnimeList/List";
import Hero from "./components/Hero/Hero";

const Page = async () => {

  return (
    <>
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr,1fr,0.8fr] gap-1 md:gap-5 mx-0 md:mx-10">
  <div className="left md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-1">
    <Hero />
    <List />
    <div className="genre-list col-span-3 my-10">
      <div className="shadow-sm bg-white rounded-md">
        <div className="flex justify-between border-b p-3 text-sm">
          <h3 className="font-bold capitalize">rekomendasi top anime</h3>
        </div>
        <GenreTitle />
      </div>
    </div>
  </div>

  <div className="right md:col-start-3 md:row-start-1 my-5 w-full sm:w-full">
    <div className="top-anime md:col-start-3 md:row-start-2">
      <div className="mb-5 h-auto bg-white rounded-sm">
        <TopAnime />
      </div>
      <div className="movie-top bg-white my-5 rounded-sm flex flex-col">
        <div className="flex justify-between border-b p-3 text-sm">
          <h3 className="font-bold capitalize">rekomendasi top manga</h3>
        </div>
        <TopMovies />
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Page;
