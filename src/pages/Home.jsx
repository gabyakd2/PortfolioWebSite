import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'

function Home() {
  return (
    <div>
        <NavBar/>
        <Banner />
        <Skills />
        <Projects />
    </div>
  )
}

export default Home