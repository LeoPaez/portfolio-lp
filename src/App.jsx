import React from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ScrollAnim } from "./components/AnimatedCont"
import ChangeLang from "./components/ChangeLang"

const Back = styled(motion.div)`
  background-color: ${props => props.backColor};
`

function App() {

  return (
    <div className="App">
      <ScrollAnim zIndex="100" duration="0.6">
        <Nav />
      </ScrollAnim>
      <ScrollAnim duration="0.7">
        <Hero />
      </ScrollAnim>
      <Back backColor="#212529">
        <ScrollAnim duration="0.8">
          <About />
        </ScrollAnim>
      </Back>
      <ScrollAnim duration="0.6">
        <Projects />
      </ScrollAnim>
      <ScrollAnim duration="0.6">
        <Contact />
      </ScrollAnim>
      <Back backColor="#212529">
        <ScrollAnim duration="0.6">
          <Footer />
        </ScrollAnim>
      </Back>
      <ChangeLang />
    </div>
  )
}

export default App
