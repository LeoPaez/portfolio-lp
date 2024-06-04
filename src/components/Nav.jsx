import styled from 'styled-components'
import { useTranslation } from "react-i18next"

import WhiteLogo from "../assets/lp-logo-white.png"

import Burger from './MenuBurger/Burger'
import { SocialLinks } from "./SocialLinks"

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  background-color: #343a40;
  width: 100%;
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

const NavLogo = styled.img`
  width: 60px;
`

const LinkNavCont = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 900px){
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

const Nav = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <Flex>
        <NavBar id="nav">
          <NavCont>
            <Burger />
              <a href="/">
                <NavLogo src={WhiteLogo} alt="leonel paez white logo" />
              </a>
          </NavCont>
          <NavCont>
            <LinkNavCont>
              <LinkNav href='#about'>{t("nav.about")}</LinkNav>
              <LinkNav href='#skills'>Skills</LinkNav>
              <LinkNav href='#projects'>Portfolio</LinkNav>
              <LinkNav href='#contact'>{t("nav.contact")}</LinkNav>
            </LinkNavCont>
          </NavCont>
          <NavCont>
            <SocialLinks />
          </NavCont>
        </NavBar>
      </Flex>
    </>
  )
}

export default Nav