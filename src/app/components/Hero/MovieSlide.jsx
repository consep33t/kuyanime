import Image from "next/image";
import Link from "next/link";

const MovieSlide = ({ id, title, images, genres, synopsis, status, score, type }) => {
  return (
    <div className="w-full md:w-auto h-72 relative">
        <Image
          className="w-full h-72 object-cover filter blur-md brightness-[20%]"
          src={images}
          alt="Movie Poster"
          width={200}
          height={200}
          />
        <div className="w-full md:w-auto h-72 flex items-center justify-between px-6 md:px-16 py-4 md:py-9 absolute inset-0 bg-black bg-opacity-50">
          <div className="text-white">
            <div className="flex items-center">
              <Image
                src="/star.png"
                alt="stars"
                className="w-10 h-10 object-cover relative mr-2"
                width={200}
                height={200}
              />
              <h1 className="text-center text-xs absolute ml-2 mt-2">{score}</h1>
              <h1 className="text-lg md:text-xl">{title}</h1>
            </div>
            <p className="text-xs md:text-sm mb-2">{genres.join(", ")}</p>
            <div className="text-xs md:text-sm">
              <h3 className="mb-1 md:mb-2 uppercase">Ringkasan:</h3>
              <p className="mb-1 md:mb-2">{synopsis}</p>
              <p className="mb-1 md:mb-2">Status: {status}</p>
              <p className="mb-1 md:mb-2">Type: {type}</p>
            </div>
          </div>
          <div className="w-24 md:w-28 h-32 md:h-40">
            <Image
              className="w-full h-full shadow-lg rounded-sm"
              src={images}
              alt="Movie Poster"
              width={200}
              height={200}
            />
          </div>
        </div>
    </div>
  );
};

export default MovieSlide;
