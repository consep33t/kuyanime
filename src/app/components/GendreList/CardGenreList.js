import Image from "next/image";

const CardGenreList = ({ images, title }) => {
    return (
        <div className="flex h-64">
                <div className="text-xs text-center w-36 h-52">
                    <div className="text-center text-xs h-full overflow-hidden relative">
                        <Image className="w-full h-full shadow-lg transition-transform duration-300 transform-gpu brightness-105 hover:scale-110 hover:brightness-75 cursor-pointer" 
                        src={images} 
                        alt="..." 
                        width={600} 
                        height={600} 
                        />
                    </div>
                    <h3 className="mt-2 cursor-pointer">{title}</h3>
                </div>
        </div>
    )
}

export default CardGenreList;