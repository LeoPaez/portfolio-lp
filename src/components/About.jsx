import React from 'react'
import styled from 'styled-components'
import HTML from "../assets/langs/html.svg"
import CSS from "../assets/langs/css.svg"
import JS from "../assets/langs/javascript.svg"
import ReactIcon from "../assets/langs/react.png"
import Chakra from "../assets/langs/chakra-ui.png"
import Styled from "../assets/langs/styled.png"
import ReactRouter from "../assets/langs/react-router.png"
import Vite from "../assets/langs/vite.png"

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212529;
`
const AboutCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  height: 400px;
  padding: 20px 0;
  margin-bottom: 60px;
  width: 50%;
  @media (max-width: 1500px){
    width: 60%;
  }
  @media (max-width: 1300px){
    width: 70%;
  }
  @media (max-width: 1000px){
    width: 80%;
  }
  @media (max-width: 900px){
    height: fit-content;
    padding: 30px 0 0 0;
  }

`
const AboutItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  @media (max-width: 1600px){
    gap: 40px;
  }
  @media (max-width: 900px){
    flex-direction: column;
    gap: 30px;
  }
`
const AboutItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 430px;
  margin-top: 20px;
  :last-of-type {
    border: 2px solid #495057;
    padding: 20px 0 30px 0;
    border-radius: 10px;
    background-color: #343a40;
    /* margin-top: 10px; */
  }
  @media (max-width: 1100px){
    :last-of-type {
      padding: 40px 0 50px 0;
    }
  }
  @media (max-width: 900px){
    width: 100%;
    :first-of-type {
      align-items: flex-start;
    }
  }
`
const AboutTitle = styled.h3`
  font-size: 26px;
  border-bottom: 1px solid #343a40;
  padding: 0 50px 8px 50px;
  margin: -20px auto 40px;
  @media (max-width: 900px){
    margin: 0 auto;
  }
`
const AboutInfo = styled.p`
  font-size: 17px;
  display: flex;
  /* margin: 20px 0; */
  margin-bottom: 20px;
  color: #DEE2E6;
  line-height: 22px;
  letter-spacing: 0.4px;
  @media (max-width: 1600px){
    font-size: 16px;
  }
  @media (max-width: 1100px){
    font-size: 15px;
  }
  @media (max-width: 600px){
    width: 90%;
  }
`
const ExpCont = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 1100px){
    gap: 20px;
  }
  @media (max-width: 900px){
    margin: 0 auto;
  }
`
const Exp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ExpNum = styled.p`
  color: #FFB300;
  font-size: 20px;
  @media (max-width: 1600px){
    font-size: 19px;
  }
  @media (max-width: 1100px){
    font-size: 18px;
  }
`
const ExpInfo = styled.p`
  text-align: center;
  color: #ADB5BD;
  @media (max-width: 1600px){
    font-size: 15px;
  }
  @media (max-width: 1100px){
    font-size: 14px;
  }
`
const SkillsTitle = styled.h4`
  font-size: 22px;
  margin-bottom: 30px;
  color: #ced4da;
  border-bottom: 1px solid #495057;
  padding: 0 20px 4px 20px;
`
const SkillsCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 260px;
  gap: 20px;
  span:nth-child(7) img {
    border-radius: 50%;
  }
  @media (max-width: 1100px){
    width: 220px;
  }
  @media (max-width: 900px){
    width: 100%;
    gap: 24px;
  }
  @media (max-width: 700px){
    gap: 16px;
  }
  @media (max-width: 600px){
    width: 230px;
    gap: 20px;
  }
`
const SkillsLogo = styled.img`
  min-width: 50px;
  max-width: 50px;
  max-height: 50px;
  @media (max-width: 1100px){
    min-width: 40px;
    max-width: 40px;
    max-height: 40px;
  }
  @media (max-width: 900px){
    min-width: 44px;
    max-width: 44px;
    max-height: 44px;
  }
  @media (max-width: 700px){
    min-width: 38px;
    max-width: 38px;
    max-height: 38px;
  }
  @media (max-width: 600px){
    min-width: 42px;
    max-width: 42px;
    max-height: 42px;
  }
`
const Tool = styled.span`
  cursor: help;
  position: relative;
  ::before,
  ::after {
    left: 50%;
    opacity: 0;
    position: absolute;
  }
  :hover::before,
  :focus::before,
  :hover::after,
  :focus::after {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  ::before {
    border-style: solid;
    border-width: 1em 0.75em 0 0.75em;
    border-color: #3E474F transparent transparent transparent;
    bottom: 100%;
    content: "";
    margin-left: -0.7em;
    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26), opacity .65s .5s;
    transform:  scale(.6) translateY(-90%);
  }
  :hover::before,
  :focus::before {
      transition: all .65s cubic-bezier(.84,-0.18,.31,1.26) .2s;
  }
  ::after {
    background: #495057;
    border-radius: .25em;
    bottom: 130%;
    color: #EDEFF0;
    content: attr(data-tip);
    margin-left: -36px;
    padding: 1em;
    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26) .2s;
    transform:  scale(.6) translateY(40%);  
    width: auto;
    text-align: center;
    font-size: 14px;
  }
  :hover::after,
  :focus::after  {
    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26);
  }
`

const About = () => {
  return (
    <>
      <Flex>
        <AboutCont id="about">
          <AboutTitle>Sobre Mi</AboutTitle>
          <AboutItems>
            <AboutItem>
              <AboutInfo>
                Mi visión es poder crear sitios web con un buen criterio, que sean adaptables, dinámicos, accesibles y con un toque propio de diseño para darle mi marca personal y sin dejar de lado la eficiencia para una buena experiencia del usuario. Me gusta estar al tanto de las nuevas tecnologías que el mercado requiera y experimentar por mi cuenta nuevos desafíos.</AboutInfo>
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
                <Tool data-tip="HTML">
                  <SkillsLogo src={HTML} />
                </Tool>
                <Tool data-tip="CSS">
                  <SkillsLogo src={CSS} />
                </Tool>
                <Tool data-tip="JavaScript">
                  <SkillsLogo src={JS} />
                </Tool>
                <Tool data-tip="React">
                  <SkillsLogo src={ReactIcon} />
                </Tool>
                <Tool data-tip="React Router">
                  <SkillsLogo src={ReactRouter} />
                </Tool>
                <Tool data-tip="Vite">
                  <SkillsLogo src={Vite} />
                </Tool>
                <Tool data-tip="ChakraUI">
                  <SkillsLogo src={Chakra} />
                </Tool>
                <Tool data-tip="Styled Components">
                  <SkillsLogo src={Styled} />
                </Tool>
              </SkillsCont>
            </AboutItem>
          </AboutItems>
        </AboutCont>
      </Flex>
    </>
  )
}

export default About