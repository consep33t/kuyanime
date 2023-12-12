import { getAnimeResponse } from "@/app/libs/api-libs";
import CardTopManga from "./CardTopManga";

const TopMovies = async () => {

  const TopManga = await getAnimeResponse("top/manga");

  return (
    <div className="px-5">
      {
        TopManga.data.slice(0, 4).map((data) => (
          <CardTopManga
            key={data.mal_id}
            title={data.title}
            images={data.images.jpg.image_url}
            genres={data.genres.map((genre) =>genre.name)}
            score={data.scored}
          />
        ))
      }
    </div>
  )
}

export default TopMovies;