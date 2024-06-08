// pages/search.js
"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAnimeResponse } from '@/app/libs/api-libs';
import AnimeList from '../components/AnimeList';

const Search = () => {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState([]);
  const [letter, setLetter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (newLetter, page) => {
    try {
      const response = await getAnimeResponse('anime', `letter=${newLetter}&page=${page}`);
      setSearchResult(response.data || []);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setLetter(newLetter);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const defaultLetter = 'A';

    if (!router.query || !('letter' in router.query)) {
      fetchData(defaultLetter, currentPage); // Change here
      setLetter(defaultLetter);
    } else {
      const { letter: queryLetter } = router.query;
      fetchData(queryLetter, currentPage); // Change here
      setLetter(queryLetter);
    }
  }, [router.query, currentPage]); // Added router.query dependency

  const handleButtonClick = (newLetter) => {
    router.push(`/searcha-z?letter=${newLetter}`);
    fetchData(newLetter, 1); // Reset page to 1 when changing letter
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16">
      <div className="flex flex-wrap px-5 py-2 justify-center gap-3">
        {Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index)).map((char) => (
          <button
            key={char}
            onClick={() => handleButtonClick(char)}
            className={`px-3 py-1 border rounded-md ${letter === char ? 'bg-green text-white' : 'bg-gray-300'}`}
          >
            {char}
          </button>
        ))}
      </div>
      {searchResult.length > 0 ? (
        <div className="lista-z bg-white mx-auto my-5 py-4 px-7 sm:px-10 lg:px-14 xl:px-14">
          <h1 className='py-10 capitalize font-bold'>pencarian untuk alfabet : {letter}</h1>
          <div className="flex gap-3 justify-between flex-wrap">
            {searchResult.map((data) => (
              <AnimeList
                id={data.mal_id}
                title={data.title}
                images={data.images.webp.large_image_url}
                episodes={data.episodes}
              />
            ))}
          </div>
          <div className="text-sm text-white flex justify-center gap-5 p-4">
            {currentPage > 1 && (
              <button onClick={handlePrevPage} className="bg-green rounded-sm px-2 py-1 mt-3">sebelumnya</button>
            )}
            {currentPage > 1 && (
              <p className='bg-yelow rounded-sm px-2 py-1 mt-3'>page: {currentPage}</p>
            )}
            {currentPage < 15 && (
              <button onClick={handleNextPage} className="bg-green rounded-sm px-2 py-1 mt-3">selanjutnya</button>
            )}
          </div>
        </div>
      ) : (
        <div className="lista-z bg-white mx-auto my-5 h-screen py-4 px-3 sm:px-10 lg:px-14 xl:px-20">
          <p>Loading Tooott.....!</p>
        </div>
      )}
    </div>
  );
};

export default Search;
