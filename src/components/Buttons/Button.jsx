import styled from "styled-components"

const ButtonComponent = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  width: 140px;
  color: #FFF;
  background-color: #FF6D00;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.3px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  :hover {
    background-color: #FF7900;
  }
`

export const Button = ({ children, to }) => {
  return (
    <ButtonComponent href={to}>{children}</ButtonComponent>
  )
}
