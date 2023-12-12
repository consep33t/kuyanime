import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ id, title, images, episodes }) => {

    return (
        <div className="text-xs text-center w-36 relative">
            <Link href={`/anime/${id}`}>
                <div className="text-center text-xs w-full h-52 overflow-hidden relative">
                    <div className="h-full relative transition-all duration-500 transform-gpu bg-black hover:scale-105 hover:brightness-50">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer hover:brightness-200">
                            <Image
                                src="/play.png"
                                alt="play"
                                className="w-16 h-16 object-cover invert"
                                width={200}
                                height={200}
                            />
                        </div>
                        <Image
                            className="w-full h-full shadow-lg cursor-pointer object-cover"
                            src={images}
                            alt="..."
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className="absolute bottom-0 p-2 z-20 opacity-100 items-center flex justify-between w-full">
                        <p className="font-bold text-white">Ep {episodes}</p>
                        <p className="text-white text-xs bg-yelow px-2 py-1 rounded-md">Sup</p>
                    </div>
                </div>
                <h3 className="mt-2 cursor-pointer">{title}</h3>
            </Link>
        </div>
    );
};

export default AnimeList;



