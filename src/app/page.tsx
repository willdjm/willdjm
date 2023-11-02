'use client'

import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

import {ParticlesComponent} from './components/Particles';
import Link from 'next/link';
import { NavBar } from './components/NavBar';
import { WDJMCorp } from './components/WDJMCorp';
import { AboutMe } from './components/About';
import { Portifolio } from './components/Portifolio';
import { Tec } from './components/Tec';
import { Footer } from './components/Footer';

export default function Home() {
  return (
<main>
  <NavBar/>
<ParticlesComponent id="tsparticles" />
<WDJMCorp/>
<AboutMe/>
<Portifolio/>
<Tec/>
<Footer/>

</main>
  )
}
