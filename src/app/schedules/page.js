"use client"
import AnimeList from "../components/AnimeList";
import { getAnimeResponse } from "../libs/api-libs";
import { useState, useEffect } from "react";

const schedules = () => {
    const [filter, setFilter] = useState('monday'); // State untuk menyimpan filter yang sedang aktif
    const [animeData, setAnimeData] = useState([]); // State untuk menyimpan data anime

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAnimeResponse('schedules', `filter=${filter}`);
                setAnimeData(response.data);
            } catch (error) {
                console.error('Error fetching anime data:', error);
            }
        }

        fetchData();
    }, [filter]);

    const handleFilterChange = async (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div className="w-full md:p-0 lg:p-10">
            <div className="w-full">
                <div className="w-full p-5 rounded-sm flex flex-wrap lg:flex-nowrap bg-white border-b-2">
                    <button
                        className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${filter === 'senin' ? 'bg-green text-white' : ''}`}
                        onClick={() => handleFilterChange('monday')}
                    >
                        senin
                    </button>
                    <button
                        className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${filter === 'tuesday' ? 'bg-green text-white' : ''}`}
                        onClick={() => handleFilterChange('tuesday')}
                    >
                        selasa
                    </button>
                    <button
                        className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${filter === 'wednesday' ? 'bg-green text-white' : ''}`}
                        onClick={() => handleFilterChange('wednesday')}
                    >
                        rabu
                    </button>
                    <button
                        className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${filter === 'thursday' ? 'bg-green text-white' : ''}`}
                        onClick={() => handleFilterChange('thursday')}
                    >
                        kamis
                    </button>
                    <button
                        className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${filter === 'friday' ? 'bg-green text-white' : ''}`}
                        onClick={() => handleFilterChange('friday')}
                    >
                        jum'at
                    </button>
                    <button
                        className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${filter === 'Saturday' ? 'bg-green text-white' : ''}`}
                        onClick={() => handleFilterChange('Saturday')}
                    >
                        Saturday
                    </button>
                    <button
                        className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${filter === 'Sunday' ? 'bg-green text-white' : ''}`}
                        onClick={() => handleFilterChange('Sunday')}
                    >
                        Sunday
                    </button>
                    <button
                        className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${filter === 'unknown' ? 'bg-green text-white' : ''}`}
                        onClick={() => handleFilterChange('unknown')}
                    >
                        unknown
                    </button>
                    <button
                        className={`hover:text-green w-full text-center capitalize rounded-sm p-1 text-sm focus:text-white focus:bg-green ${filter === 'other' ? 'bg-green text-white' : ''}`}
                        onClick={() => handleFilterChange('other')}
                    >
                        other
                    </button>
                </div>
                <div className="bg-white">
                    <div className="w-full flex flex-wrap gap-4 p-10 justify-between">
                        {animeData.map((data) => (
                            <AnimeList
                                id={data.mal_id}
                                title={data.title}
                                images={data.images.webp.large_image_url}
                                episodes={data.episodes}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default schedules;