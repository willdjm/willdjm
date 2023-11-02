import Image from 'next/image';
import Link from 'next/link';
import Linkk from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';


export function NavBar() {
  
  const [navbar, setNavbar] = useState(false);
  return (
    <div id='Top'>
      <nav className="w-full fixed top-0 lg:top-10 px-2 py-2 left-0 right-0 z-10">
        <div className="justify-between mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:block">
              {/* LOGO */}
              <Linkk href="/">
            <h2 className="text-2xl font-bold ">
                <picture>
                    <img
                        src="/1.png"
                        alt="logo"

                        className='lg:opacity-0 w-28 h-full'
                    />
                </picture>
            </h2>
        </Linkk>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden px-4">
                <button
                  className=" text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoCloseSharp size={30} className='text-white'/>
                      ) : (
                    <BiMenu size={30} className='text-white'/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`w-full h-full flex items-center justify-center md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-0 md:p-0 block bg-black opacity-80 md:bg-transparent w-full' : 'hidden'
              }`}
            >
              <div id='home' className="h-screen md:h-auto md:items-end items-center justify-center md:grid gap-5">
                <ul className='md:flex md:items-center md:justify-end gap-10'>
                <li className="text-base text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Linkk className='cursor-pointer' href="#AbouteMe" onClick={() => setNavbar(!navbar)}>ABOUT ME</Linkk>
                </li>
                <li className="text-base  text-white py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-2 md:border-opacity-0 border-white md:hover:bg-transparent">
                <Linkk className='cursor-pointer' href="#port" onClick={() => setNavbar(!navbar)}>PORTLOFIO</Linkk>
                </li>



                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}