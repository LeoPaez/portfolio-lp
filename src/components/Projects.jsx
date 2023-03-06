import React from 'react'
import styled from 'styled-components'
// langs icons
import HTML from "../assets/langs/html-basic.png"
import CSS from "../assets/langs/css-basic.png"
import JS from "../assets/langs/js-basic.png"
import ReactIcon from "../assets/langs/react-basic.png"
import Tailwind from "../assets/langs/tailwind-basic.png"
import Material from "../assets/langs/material-ui-basic.png"
// icons
import GitHub from "../assets/social/github.png"
import ArrowRight from "../assets/icons/arrow-right.png"
// projects
import Oasis from "../assets/projects/hotel-oasis.png"
import HighTech from "../assets/projects/high-tech.png"
import FurniShop from "../assets/projects/furni-shop.png"
import CrudApp from "../assets/projects/crud-app.png"
import { useTranslation } from "react-i18next"

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 110px;
  width: 50%;
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
`
const ContentDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.25s;
  border-radius: 6px;
  gap: 20px;
  :hover {
    opacity: 1;
  }
  @media (max-width: 1100px){
    gap: 14px;
  }
  @media (max-width: 900px){
    gap: 20px;
  }
  @media (max-width: 500px){
    gap: 16px;
  }
`
const ProjectsTitle = styled.h2`
  font-size: 26px;
  border-bottom: 1px solid #495057;
  margin: 70px 0 50px;
  padding: 0 50px 8px 50px;
`
const ProjectsCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 10px;
  @media (max-width: 800px){
    justify-content: center;
  }
`
const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 6px;
  width: 48%;
  @media (max-width: 900px){
    width: 100%;
  }
`
const ProjectImg = styled.img`
  width: 100%;
  border-radius: 6px;
`
const ProjectName = styled.p`
  font-size: 20px;
  @media (max-width: 500px){
    font-size: 18px;
  }
`
const ProjectInfo = styled.p`
  width: 80%;
  text-align: center;
  color: #E9ECEF;
  @media (min-width: 1000px) and (max-width: 1050px){
    width: 90%;
  }
  @media (max-width: 500px){
    font-size: 15px;
  }
  @media (max-width: 400px){
    display: none;
  }
`
const ProjectLangs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`
const ProjectLang = styled.img`
  min-width: 28px;
  max-width: 28px;
  max-height: 28px;
  opacity: 0.8;
  @media (max-width: 500px){
    min-width: 26px;
    max-width: 26px;
    max-height: 26px;
  }
`
const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  button {
    cursor: pointer;
  }
`
const DemoBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #e9ecef;
  padding: 10px 16px;
  border-radius: 6px;
  background-color: transparent;
  border: 2px solid #FF9900;
  font-size: 15px;
  transition: all 0.3s ease 0s;
  :hover {
    background-color: #FFA600;
    border: 2px solid #FFA600;
  }
`
const DemoBtnIcon = styled.img`
  width: 14px;
`
const GHBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #e9ecef;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  padding: 10px 10px;
  font-size: 15px;
  transition: all 0.3s ease 0s;
  :hover {
    background-color: rgba(33, 37, 41, 0.4);
  }
`
const GHBtnIcon = styled.img`
  width: 18px;
`
const MoreProjectsBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
  padding: 10px 60px;
  font-size: 15px;
  letter-spacing: 0.8px;
  background-color: transparent;
  border: 2px solid #FF9900;
  color: #e9ecef;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.3s ease 0s;
  border-radius: 4px;
  :hover {
    background-color: #FFA600;
    border: 2px solid #FFA600;
  }
`
const MoreProjectsBtnIcon = styled.img`
  width: 16px;
`

const Projects = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <Flex>
        <Cont id="projects">
          <ProjectsTitle>{t("projects.title")}</ProjectsTitle>
          <ProjectsCont>
          <Project>
              <ProjectImg src={Oasis} />
              <ContentDetails>
                <ProjectName>Hotel Oasis</ProjectName>
                <ProjectInfo>
                  {t("projects.project1")}
                </ProjectInfo>
                <ProjectLangs>
                  <ProjectLang src={JS} />
                  <ProjectLang src={ReactIcon} />
                  <ProjectLang src={Tailwind} />
                </ProjectLangs>
                <ProjectLinks>
                  <a href="https://github.com/LeoPaez/frontendpage" target="_blank">
                    <GHBtn>
                      <GHBtnIcon src={GitHub} />
                      GitHub
                    </GHBtn>
                  </a>
                  <a href="https://front-end-store1.vercel.app/" target="_blank">
                    <DemoBtn>
                      Demo
                      <DemoBtnIcon src={ArrowRight} />
                    </DemoBtn>
                  </a>
                </ProjectLinks>
              </ContentDetails>
            </Project>
            <Project>
              <ProjectImg src={HighTech} />
              <ContentDetails>
                <ProjectName>HighTech</ProjectName>
                <ProjectInfo>
                  {t("projects.project2")}
                </ProjectInfo>
                <ProjectLangs>
                  <ProjectLang src={HTML} />
                  <ProjectLang src={CSS} />
                  <ProjectLang src={JS} />
                </ProjectLangs>
                <ProjectLinks>
                  <a href="https://github.com/LeoPaez/high-tech" target="_blank">
                    <GHBtn>
                      <GHBtnIcon src={GitHub} />
                      GitHub
                    </GHBtn>
                  </a>
                  <a href="https://high-tech.vercel.app/" target="_blank">
                    <DemoBtn>
                      Demo
                      <DemoBtnIcon src={ArrowRight} />
                    </DemoBtn>
                  </a>
                </ProjectLinks>
              </ContentDetails>
            </Project>
            <Project>
              <ProjectImg src={CrudApp} />
              <ContentDetails>
                <ProjectName>Crud App</ProjectName>
                <ProjectInfo>
                  {t("projects.project3")}
                </ProjectInfo>
                <ProjectLangs>
                  <ProjectLang src={JS} />
                  <ProjectLang src={ReactIcon} />
                  <ProjectLang src={Material} />
                </ProjectLangs>
                <ProjectLinks>
                  <a href="https://github.com/LeoPaez/crud-app-react" target="_blank">
                    <GHBtn>
                      <GHBtnIcon src={GitHub} />
                      GitHub
                    </GHBtn>
                  </a>
                  <a href="https://crud-app-react1.vercel.app/" target="_blank">
                    <DemoBtn>
                      Demo
                      <DemoBtnIcon src={ArrowRight} />
                    </DemoBtn>
                  </a>
                </ProjectLinks>
              </ContentDetails>
            </Project>
            <Project>
              <ProjectImg src={FurniShop} />
              <ContentDetails>
                <ProjectName>FurniShop</ProjectName>
                <ProjectInfo>
                  {t("projects.project4")}
                </ProjectInfo>
                <ProjectLangs>
                  <ProjectLang src={JS} />
                  <ProjectLang src={ReactIcon} />
                  <ProjectLang src={Tailwind} />
                </ProjectLangs>
                <ProjectLinks>
                  <a href="https://github.com/LeoPaez/E5-Javascript" target="_blank">
                      <GHBtn>
                        <GHBtnIcon src={GitHub} />
                        GitHub
                      </GHBtn>
                  </a>
                  <a href="https://e5-javascript-1.vercel.app/" target="_blank">
                      <DemoBtn>
                        Demo
                        <DemoBtnIcon src={ArrowRight} />
                      </DemoBtn>
                  </a>
                </ProjectLinks>
              </ContentDetails>
            </Project>
          </ProjectsCont>
          <a href="https://github.com/LeoPaez" target="_blank">
            <MoreProjectsBtn>
              {t("projects.viewMoreButton")}
              <MoreProjectsBtnIcon src={ArrowRight} />
            </MoreProjectsBtn>
          </a>
        </Cont>
      </Flex>
    </>
  )
}

export default Projects