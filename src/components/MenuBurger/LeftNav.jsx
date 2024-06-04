import styled from 'styled-components';
import { useTranslation } from "react-i18next"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  display: none;
  li {
    padding: 18px 20px;
    border-bottom: 1px solid #6c757d;
    width: auto;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    :first-of-type {
      margin-top: 10px;
    }
    :hover {
      border-color: #FC7903;
    }
  }
  a {
    transition: all 0.3s ease 0s;
    :hover {
      opacity: 0.8;
    }
  }
  @media (max-width: 800px) {
    display: block;
    flex-flow: column nowrap;
    background-color: #495057;
    position: absolute;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-170%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 260px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const LeftNav = ({ open}) => {
  const [t] = useTranslation("global")

  return (
    <Ul open={open}>
      <li>
        <a href="#about">{t("nav.about")}</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Portfolio</a>
      </li>
      <li>
        <a href="#contact">{t("nav.contact")}</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/leonel-paez/" target="_blank">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/LeoPaez" target="_blank">GitHub</a>
      </li>
      <li>
        <a href="https://walink.co/9e973f" target="_blank">WhatsApp</a>
      </li>
    </Ul>
  )
}

export default LeftNav