// components/Footer.js
import Image from "next/image";
import Link from "next/link";
const Footer = () => {

    return (
        <footer className="bg-footer">
            <div className="title bg-green w-full p-2 flex justify-center items-center">
                <h3 className='text-white capitalize'>
                    asu kabehh
                </h3>
            </div>
            <div className="a-z flex p-4 gap-8 items-center hidden sm:flex">
                <h3 className="text-white py-6 px-2 text-xl font-bold">A - Z List.</h3>
                <p className="text-white capitalize p-1 text-sm">cari berdasarkan alfabet .?</p>
            </div>
            <a
                href="/searcha-z?letter=A"
                className="button-search ml-24 mt-2 w-24 rounded-sm text-white text-sm cursor-pointer py-1 px-3 bg-green capitalize hover:bg-slate-600 hover:text-green hidden sm:block"
            >
                cari a - z
            </a>

            <div className="logo p-10 flex flex-col items-center sm:flex-row sm:gap-8 h-56">
                <Link href="/">
                    <>
                        <Image
                            src="/logo.png"
                            alt="Vercel Logo"
                            className="dark:invert h-14 w-64 cursor-pointer"
                            width={230}
                            height={40}
                            priority
                        />
                    </>
                </Link>
                <div className="copyright text-white mt-4 sm:mt-0 text-center p-2">
                    <p className="mb-1 text-xs">Copyright © 2023 ANIMEKOMPI.CAM. All Rights Reserved</p>
                    <p className="text-xs">
                        Disclaimer: This site ANIMEKOMPI.CAM does not store any files
                        <br />
                        on its server.
                        All contents are provided by non-affiliated third parties.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
