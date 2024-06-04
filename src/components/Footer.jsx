import styled from 'styled-components'
import { useTranslation } from "react-i18next"

import WhiteLogo from "../assets/lp-logo-white.png"

import { SocialLinks } from "./SocialLinks"

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  background-color: #212529;
  gap: 20px;
  border-top: 2px solid #343a40;
`
const FooterCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  :last-child {
    gap: 20px;
  }
`
const FooterLogo = styled.img`
  width: 40px;
  @media (max-width: 400px){
    width: 32px;
  }
`
const FooterRights = styled.p`
  @media (max-width: 400px){
    font-size: 14px;
  }
`
const Border = styled.div`
  border-left: 1px solid #495057;
  height: 26px;
`

const Footer = () => {
  const [t] = useTranslation("global")
  const year = new Date().getFullYear()

  return (
    <>
      <Cont>
        <FooterCont>
          <a href="/">
            <FooterLogo src={WhiteLogo} alt="leonel paez white logo" />
          </a>
          <Border />
          <FooterRights>&copy; {year} {t("footer.rights")}</FooterRights>
        </FooterCont>
        <FooterCont>
          <SocialLinks />
        </FooterCont>
      </Cont>
    </>
  )
}

export default Footer