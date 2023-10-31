'use client'

import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

import {ParticlesComponent} from './components/Particles';
import Link from 'next/link';
import { NavBar } from './components/NavBar';

export default function Home() {
  return (
<main className='h-screen bg-black opacity-90 flex flex-col items-center justify-center'>
  <NavBar/>
<ParticlesComponent id="tsparticles" />
<div className='flex flex-col gap-2 relative'>
<Link href="https://github.com/willdjm" >
<picture>
<img src="./1.png" alt="" className='lg:h-64 h-52 opacity-90 border-b-2'/>
</picture>
</Link>

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

</main>
  )
}
