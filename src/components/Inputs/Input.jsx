import React from 'react'
import styled, { css } from 'styled-components'

const ContactInputCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  :last-of-type p {
    position: relative;
    top: 0;
    margin-left: 6px;
  }
`
const ContactInput = styled.input`
  width: 240px;
  border: none;
  padding: 10px 40px 10px 10px;
  border-radius: 6px;
  background-color: #495057;
  color: #ced4da;
  border: 2px solid #343a40;
  @media (max-width: 900px){
    padding-right: 120px;
  }
  @media (max-width: 500px){
    padding-right: 60px;
  }
  @media (max-width: 400px){
    padding-right: 20px;
  }
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #ced4da;
  }
  ${props => props.valido === 'true' && css`
    border: 2px solid #4BB543;
	`}
	${props => props.valido === 'false' && css`
    border: 2px solid #cc0000;
	`}
`
const Error = styled.p`
  position: absolute;
  top: 40px;
  font-size: 14px;
  left: 6px;
  color: #ff0033;
    visibility: hidden;

  ${props => props.valido === 'true' && css`
    visibility: hidden;
	`}
	${props => props.valido === 'false' && css`
		visibility: visible;
	`}
`

const Input = ({estado, cambiarEstado, tipo, placeholder, name, leyendaError, expresionRegular}) => {
  const onChange = (e) => {
    cambiarEstado({...estado, campo: e.target.value})
  }
  const validacion = () => {
    if(expresionRegular) {
      if(expresionRegular.test(estado.campo)) {
        cambiarEstado({...estado, valido: "true"})
      } else {
        cambiarEstado({...estado, valido: "false"})
      }
    }
  }

  return (
    <>
      <ContactInputCont>
        <ContactInput
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
        <Error valido={estado.valido}>{leyendaError}</Error>
      </ContactInputCont>
    </>
  )
}

export default Input