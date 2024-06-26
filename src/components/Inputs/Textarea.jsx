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
const ContactMsg = styled.textarea`
  width: 240px;
  border: none;
  padding: 10px 40px 60px 10px;
  border-radius: 6px;
  background-color: #495057;
  color: #ced4da;
  border: 2px solid #343a40;
  transition: all 0.3s ease 0s;
  :focus {
    outline: none;
    border: 2px solid #ff9900;
  }
  ::placeholder {
    color: #ced4da;
  }
  ${props => props.valid === 'true' && css`
    border: 2px solid #4BB543;
	`}
	${props => props.valid === 'false' && css`
    border: 2px solid #cc0000;
	`}

  @media (max-width: 450px){
    width: 220px
  }
`
const MsgError = styled.div`
  height: 16px;
`
const Error = styled.p`
  position: absolute;
  top: 40px;
  font-size: 14px;
  left: 6px;
  color: #ff0033;
    visibility: hidden;

  ${props => props.valid === 'true' && css`
    visibility: hidden;
	`}
	${props => props.valid === 'false' && css`
		visibility: visible;
	`}
`

const Textarea = ({state, changeState, type, placeholder, name, errorText, regex }) => {
  const onChange = (e) => {
    changeState({...state, field: e.target.value})
  }
  const validation = () => {
    if(regex) {
      if(regex.test(state.field)) {
        changeState({...state, valid: "true"})
      } else {
        changeState({...state, valid: "false"})
      }
    }
  }

  return (
    <>
      <ContactInputCont>
        <ContactMsg
          name={name}
          type={type}
          placeholder={placeholder}
          id={name}
          value={state.field}
          onChange={onChange}
          onKeyUp={validation}
          onBlur={validation}
          valid={state.valid}
        />
        <MsgError>
          <Error valid={state.valid}>{errorText}</Error>
        </MsgError>
      </ContactInputCont>
    </>
  )
}

export default Textarea