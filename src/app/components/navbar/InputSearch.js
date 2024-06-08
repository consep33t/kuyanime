"use client"
import { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            const keyword = searchRef.current.value.trim(); // Menghilangkan spasi di awal dan akhir

            if (keyword) {
                router.push(`/search/${keyword}`);
            }
        }
    };

    const handleButtonClick = () => {
        const keyword = searchRef.current.value.trim();

        if (keyword) {
            router.push(`/search/${keyword}`);
        }
    };

    return (
        <div className="flex w-full gap-3 items-center">
            <input
                placeholder="Cari anime ..?"
                className="w-full px-3 py-1 border rounded-sm"
                ref={searchRef}
                onKeyPress={handleSearch}
            />
            <button onClick={handleButtonClick}>
                <p>Cari</p>
            </button>
        </div>
    );
};

export default InputSearch;
