import styled from "styled-components"

const TitleComponet = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #FF7900;
  @media (max-width: 800px){
    font-size: 22px;
    text-align: center;
  }
  @media (max-width: 600px){
    font-size: 21px;
  }
`

export const Title = ({children}) => {
  return (
    <TitleComponet>{children}</TitleComponet>
  )
}
