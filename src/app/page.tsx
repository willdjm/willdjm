'use client'

import { AboutMe } from './components/About';
import { NavBar } from './components/NavBar';
import { ParticlesComponent } from './components/Particles';
import { Portifolio } from './components/Portifolio';
import { Tec } from './components/Tec';
import { WDJMCorp } from './components/WDJMCorp';
import { Footer } from './components/Footer';

export default function Home() {
  return (
<main>
<ParticlesComponent id="tsparticles" />
  <NavBar/>
   <WDJMCorp/>
     <AboutMe/> 
  <Portifolio/>
  <Tec/>
<Footer/>
</main>
  )
}
