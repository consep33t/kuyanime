import AnimeList from "@/app/components/AnimeList";
import { getAnimeResponse } from "@/app/libs/api-libs";
const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURIComponent(keyword);

  const searchAnime = await getAnimeResponse(`anime?q=${keyword}`);

  return (
    <div className="w-full md:p-0 lg:p-10">
      <div className="w-full">
        <div className="bg-white">
          <div>
            <h3 className="pt-10 px-10 w-full font-bold capitalize border-b-2">
              pencarian untuk anime {decodedKeyword}
            </h3>
          </div>
          <div className="w-full flex flex-wrap gap-4 p-10 justify-between">
            {searchAnime.data.map((data) => (
              <AnimeList
                key={data.mal_id}
                id={data.mal_id}
                title={data.title}
                images={data.images.webp.large_image_url}
                episodes={data.episodes}
              />
            ))}
          </div>
          <div className="text-sm text-white flex justify-center gap-5 p-4"></div>
        </div>
      </div>
    </div>
  );
};
export default Page;
