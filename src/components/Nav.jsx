import React from 'react'
import styled from 'styled-components'
import WhiteLogo from "../assets/lp-logo-white-png.png"
import Linkedin from "../assets/social/linkedin.png"
import GitHub from "../assets/social/github.png"
import Wpp from "../assets/social/wpp.png"
import Burger from './MenuBurger/Burger'
// import ToggleLang from "./Inputs/ToggleLang"
// import { useTranslation } from "react-i18next"

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  width: 50%;
  background-color: #343a40;
  @media (max-width: 1500px){
    width: 60%;
  }
  @media (max-width: 1300px){
    width: 70%;
  }
  @media (max-width: 1000px){
    width: 80%;
  }
  @media (max-width: 600px){
    width: 85%;
  }
  @media (max-width: 800px){
    display: block;
  }
`
const NavCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 900px){
    gap: 16px
  }
  @media (max-width: 800px){
    :first-child {
      justify-content: space-between;
    }
  }
`
const Logo = styled.img`
  width: 60px;
`
const Link = styled.a`
  cursor: pointer;
`
const LinkNavCont = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 120px;
  @media (max-width: 1100px){
    margin-left: 80px;
  }
  @media (max-width: 900px){
    margin-left: 60px;
    gap: 26px;
  }
  @media (max-width: 800px){
    display: none;
  }
`
const LinkNav = styled.a`
  font-size: 16px;
  transition: all 0.3s ease 0s;
  :hover {
    color: #CED4DA;
  }
  @media (max-width: 1100px){
    font-size: 15px;
  }
`
const Social = styled.a`
  cursor: pointer;
  @media (max-width: 800px){
    display: none;
  }
`
const SocialLogo = styled.img`
  width: 28px;
  transition: all 0.3s ease 0s;
  :hover {
    opacity: 0.8;
  }
  @media (max-width: 1100px){
    width: 26px;
  }
`


const Nav = () => {
  // const [t, i18n] = useTranslation("global")
  // const handleChange = (e) => {
  //   if(e.target.checked) {
  //     i18n.changeLanguage("en")
  //   } else {
  //     i18n.changeLanguage("es")
  //   }
  // }

  return (
    <>
      <Flex>
        <NavBar id="nav">
          <NavCont>
            <Burger />
            <Link href=".">
              <Logo src={WhiteLogo} />
            </Link>
            <LinkNavCont>
              <LinkNav href='#nav'>Inicio</LinkNav>
              <LinkNav href='#about'>Sobre Mi</LinkNav>
              <LinkNav href='#projects'>Portfolio</LinkNav>
              <LinkNav href='#contact'>Contacto</LinkNav>
            </LinkNavCont>
          </NavCont>
          <NavCont>
            <Social href="https://www.linkedin.com/in/leonel-paez/" target="_blank">
              <SocialLogo src={Linkedin} />
            </Social>
            <Social href="https://github.com/LeoPaez" target="_blank">
              <SocialLogo src={GitHub} />
            </Social>
            <Social href="https://walink.co/9e973f" target="_blank">
              <SocialLogo src={Wpp} />
            </Social>
          </NavCont>
        </NavBar>
      </Flex>
    </>
  )
}

export default Nav