import Image from "next/image";
import Link from "next/link";

const TrendingWeek = ({ id, images, title }) => {
  return (
    <div className="relative w-auto h-72 cursor-pointer hidden md:block">
      <Link href={`/anime/${id}`}>
        <Image
          className="w-auto h-full object-cover filter brightness-75"
          src={images}
          alt="..."
          width={200}
          height={200}
        />
        <div className="ml-2 uppercase absolute inset-0 flex justify-center text-sm text-white flex-col">
          <p>KuyAnime</p>
          <p>Trending Minggu Ini</p>
          <p className="font-bold">{title}</p>
        </div>
      </Link>
    </div>
  )
}

export default TrendingWeek;