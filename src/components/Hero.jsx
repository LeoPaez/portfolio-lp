import React from 'react'
import styled, { keyframes } from 'styled-components'
import HeroDraw from "../assets/draw-header.svg"

const showup = keyframes`
  0% {opacity:0;}
  20% {opacity:1;}
  80% {opacity:1;}
  100% {opacity:1;}
`
const slidein = keyframes`
  0% { margin-left:-800px; opacity: 0; }
  20% { margin-left:-800px; }
  90% { margin-left:-0px; }
  100% { margin-left:-0px; }
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeroCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 0 140px;
  /* gap: 100px; */
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
  @media (max-width: 800px){
    flex-direction: column;
    gap: 60px;
    padding: 80px 0 100px;
  }
  @media (max-width: 600px){
    width: 85%;
  }
`
const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 45%;
  :last-of-type {
    align-items: center;
  }
  @media (max-width: 1100px){
    width: 48%;
  }
  @media (max-width: 900px){
    width: 50%;
  }
  @media (max-width: 800px){
    width: 100%;
  }
`
const HeroImg = styled.img`
  width: 400px;
  @media (max-width: 1300px){
    width: 380px;
  }
  @media (max-width: 1200px){
    width: 360px;
  }
  @media (max-width: 1100px){
    width: 340px;
  }
  @media (max-width: 900px){
    width: 320px;
  }
  @media (max-width: 800px){
    width: 380px;
  }
  @media (max-width: 500px){
    width: 340px;
  }
  @media (max-width: 400px){
    width: 320px;
  }
`
const HeroTitleCont = styled.div`
  display: flex;
  gap: 8px;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0,0,0);
`
const HeroTitleSpan = styled.span`
  color: #f8f9fa;
`
const HeroTitle = styled.h1`
  color: #dee2e6;
  margin-bottom: 10px;
  display:inline-block;
  overflow:hidden;
  white-space:nowrap;
  :first-of-type {
    animation: ${showup} 10s infinite;
    animation-iteration-count: 1;
  }
  :last-of-type ${HeroTitleSpan} {
    /* margin-left: -200px; */
    animation: ${slidein} 2.4s infinite;
    animation-iteration-count: 1;
  }
  @media (max-width: 1300px){
    font-size: 28px;
  }
  @media (max-width: 900px){
    font-size: 26px;
  }
  @media (max-width: 800px){
    font-size: 30px;
  }
  @media (max-width: 600px){
    font-size: 28px;
  }
  @media (max-width: 400px){
    font-size: 26px;
  }
`

const HeroSubTitle = styled.h2`
  margin-bottom: 20px;
  color: #ced4da;
  @media (max-width: 1300px){
    font-size: 21px;
  }
  @media (max-width: 900px){
    font-size: 20px;
  }
  @media (max-width: 800px){
    font-size: 21px;
  }
`
const HeroInfo = styled.p`
  font-size: 17px;
  margin-bottom: 20px;
  line-height: 22px;
  letter-spacing: 0.4px;
  width: 90%;
  @media (max-width: 1300px){
    font-size: 16px;
  }
`
const HeroButtons = styled.div`
  display: flex;
  gap: 10px;
`
const HeroButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  width: 140px;
  background-color: #FF9900;
  color: #e9ecef;
  font-weight: 600;
  transition: all 0.3s ease 0s;
  font-size: 15px;
  letter-spacing: 0.5px;
  cursor: pointer;
  a {
    :last-of-type button {
      background-color: pink;
    }
  }
  :hover {
    background-color: #FFA600;
  }
  @media (max-width: 500px){
    width: 120px;
  }
`
const HeroButtonCV = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px 0;
  width: 140px;
  background-color: transparent;
  color: #e9ecef;
  font-weight: 600;
  transition: all 0.3s ease 0s;
  font-size: 15px;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: 2px solid #FF9900;
  :hover {
    background-color: #FFA600;
    border: 2px solid #FFA600;
  }
  @media (max-width: 500px){
    width: 120px;
  }
  @media (max-width: px){}
`

const Hero = () => {
  return (
    <>
      <Flex>
        <HeroCont>
          <HeroItem>
            <HeroTitleCont>
              <HeroTitle>
                Hola, soy
              </HeroTitle>
              <HeroTitle>
                <HeroTitleSpan> Leonel Paez</HeroTitleSpan>
              </HeroTitle>
            </HeroTitleCont>
            <HeroSubTitle>Front End Developer</HeroSubTitle>
            <HeroInfo>
              Soy un desarrollador Front End situado en Buenos Aires, Argentina. Me describo a mi mismo como una persona creativa y apasionada que no para de aprender. Disfruto de crear proyectos innovadores y eficientes día a día con un toque original de diseño.
            </HeroInfo>
            <HeroButtons>
              <a href="#contact">
                <HeroButton>Contrátame</HeroButton>
              </a>
              <a href="https://drive.google.com/file/d/1kPyJGFlNaq3_wnxgKyHrE4xSAZ40KFlv/view?usp=sharing" target="_blank">
                <HeroButtonCV>Mi CV</HeroButtonCV>
              </a>
            </HeroButtons>
          </HeroItem>
          <HeroItem>
            <HeroImg src={HeroDraw} />
          </HeroItem>
        </HeroCont>
      </Flex>
    </>
  )
}

export default Hero