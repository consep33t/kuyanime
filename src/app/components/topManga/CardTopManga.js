import Image from "next/image";

const CardTopManga = ({ title, images, genres, score }) => {
    return (
        <div className="text-xs flex gap-3 border-b py-3">
            <Image
                className="w-16 h-24 object-cover"
                src={images}
                alt="..."
                width={400}
                height={400}
            />
            <div className="gap-1">
            <p className="font-bold">{title}</p>
            <p className="text-[0.9em] gap-1">Genre: {genres.join(', ')}</p>
            <p className="py-2">score: {score}</p>
            </div>
        </div>
    )
}
export default CardTopManga;