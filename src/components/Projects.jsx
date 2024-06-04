import styled from 'styled-components'
import { useTranslation } from "react-i18next"

import GitHubLogo from "../assets/social-icons/github.png"
import LinkIcon from "../assets/icons/link-icon.png"

import HighTechPreviewImg from "../assets/projects/high-tech.webp"
import OasisHotelPreviewImg from "../assets/projects/hotel-oasis.webp"
import BeatStorePreviewImg from "../assets/projects/beatstore.webp"
import FurniShopPreviewImg from "../assets/projects/furni-shop.webp"

import { SectionBadge } from "./SectionBadge"
import { LinkButton } from "./Buttons/LinkButton"
import { Title } from "./Title"
import { Flex } from "./Nav"

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 140px;
  gap: 20px;
`
const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(33, 37, 41, 0.2);
  color: #FFF;
  gap: 10px;
  padding: 16px;
  border-radius: 0 0 6px 6px;
  border: 2px solid #495057;
  border-top: none;
  box-sizing: border-box;
`

const ProjectsCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 10px;
  @media (max-width: 800px){
    justify-content: center;
  }
`
const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  @media (max-width: 400px){
    width: 300px;
  }
`
const ProjectImg = styled.img`
  width: 100%;
  max-height: 220px;
  border-radius: 6px 6px 0 0;
  border: 2px solid #495057;
  border-bottom: none;
  box-sizing: border-box;
`
const ProjectName = styled.p`
  font-size: 20px;
`
const ProjectInfo = styled.p`
  color: #E9ECEF;
  font-weight: 200;
  min-height: 57px;
  @media (max-width: 400px){
    font-size: 15px;
    min-height: 68px;
  }
`
const ProjectStack = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4px;
`
const ProjectSkill = styled.p`
  font-size: 14px;
  border-radius: 6px;
  background-color: #495057;
  padding: 2px 6px;
  color: #e9ecef;
`
const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`
const ProjectLink = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #f8f9fa;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 300;
  img {
    width: 18px;
  }
  a {
    text-decoration: underline;
    border-bottom: 1px solid transparent;
  }
  a:hover {
    opacity: 0.8;
  }
`

const Projects = () => {
  const [t] = useTranslation("global")

  const projects = [
    {
      title: "HighTech",
      img: HighTechPreviewImg,
      description: t("projects.project1"),
      stack: ["HTML", "CSS", "Javascript", "React"],
      gitHubLink: "https://github.com/LeoPaez/high-tech-v2",
      demoLink: "https://high-tech-v2.vercel.app/"
    },
    {
      title: "Oasis Hotel",
      img: OasisHotelPreviewImg,
      description: t("projects.project2"),
      stack: ["Javascript", "React", "Tailwind"],
      gitHubLink: "https://github.com/LeoPaez/oasis-hotel",
      demoLink: "https://hotel-oasis-gilt.vercel.app/"
    },
    {
      title: "FurniShop",
      img: FurniShopPreviewImg,
      description: t("projects.project3"),
      stack: ["Javascript", "React", "Tailwind"],
      gitHubLink: "https://github.com/LeoPaez/furni-shop",
      demoLink: "https://furni-shop1.vercel.app/"
    },
    {
      title: "BeatStore",
      img: BeatStorePreviewImg,
      description: t("projects.project4"),
      stack: ["React", "Styled Components"],
      gitHubLink: "https://github.com/LeoPaez/beatstore",
      demoLink: "https://beatstore-seven.vercel.app/"
    },
  ]

  return (
    <>
      <Flex>
        <Cont id="projects">
          <SectionBadge center>{t("projects.sectionBadge")}</SectionBadge>
          <Title>{t("projects.title")}</Title>
          <ProjectsCont>
            {
              projects.map((project, i) => {
                return (
                  <Project key={i}>
                    <ProjectImg src={project.img} alt={project.title} />
                    <ContentDetails>
                      <ProjectName>{project.title}</ProjectName>
                      <ProjectInfo>
                        {project.description}
                      </ProjectInfo>
                      <ProjectStack>
                        {
                          project.stack.map((skill, i) => {
                            return (
                              <ProjectSkill key={i}>{skill}</ProjectSkill>
                            )
                          })
                        }
                      </ProjectStack>
                      <ProjectLinks>
                        <ProjectLink>
                          <img src={GitHubLogo} alt="GitHub logo" />
                          <a href={project.gitHubLink} target="_blank">
                            {t("projects.gitHubLink")}
                          </a>
                        </ProjectLink>
                        <ProjectLink>
                          <img src={LinkIcon} alt="link icon" />
                          <a href={project.demoLink} target="_blank">
                            {t("projects.projectLink")}
                          </a>
                        </ProjectLink>
                      </ProjectLinks>
                    </ContentDetails>
                  </Project>
                )
              })
            }
          </ProjectsCont>
          <LinkButton to="https://github.com/LeoPaez">
            {t("projects.viewMoreButton")}
          </LinkButton>
        </Cont>
      </Flex>
    </>
  )
}

export default Projects