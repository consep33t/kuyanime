import Image from "next/image";
import Link from "next/link";

const CardTopAnime = ({ id, title, images, index, genres, score }) => {
    return (
        <div className="flex justify-center w-full border-b">
            <div className="text-xs flex items-center justify-center">
                <h1 className="text-center border rounded-sm border-green text-green px-2 py-1 m-5">{index}</h1>
            </div>
            <div className="flex gap-3 my-3 w-full">
                <Image
                    className="w-16 h-24 object-cover"
                    src={images}
                    alt="..."
                    width={200}
                    height={200}
                />
            <Link href={`/anime/${id}`}>
                <div className="text-xs">
                    <h1 className="font-bold">{title}</h1>
                    <p className="text-[0.9em] gap-1">Genre: {genres.join(', ')}</p>
                    <p className="py-2">score: {score}</p>
                </div>
            </Link>
            </div>
        </div>
    )
}
export default CardTopAnime;