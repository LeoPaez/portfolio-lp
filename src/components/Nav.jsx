import React from 'react'
import styled from 'styled-components'
import WhiteLogo from "../assets/lp-logo-white-png.png"
import Linkedin from "../assets/linkedin.png"
import GitHub from "../assets/github.png"
import Wpp from "../assets/wpp.png"

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const NavCont = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
const Logo = styled.img`
  width: 80px;
  margin-right: 80px;
`
const Link = styled.a`

`
const Social = styled.a`
`
const SocialLogo = styled.img`
  width: 30px;
  
`


const Nav = () => {
  return (
    <>
      <NavBar>
        <NavCont>
          <Logo src={WhiteLogo} />
          <Link href='#'>Inicio</Link>
          <Link href='#'>Sobre Mi</Link>
          <Link href='#'>Portfolio</Link>
          <Link href='#'>Contacto</Link>
        </NavCont>
        <NavCont>
          <Social>
            <SocialLogo src={Linkedin} />
          </Social>
          <Social>
            <SocialLogo src={GitHub} />
          </Social>
          <Social>
            <SocialLogo src={Wpp} />
          </Social>
        </NavCont>
      </NavBar>
    </>
  )
}

export default Nav