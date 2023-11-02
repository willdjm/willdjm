'use client'

import Link from 'next/link';

export function Portifolio() {

    return (

<section id='port' className="text-white top-0 lg:h-screen h-full px-4 lg:py-0 py-28 bg-black items-center justify-center text-center lg:flex lg:flex-col" >

      <div className='items-center justify-center w-full flex flex-col max-w-6xl'>
<div className='max-w-6xl w-full items-center justify-center lg:flex gap-5'>
<div className='w-full max-w-sm'>
<h2 className='items-start justify-start flex w-full text-4xl font-semibold pb-4' >
Portifólio
</h2>
<p  className='items-start text-left text-lg justify-start flex w-full'>
In my work, I am dedicated to delivering innovative, user-centric solutions that push the boundaries of technology. I specialize in crafting robust and scalable web applications,or websites providing both frontend and backend development services.
</p>
</div>

<div className='grid lg:grid-cols-2 w-full pt-10  gap-5 items-center justify-center justify-items-center'>

<div className="overflow-hidden max-w-xs aspect-vide cursor-pointer relative group">
<div className="z-50 opacity-0 group-hover:opacity-100 transition h-full duration-300 ease-in-out cursor-pointer absolute from-purple-400/80 to-transparent bg-gradient-to-t inset-x-0  text-white flex justify-center items-center">
<div className="group-hover:opacity-100 group-hover:translate-y-0 gap-6 flex translate-y-4  transform transition duration-300 ease-in-out">
<Link href='https://globo.com' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Github</button>
</Link>
<Link href='www.google.com.br' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Projeto</button>
</Link>
</div>
</div>
<img className="" src="/2.png" alt=""/>
</div>

<div className="overflow-hidden max-w-xs aspect-vide cursor-pointer relative group">
<div className="z-50 opacity-0 group-hover:opacity-100 transition h-full duration-300 ease-in-out cursor-pointer absolute from-green-400/80 to-transparent bg-gradient-to-t inset-x-0  text-white flex justify-center items-center">
<div className="group-hover:opacity-100 group-hover:translate-y-0 gap-6 flex translate-y-4  transform transition duration-300 ease-in-out">
<Link href='https://globo.com' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Github</button>
</Link>
<Link href='www.google.com.br' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Projeto</button>
</Link>
</div>
</div>
<img className="" src="/3.png" alt=""/>
</div>

<div className="overflow-hidden max-w-xs aspect-vide cursor-pointer relative group">
<div className="z-50 opacity-0 group-hover:opacity-100 transition h-full duration-300 ease-in-out cursor-pointer absolute from-blue-500/80 to-transparent bg-gradient-to-t inset-x-0  text-white flex justify-center items-center">
<div className="group-hover:opacity-100 group-hover:translate-y-0 gap-6 flex translate-y-4  transform transition duration-300 ease-in-out">
<Link href='https://globo.com' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Github</button>
</Link>
<Link href='www.google.com.br' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Projeto</button>
</Link>
</div>
</div>
<img className="" src="/4.png" alt=""/>
</div>

<div className="overflow-hidden max-w-xs aspect-vide cursor-pointer relative group">
<div className="z-50 opacity-0 group-hover:opacity-100 transition h-full duration-300 ease-in-out cursor-pointer absolute from-gray-500/80 to-transparent bg-gradient-to-t inset-x-0  text-white flex justify-center items-center">
<div className="group-hover:opacity-100 group-hover:translate-y-0 gap-6 flex translate-y-4  transform transition duration-300 ease-in-out">
<Link href='https://globo.com' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Github</button>
</Link>
<Link href='www.google.com.br' target='_blank' rel="noreferrer">
<button className="bg-purple-700 hover:bg-purple-900 text-sm text-white font-medium py-2 px-4 rounded-xl">Projeto</button>
</Link>
</div>
</div>
<img className="" src="/2.png" alt=""/>
</div>

</div>
</div>   
</div>
</section>
  )
}
