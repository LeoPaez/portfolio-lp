import React from 'react'
import styled from 'styled-components'
import HTML from "../assets/html.svg"
import CSS from "../assets/css.svg"
import JS from "../assets/javascript.svg"
import ReactIcon from "../assets/react.png"
import Chakra from "../assets/chakra-ui.png"
import Styled from "../assets/styled.png"

const AboutCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  padding: 20px 0;
  background-color: #212529;
`
const AboutItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const AboutItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
`
const AboutTitle = styled.h3`
  font-size: 26px;
  margin-bottom: 30px;
`
const AboutInfo = styled.p`
  margin-top: 20px;
`
const ExpCont = styled.div`
  display: flex;
  gap: 20px;
`
const Exp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ExpNum = styled.p`

`
const ExpInfo = styled.p`
`

const SkillsTitle = styled.h4`
  font-size: 22px;
  margin-bottom: 20px;
`
const SkillsCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 200px;
  gap: 20px;
`
const SkillsLogo = styled.img`
  height: 50px;
  :nth-of-type(5){
    border-radius: 50%;
  }
`

const About = () => {
  return (
    <>
      <AboutCont>
        <AboutTitle>Sobre Mi</AboutTitle>
        <AboutItems>
          <AboutItem>
            <AboutInfo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non purus vulputate, laoreet leo imperdiet, vehicula odio. In quis quam sodales, pellentesque ligula vel, ultricies turpis. Sed eu elit efficitur, dictum odio eu, commodo libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec aliquam mauris mi, vel luctus elit molestie et.
            </AboutInfo>
            <ExpCont>
              <Exp>
                <ExpNum>+1</ExpNum>
                <ExpInfo>Años de experiencia</ExpInfo>
              </Exp>
              <Exp>
                <ExpNum>+30</ExpNum>
                <ExpInfo>Proyectos completados</ExpInfo>
              </Exp>
            </ExpCont>
          </AboutItem>
          <AboutItem>
            <SkillsTitle>Skills</SkillsTitle>
              <SkillsCont>
              <SkillsLogo src={HTML} />
              <SkillsLogo src={CSS} />
              <SkillsLogo src={JS} />
              <SkillsLogo src={ReactIcon} />
              <SkillsLogo src={Chakra} />
              <SkillsLogo src={Styled} />
            </SkillsCont>
          </AboutItem>
        </AboutItems>
      </AboutCont>
    </>
  )
}

export default About