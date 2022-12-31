import React from 'react'
import styled from 'styled-components'
import HeroDraw from "../assets/draw-header.svg"

const HeroCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 200px;
  gap: 100px;
`
const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 30%;
`
const HeroImg = styled.img`
  width: 400px;
  margin: 0 auto;
`
const HeroTitle = styled.h1`
  color: lightgray;
  margin-bottom: 10px;
`
const HeroTitleSpan = styled.span`
  color: #FFF;
`
const HeroSubTitle = styled.h2`
  margin-bottom: 20px;
`
const HeroInfo = styled.p`
  margin-bottom: 20px;
`
const HeroButtons = styled.div`
  display: flex;
  gap: 10px;
`
const HeroButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 0;
  width: 120px;
`

const Hero = () => {
  return (
    <>
      <HeroCont>
        <HeroItem>
          <HeroTitle>
            Hola, soy
            <HeroTitleSpan> Leonel Paez</HeroTitleSpan>
          </HeroTitle>
          <HeroSubTitle>Web Developer</HeroSubTitle>
          <HeroInfo>
            Soy un desarrollador Front-End situado en Argentina en busca de brindar soluciones con los mejores diseños y performances. Soy una persona organizada que presta atención hasta los más mínimos detalles. Nunca paro de aprender y aplicarlo a mis proyectos.
          </HeroInfo>
          <HeroButtons>
            <HeroButton>Contrátame</HeroButton>
            <HeroButton>Mi CV</HeroButton>
          </HeroButtons>
        </HeroItem>
        <HeroItem>
          <HeroImg src={HeroDraw} />
        </HeroItem>
      </HeroCont>
    </>
  )
}

export default Hero