'use client'

import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

import Link from 'next/link';

export function WDJMCorp() {

    return (
      <section id="/" className="text-white top-0 h-screen bg-black items-center justify-center text-center flex">
      <div className='flex flex-col gap-2 relative'>
<Link href="https://github.com/willdjm" >
<picture>
<img src="./1.png" alt="" className='lg:h-64 h-36 opacity-90 border-b-2'/>
</picture>
</Link>

<div className='text-white flex items-center justify-center gap-2 justify-items-center'>
<Link href="https://github.com/willdjm"
className='flex gap-1 items-center cursor-pointer text-base lg:justify-end'>
<AiFillGithub className='cursor-pointer hidden md:flex' size={30} />
<AiFillGithub className='cursor-pointer md:hidden flex' size={25} />
</Link>
<Link href="https://www.linkedin.com/in/wilkinsondouglas/"
className='flex gap-1 items-center cursor-pointer text-base lg:justify-end'>
<BsLinkedin className='cursor-pointer hidden md:flex' size={28} />
<BsLinkedin className='cursor-pointer md:hidden flex' size={24} />
</Link>
<Link href="https://www.instagram.com/willdjm/"
className='flex gap-1 items-center cursor-pointer text-base lg:justify-end'>
<AiOutlineInstagram className='cursor-pointer hidden md:flex' size={33} />
<AiOutlineInstagram className='cursor-pointer md:hidden flex' size={30} />
</Link>
<Link href="https://www.facebook.com.br/wilkinsondouglas/"
className='flex gap-1 items-center cursor-pointer text-base lg:justify-end'>
<FaFacebookF className='cursor-pointer hidden md:flex' size={30} />
<FaFacebookF className='cursor-pointer md:hidden flex' size={25} />
</Link>
<Link href="mailto:wilkindondjm@gmail.com"
className='flex items-center cursor-pointer text-base lg:justify-end'>
<BsWhatsapp className='cursor-pointer hidden md:flex' size={30} />
<BsWhatsapp className='cursor-pointer md:hidden flex' size={25} />
</Link>
<Link href="mailto:wilkindondjm@gmail.com"
className='flex items-center cursor-pointer text-base lg:justify-end'>
<MdOutlineMailOutline className='cursor-pointer hidden md:flex' size={35} />
<MdOutlineMailOutline className='cursor-pointer md:hidden flex' size={30} />
</Link>


</div>
</div>
</section>
  )
}
