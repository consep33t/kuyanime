import Image from 'next/image'
import Link from 'next/link';
import InputSearch from './InputSearch';

const Navbar = () => {
  return (
    <nav className="w-full bg-white-500 flex items-center p-3">
      <div className="container flex justify-between items-center">
        <div className='w-full gap-8 justify-between flex'>
          <Link href="/">
            <>
              <Image
                src="/logo.png"
                alt="Vercel Logo"
                className="dark:invert h-11 w-44 cursor-pointer "
                width={230}
                height={40}
                priority
              />
            </>
          </Link>
          <div className="lg:w-1/3 sm:w-40 flex items-center text-sm">
            <InputSearch />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;