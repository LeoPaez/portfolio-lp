import styled from 'styled-components'
import { useTranslation } from "react-i18next"

import AvatarDraw from "../assets/draws/male-draw.svg"

import { SectionBadge } from "./SectionBadge"
import { Title } from "./Title"
import { Flex } from "./Nav"

const AboutCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 140px 0;
`
const AboutItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 800px){
    flex-direction: column;
    gap: 20px;
  }
`

const AboutItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    width: 260px;
    background-color: #343a40;
    border-radius: 50%;
    transition: all 1s ease 0s;
  }
  img:hover {
    background-color: #495057;
  }
  @media (max-width: 900px){
    img {
      width: 230px;
    }
  }
  @media (max-width: 800px){
    align-items: center;
    img {
      width: 200px;
    }
  }
  @media (max-width: 600px){
    align-items: center;
    img {
      width: 180px;
    }
  }
`

const AboutInfo = styled.p`
  font-size: 17px;
  display: flex;
  color: #DEE2E6;
  line-height: 22px;
  letter-spacing: 0.4px;
  margin-bottom: 10px;
  @media (max-width: 1600px){
    font-size: 16px;
  }
  @media (max-width: 1100px){
    font-size: 15px;
  }
  @media (max-width: 800px){
    text-align: center;
  }
`

const ExpCont = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 1100px){
    gap: 20px;
  }
`

const Exp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ExpNum = styled.p`
  color: #FF8500;
  font-size: 18px;
`

const ExpInfo = styled.p`
  text-align: center;
  font-size: 15px;
  color: #ADB5BD;
  @media (max-width: 1100px){
    font-size: 14px;
  }
`

const About = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <Flex>
        <AboutCont id="about">
          <AboutItems>
            <AboutItem>
              <img src={AvatarDraw} alt="avatar draw" />
            </AboutItem>
            <AboutItem>
              <SectionBadge>{t("about.sectionBadge")}</SectionBadge>
              <Title>{t("about.title")}</Title>
              <AboutInfo>{t("about.info")}</AboutInfo>
              <ExpCont>
                <Exp>
                  <ExpNum>+2</ExpNum>
                  <ExpInfo>{t("about.years")}</ExpInfo>
                </Exp>
                <Exp>
                  <ExpNum>+30</ExpNum>
                  <ExpInfo>{t("about.projects")}</ExpInfo>
                </Exp>
              </ExpCont>
            </AboutItem>
          </AboutItems>
        </AboutCont>
      </Flex>
    </>
  )
}

export default About