import { getAnimeResponse } from '@/app/libs/api-libs';

const AnimeDetail = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  const videoUrl = anime.data.trailer?.embed_url;

  return (
    <div className='w-full lg:p-8 gap-9 flex flex-col md:p-0 sm:p-0'>

      {videoUrl ? (
        <div className='bg-white w-full p-8 sm:h-16 md:p-8 h-[400px] lg:h-[650px] gap-5 flex flex-col rounded-md'>
          <h3>{anime.data.title}</h3>
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title={anime.data.title}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className='bg-white w-full h-[400px] lg:h-[650px] flex items-center justify-center'>
          <p>Video tidak ditemukan</p>
        </div>
      )}

      <div className='bg-white w-full p-5 flex flex-col md:flex-row md:justify-between rounded-md'>
        <div className='image mb-5 md:mb-0'>
          <img
            className='w-full h-auto object-cover'
            src={anime.data.images.webp.large_image_url}
            alt={anime.data.title}
          />
        </div>

        <div className='w-full p-5 md:w-3/4'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold text-green text-xl'>{anime.data.title}</h3>
            <p className='text-sm text-gray-600'>{anime.data.title_english}, {anime.data.title_japanese}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='p-3 capitalize z-10 relative'>Rating :  {anime.data.score}</p>
          </div>
          <ul className='grid grid-cols-2 gap-4 text-sm'>
            <li className="bg-gray-600 text-white p-4 capitalize rounded-md"><a>type : {anime.data.type}</a></li>
            <li className="bg-gray-600 text-white p-4 capitalize rounded-md"><a>source : {anime.data.source}</a></li>
            <li className="bg-gray-600 text-white p-4 capitalize rounded-md"><a>episodes : {anime.data.episodes}</a></li>
            <li className="bg-gray-600 text-white p-4 capitalize rounded-md"><a>status : {anime.data.status}</a></li>
            <li className="bg-gray-600 text-white p-4 capitalize rounded-md"><a>aired : {anime.data.aired.string}</a></li>
            <li className="bg-gray-600 text-white p-4 capitalize rounded-md"><a>duration : {anime.data.duration}</a></li>
            <li className="bg-gray-600 text-white p-4 capitalize rounded-md"><a>rating : {anime.data.rating}</a></li>
            <li className="bg-gray-600 text-white p-4 capitalize rounded-md"><a>season : {anime.data.season}</a></li>
          </ul>
        </div>
      </div>

      <div className='w-full gap-2 flex flex-col p-5'>
        <p className='text-start capitalize text-gray-600 font-semibold'>genres : {anime.data.genres.map((genre) => genre.name).join(', ')}</p>
        <p className='text-start capitalize text-gray-600 font-semibold'>studios : {anime.data.studios.map((studios) => studios.name)}</p>
        <p className='text-start capitalize text-gray-600 font-semibold'>producers : {anime.data.producers.map((producers) => producers.name).join(', ')}</p>
        <p className='text-start capitalize text-gray-600 font-semibold'>rating : {anime.data.rating}</p>
        <p className='text-start capitalize text-gray-600 font-semibold'>synopsis :</p>
        <p className='text-start capitalize text-gray-600'>{anime.data.synopsis}</p>
      </div>

    </div>
  );
};

export default AnimeDetail;
