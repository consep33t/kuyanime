"use client"
import React, { useState, useEffect } from 'react';
import { getAnimeResponse } from "../../libs/api-libs";
import CardTopAnime from "./CardTopAnime";

const BtnTopAnime = ({ setSliceRange }) => {
    return (
        <div className="flex justify-between">
            <button className="hover:text-green rounded-sm px-8 py-1 text-xs focus:text-white focus:bg-green" onClick={() => setSliceRange(0, 5)}>
                0-4
            </button>
            <button className="hover:text-green rounded-sm px-8 py-1 text-xs focus:text-white focus:bg-green" onClick={() => setSliceRange(5, 10)}>
                5-10
            </button>
            <button className="hover:text-green rounded-sm px-8 py-1 text-xs focus:text-white focus:bg-green" onClick={() => setSliceRange(10, 15)}>
                11-15
            </button>
        </div>
    );
};

const TopAnime = () => {
    const [sliceStart, setSliceStart] = useState(0);
    const [sliceEnd, setSliceEnd] = useState(4);
    const [topAnime, setTopAnime] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAnimeResponse('top/anime', 'title=naruto');
                setTopAnime(response.data);
            } catch (error) {
                console.error('Error fetching top anime:', error);
            }
        }

        fetchData();
    }, []);

    const slicedAnime = topAnime.slice(sliceStart, sliceEnd);

    const handleSliceRange = (start, end) => {
        setSliceStart(start);
        setSliceEnd(end);
    };

    const calculateIndex = (index) => {
        if (sliceStart === 0) {
            return index + 1;
        } else if (sliceStart === 5) {
            return index + 6;
        } else if (sliceStart === 10) {
            return index + 11;
        }
        return index;
    };

    return (
        <div className="">
            <div>
                <h3 className="border-b text-sm font-bold p-2 capitalize">anime terpopuler</h3>
            </div>
            <div className="bg-f1 m-2 px-1 py-1 text-xs rounded-sm">
                <BtnTopAnime setSliceRange={handleSliceRange} />
            </div>
            <div className="">
                {slicedAnime.map((data, index) => (
                    <CardTopAnime
                        id={data.mal_id}
                        index={calculateIndex(index)}
                        title={data.title}
                        images={data.images.webp.image_url}
                        genres={data.genres.map((genre) =>genre.name)}
                        score={data.score}
                    />
                ))}
            </div>
        </div>
    );
}

export default TopAnime;
