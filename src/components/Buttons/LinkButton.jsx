import styled from "styled-components"
import ArrowRightIcon from "../../assets/icons/arrow-right.png"

const LinkButtonComponent = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 40px;
  font-size: 15px;
  letter-spacing: 0.3px;
  background-color: rgba(255, 109, 0, 0.2);
  border: 2px solid #FF6D00;
  color: #f8f9fa;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border-radius: 10px;
  :hover {
    background-color: #FF7900;
    border-color: #FF7900;
  }
`

const LinkButtonIcon = styled.img`
  width: 14px;
`


export const LinkButton = ({ children, to }) => {
  return (
    <LinkButtonComponent href={to} target="_blank">
      {children}
      <LinkButtonIcon src={ArrowRightIcon} />
    </LinkButtonComponent>
  )
}
