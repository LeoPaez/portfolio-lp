import React from 'react'
import styled from 'styled-components'
import HTML from "../assets/langs/html-basic.png"
import CSS from "../assets/langs/css-basic.png"
import JS from "../assets/langs/js-basic.png"
// import ReactIcon from "../assets/langs/react-basic.png"
import GitHub from "../assets/social/github.png"
import ArrowRight from "../assets/icons/arrow-right.png"
import HighTech from "../assets/projects/high-tech.png"
import Zappi from "../assets/projects/zappi.png"
import FrontEndStore from "../assets/projects/frontend-store.png"
import BlogDeCafe from "../assets/projects/blogdecafe.png"

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
    font-size: 22px;
  }
`
const ProjectInfo = styled.p`
  width: 80%;
  text-align: center;
  color: #E9ECEF;
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
  justify-content: center;
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
  width: 16px;
`
const GHBtn = styled.button`
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


const Projects = () => {
  return (
    <>
      <Flex>
        <Cont id="projects">
          <ProjectsTitle>Proyectos</ProjectsTitle>
          <ProjectsCont>
            <Project>
              <ProjectImg src={HighTech} />
              <ContentDetails>
                <ProjectName>HighTech</ProjectName>
                <ProjectInfo>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu ullamcorper felis.
                </ProjectInfo>
                <ProjectLangs>
                  <ProjectLang src={HTML} />
                  <ProjectLang src={CSS} />
                  <ProjectLang src={JS} />
                  {/* <ProjectLang src={ReactIcon} /> */}
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
              <ProjectImg src={Zappi} />
              <ContentDetails>
                <ProjectName>Zappi</ProjectName>
                <ProjectInfo>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu ullamcorper felis.
                </ProjectInfo>
                <ProjectLangs>
                  <ProjectLang src={HTML} />
                  <ProjectLang src={CSS} />
                  <ProjectLang src={JS} />
                  {/* <ProjectLang src={ReactIcon} /> */}
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
            <Project>
              <ProjectImg src={FrontEndStore} />
              <ContentDetails>
                <ProjectName>FrontEnd Store</ProjectName>
                <ProjectInfo>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu ullamcorper felis.
                </ProjectInfo>
                <ProjectLangs>
                  <ProjectLang src={HTML} />
                  <ProjectLang src={CSS} />
                  {/* <ProjectLang src={JS} /> */}
                  {/* <ProjectLang src={ReactIcon} /> */}
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
              <ProjectImg src={BlogDeCafe} />
              <ContentDetails>
                <ProjectName>Blog de Café</ProjectName>
                <ProjectInfo>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu ullamcorper felis.
                </ProjectInfo>
                <ProjectLangs>
                  <ProjectLang src={HTML} />
                  <ProjectLang src={CSS} />
                  {/* <ProjectLang src={JS} /> */}
                  {/* <ProjectLang src={ReactIcon} /> */}
                </ProjectLangs>
                <ProjectLinks>
                  <a href="https://github.com/LeoPaez/blogdecafe" target="_blank">
                    <GHBtn>
                      <GHBtnIcon src={GitHub} />
                      GitHub
                    </GHBtn>
                  </a>
                  <a href="https://blogdecafe.vercel.app/" target="_blank">
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
            <MoreProjectsBtn>Ver más</MoreProjectsBtn>
          </a>
        </Cont>
      </Flex>
    </>
  )
}

export default Projects