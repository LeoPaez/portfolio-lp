import './App.css'
import styled from 'styled-components'

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from "./components/Skills"
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChangeLang from "./components/ChangeLang"
import { Anim, ScrollAnim } from "./components/AnimatedCont"

const BackgroundWrapper = styled.div`
  background-color: ${props => props.backColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

function App() {

  return (
    <div className="App">
      <BackgroundWrapper backColor="#343a40">
        <Anim zIndex="100" duration="0.6">
          <Nav />
        </Anim>
        <Anim duration="0.7">
          <Hero />
        </Anim>
      </BackgroundWrapper>
      <Anim duration="0.8">
        <About />
      </Anim>
      <ScrollAnim duration="0.6">
        <Skills />
      </ScrollAnim>
      <ScrollAnim duration="0.6">
        <Projects />
      </ScrollAnim>
      <ScrollAnim duration="0.6">
        <Contact />
      </ScrollAnim>
      <ScrollAnim duration="0.6">
        <Footer />
      </ScrollAnim>
      <ChangeLang />
    </div>
  )
}

export default App
