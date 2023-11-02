'use client'

import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

import Link from 'next/link';

export function AboutMe() {

    return (
      <section id="AbouteMe" className="text-white top-0 h-screen bg-black items-center justify-center text-center flex flex-col" >
      <div className='flex flex-col items-center justify-center gap-5 relative'>
<Link href="https://github.com/willdjm" >
<picture>
<img src="./avatar.jpg" alt="" className='lg:h-32 h-28 rounded-full'/>
</picture>
</Link>

<h1 className='lg:text-5xl text-3xl font-medium items-center '>Wilkinson Morais</h1>
<h2 className='lg:text-3xl text-xl items-center lg:pb-3'>Developer Front-End</h2>

<div className='text-white flex items-center justify-center gap-2 justify-items-center'>
<Link href="https://github.com/willdjm"
className='flex gap-1 items-center cursor-pointer text-base lg:justify-end'>
<AiFillGithub className='cursor-pointer hidden md:flex' size={30} />
<AiFillGithub className='cursor-pointer md:hidden flex' size={30} />
</Link>
<Link href="https://www.linkedin.com/in/wilkinsondouglas/"
className='flex gap-1 items-center cursor-pointer text-base lg:justify-end'>
<BsLinkedin size={28} />
</Link>
<Link href="https://www.instagram.com/willdjm/"
className='flex gap-1 items-center cursor-pointer text-base lg:justify-end'>
<AiOutlineInstagram size={33} />
</Link>
<Link href="https://www.facebook.com.br/wilkinsondouglas/"
className='flex gap-1 items-center cursor-pointer text-base lg:justify-end'>
<FaFacebookF size={30} />
</Link>
<Link href="mailto:wilkindondjm@gmail.com"
className='flex items-center cursor-pointer text-base lg:justify-end'>
<BsWhatsapp size={30} />
</Link>
<Link href="mailto:wilkindondjm@gmail.com"
className='flex items-center cursor-pointer text-base lg:justify-end'>
<MdOutlineMailOutline size={30} />
</Link>


</div>
</div>
</section>
  )
}
