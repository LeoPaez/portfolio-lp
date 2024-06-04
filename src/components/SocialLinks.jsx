import styled from "styled-components"

import LinkedinLogo from "../assets/social-icons/linkedin.png"
import GitHubLogo from "../assets/social-icons/github.png"
import WppLogo from "../assets/social-icons/wpp.png"

const SocialLink = styled.a`
  cursor: pointer;
`
const SocialLogo = styled.img`
  width: 26px;
  transition: all 0.3s ease 0s;
  :hover {
    opacity: 0.8;
  }
`

export const SocialLinks = () => {
  return (
    <>
      <SocialLink href="https://www.linkedin.com/in/leonel-paez/" target="_blank">
        <SocialLogo src={LinkedinLogo} alt="linkedin logo" />
      </SocialLink>
      <SocialLink href="https://github.com/LeoPaez" target="_blank">
        <SocialLogo src={GitHubLogo} alt="github logo" />
      </SocialLink>
      <SocialLink href="https://walink.co/9e973f" target="_blank">
        <SocialLogo src={WppLogo} alt="whatsapp logo" />
      </SocialLink>
    </>
  )
}
