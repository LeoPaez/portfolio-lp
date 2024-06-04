import styled, { keyframes } from 'styled-components'
import { useTranslation } from "react-i18next"

import HeroDraw from "../assets/draws/hero-draw.svg"

import { Button } from "./Buttons/Button"
import { LinkButton } from "./Buttons/LinkButton"
import { Flex } from "./Nav"

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
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const HeroCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 0 140px;
  @media (max-width: 800px){
    flex-direction: column;
    gap: 60px;
    padding: 80px 0 100px;
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
    z-index: 1;
  }
  @media (max-width: 1100px){
    width: 48%;
  }
  @media (max-width: 900px){
    width: 50%;
  }
  @media (max-width: 800px){
    width: 100%;
    align-items: center;
  }
`
const HeroBackGround = styled.div`
  width: 300px;
  height: 300px;
  filter: blur(calc(250px / 5));
  background: #1F1C2C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #928DAB, #1F1C2C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #928DAB, #1F1C2C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  animation: ${rotate} 30s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  position: absolute;
  @media (max-width: 800px){
    width: 260px;
    height: 260px;
  }
`
const HeroImg = styled.img`
  z-index: 10;
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
  @media (max-width: 1000px){
    width: 320px;
  }
  @media (max-width: 900px){
    width: 300px;
  }
  @media (max-width: 500px){
    width: 260px;
  }
`
const HeroTitleCont = styled.div`
  display: flex;
  gap: 8px;
  overflow: hidden;
`
const HeroTitleSpan = styled.span`
  color: #faf9f8;
  font-size: 34px;
  @media (max-width: 600px){
    font-size: 30px;
  }
`
const HeroTitle = styled.h1`
  color: #dee2e6;
  display:inline-block;
  overflow:hidden;
  white-space:nowrap;
  font-size: 28px;
  :first-of-type {
    animation: ${showup} 10s infinite;
    animation-iteration-count: 1;
  }
  :last-of-type ${HeroTitleSpan} {
    animation: ${slidein} 2s infinite;
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
    font-size: 26px;
  }
`

const HeroInfo = styled.p`
  font-size: 17px;
  margin: 10px 0 20px;
  line-height: 22px;
  letter-spacing: 0.4px;
  width: 100%;
  @media (max-width: 1300px){
    font-size: 16px;
  }
  @media (max-width: 900px){
    font-size: 15px;
    width: 90%;
  }
  @media (max-width: 800px){
    font-size: 16px;
    width: 70%;
    text-align: center;
  }
  @media (max-width: 500px){
    width: 90%;
    font-size: 15px;
  }
`
const HeroButtons = styled.div`
  display: flex;
  gap: 10px;
`

const Hero = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <Flex>
        <HeroCont>
          <HeroItem>
            <HeroTitleCont>
              <HeroTitle>
                {t("header.title")}
              </HeroTitle>
            </HeroTitleCont>
            <HeroTitle>
              <HeroTitleSpan>Leonel Paez,</HeroTitleSpan>
            </HeroTitle>
            <HeroInfo>
              {t("header.info")}
            </HeroInfo>
            <HeroButtons>
              <a href="#contact">
                <Button>{t("header.hireMeButton")}</Button>
              </a>
              <LinkButton to="https://drive.google.com/file/d/1X4smqoNwPleKQGvhFO444Daa0ozyLkow/view?usp=drive_link">
                CV
              </LinkButton>
            </HeroButtons>
          </HeroItem>
          <HeroItem>
            <HeroBackGround />
            <HeroImg src={HeroDraw} alt="hero draw" />
          </HeroItem>
        </HeroCont>
      </Flex>
    </>
  )
}

export default Hero