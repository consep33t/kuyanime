import Carousel from "./Carousel";
import TrendingWeek from "./TrendingWeek";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Hero = async () => {
  const trendingWeek = await getAnimeResponse(
    "anime",
    "order_by=title&q=jujutsukaisen"
  );

  return (
    <div className="head col-span-3">
      <div className="flex justify-center h-72 md:my-5 gap-5">
        <div className="w-full md:w-4/5 overflow-hidden">
          <Carousel />
        </div>
        {trendingWeek.data.slice(0, 1).map((data) => (
          <TrendingWeek
            key={data.mal_id}
            id={data.mal_id}
            title={data.title}
            images={data.images.webp.large_image_url}
          />
        ))}
      </div>
    </div>
  );
};
export default Hero;
