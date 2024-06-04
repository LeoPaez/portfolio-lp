import styled from "styled-components"
import { useTranslation } from "react-i18next"

import HTMLLogo from "../assets/langs/html.svg"
import CSSLogo from "../assets/langs/css.svg"
import JSLogo from "../assets/langs/javascript.svg"
import TSLogo from "../assets/langs/typescript.svg"
import ReactLogo from "../assets/langs/react.png"
import NextLogo from "../assets/langs/next-js.png"
import StyledLogo from "../assets/langs/styled.png"
import TailwindLogo from "../assets/langs/tailwind.png"
import MaterialUILogo from "../assets/langs/material-ui.png"
import FigmaLogo from "../assets/langs/figma.png"

import { SectionBadge } from "./SectionBadge"
import { Title } from "./Title"
import { Flex } from "./Nav"

const SkillsCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 140px;
`

const SkillsItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 460px;
  margin-top: 10px;
`

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  gap: 6px;
  img {
    min-width: 36px;
  max-width: 36px;
  max-height: 36px;
  }
  p {
    font-size: 14px;
    opacity: 0.8;
  }
`

const skills = [
  {
    title: "HTML",
    img: HTMLLogo
  },
  {
    title: "CSS",
    img: CSSLogo
  },
  {
    title: "Javascript",
    img: JSLogo
  },
  {
    title: "Typescript",
    img: TSLogo
  },
  {
    title: "React",
    img: ReactLogo
  },
  {
    title: "Next.js",
    img: NextLogo
  },
  {
    title: "Tailwind",
    img: TailwindLogo
  },
  {
    title: "Styled",
    img: StyledLogo
  },
  {
    title: "MaterialUI",
    img: MaterialUILogo
  },
  {
    title: "Figma",
    img: FigmaLogo
  },
]

const Skills = () => {
  const [t] = useTranslation("global")

  return (
    <Flex>
      <SkillsCont id="skills">
        <SectionBadge center>Skills</SectionBadge>
        <Title>{t("skills.title")}</Title>
        <SkillsItems>
          {
            skills.map((skill, i) => {
              return (
                <SkillItem key={i}>
                  <img src={skill.img} alt={`${skill.title} logo`} />
                  <p>{skill.title}</p>
                </SkillItem>
              )
            })
          }
        </SkillsItems>
      </SkillsCont>
    </Flex>
  )
}

export default Skills