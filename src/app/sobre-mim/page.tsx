'use client'

import { AboutMe } from "../components/About"
import { NavBarWdjmCorp } from "../components/NavBarWdjmCorp"


export default function PageAboutMe() {
  return (
<main>
  <NavBarWdjmCorp/>
  <section id="about" className="text-white h-screen bg-black items-center justify-center  text-center flex" >
  <AboutMe/>
  </section>
</main>
  )
}
