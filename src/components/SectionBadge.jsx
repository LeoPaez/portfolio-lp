import styled from "styled-components"

export const SectionBadgeComponent = styled.p`
  padding: 4px 10px;
  background: rgba(73, 80, 87, 0.3);
  color: #dee2e6;
  align-self: ${props => props.center ? "center" : "flex-start"};
  border-radius: 6px;
  font-size: 15px;
  @media (max-width: 800px){
    align-self: center;
  }
  @media (max-width: 600px){
    font-size: 14px;
  }
`

export const SectionBadge = ({ children, center }) => {
  return (
    <SectionBadgeComponent center={center}>{children}</SectionBadgeComponent>
  )
}
