"use client"
import { useState } from 'react';

const Head = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='bg-green w-auto flex items-center list-none gap-5 py-5 px-14 border text-xs'>
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          <svg
            className='w-6 h-6 text-gray-300'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {showMenu ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            )}
          </svg>
        </button>
      </div>

      <ul className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
        <li>
          <a href='/' className='text-gray-300 no-underline cursor-pointer transition-transform transition-color transform hover:scale-110 hover:bg-abu hover:text-white p-3'>
            Home
          </a>
        </li>
        <li>
          <a href="/searcha-z" className="text-gray-300 no-underline cursor-pointer transition-transform transition-color transform hover:scale-110 hover:bg-abu hover:text-white p-3">Anime List A-Z</a>
        </li>
        <li>
          <a href="/upcoming" className="text-gray-300 no-underline cursor-pointer transition-transform transition-color transform hover:scale-110 hover:bg-abu hover:text-white p-3">Upcoming Anime</a>
        </li>
        <li>
          <a href="/fall-2023" className="text-gray-300 no-underline cursor-pointer transition-transform transition-color transform hover:scale-110 hover:bg-abu hover:text-white p-3">Fall 2023</a>
        </li>
        <li>
          <a href="/schedules" className="text-gray-300 no-underline cursor-pointer transition-transform transition-color transform hover:scale-110 hover:bg-abu hover:text-white p-3">Jadwal Rilis</a>
        </li>
      </ul>
    </div>
  );
};

export default Head;
