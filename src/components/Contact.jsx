import { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from "react-i18next"

import ContactDraw from "../assets/draws/contact-draw.svg"
import Location from "../assets/icons/location.png"
import Email from "../assets/icons/email.png"
import Swal from "sweetalert2"
import Input from './Inputs/Input'
import Textarea from './Inputs/Textarea'

import { Button } from "./Buttons/Button"
import { Flex } from "./Nav"

const ContactCont = styled.div`
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #343A40;
  border-radius: 8px;
  margin-bottom: 140px;
  @media (max-width: 900px){
    flex-direction: column;
    height: 540px;
    gap: 30px;
    padding-bottom: 8px;
  }
`
const ContactItem = styled.div`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 450px){
    width: 320px;
  }
  @media (max-width: 400px){
    width: 300px;
  }
`
const ContactTitle = styled.h3`
  margin-bottom: 30px;
  font-size: 24px;
  @media (max-width: 900px){
    margin-bottom: 20px;
  }
  @media (max-width: 500px){
    font-size: 22px;
  }
`
const ContactInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 280px;
  margin-bottom: 4px;
`
const ContactIcon = styled.img`
  width: 20px;
`
const ContactIconBg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #343A40;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContactInfoText = styled.p`
  opacity: 0.8;
  @media (max-width: 600px){
    font-size: 15px;
  }
`
const ContactImg = styled.img`
  width: 210px;
  margin-top: 30px;
  @media (max-width: 900px){
    display: none;
  }
`
const ContactForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  :last-of-type div {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Contact = () => {
  const [t] = useTranslation("global")

  const [inputName, changeInputName] = useState({field: '', valid: null});
  const [inputEmail, changeInputEmail] = useState({field: '', valid: null});
  const [inputSubject, changeInputSubject] = useState({field: '', valid: null});
  const [inputMsg, changeInputMsg] = useState({field: '', valid: null});
	const expressions = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    allCharacters: /^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]/,
	}
  
  const onSubmit = (e) => {
    const inputValue = e.target.value
		if (
      inputName.valid === "true" &&
      inputEmail.valid === "true" &&
      inputSubject.valid === "true" &&
      inputMsg
    ){
			changeInputName({field: inputValue, valid: ''});
			changeInputEmail({field: inputValue, valid: ''});
			changeInputSubject({field: inputValue, valid: ''});
			changeInputMsg({field: inputValue, valid: ''});
		} else {
      e.preventDefault();
      Swal.fire({
        title: `${t("formAlert.title")}`,
        html: `<b>${t("formAlert.msg")}</b>`,
        icon: "error",
        confirmButtonColor: "#4BB543",
        scrollbarPadding: false,
        background: "#343a40",
        color: "#f8f9fa"
      })
		}
	}

  return (
    <>
      <Flex>
        <ContactCont id="contact">
          <ContactItem>
            <ContactTitle>{t("contact.title")}</ContactTitle>
            <ContactInfo>
              <ContactIconBg>
                <ContactIcon src={Location} alt="location" />
              </ContactIconBg>
              <ContactInfoText>Mar del Plata, Bs. As, Argentina</ContactInfoText>
            </ContactInfo>
            <ContactInfo>
              <ContactIconBg>
                <ContactIcon src={Email} alt="email" />
              </ContactIconBg>
              <ContactInfoText>lpaezbusiness@gmail.com</ContactInfoText>
            </ContactInfo>
            <ContactImg src={ContactDraw} alt="contact draw" />
          </ContactItem>
          <ContactItem>
            <ContactForm action="https://formsubmit.co/lpaezbusiness@gmail.com" method="POST" onSubmit={onSubmit}>
              <Input
                state={inputName}
                changeState={changeInputName}
                type="text"
                placeholder={t("contact.name")}
                errorText={t("formError.name")}
                regex={expressions.nombre}
                name="name"
              />
              <Input 
                state={inputEmail}
                changeState={changeInputEmail}
                type="email"
                placeholder="Email"
                errorText={t("formError.email")}
                regex={expressions.correo}
                name="email"
              />
              <Input 
                state={inputSubject}
                changeState={changeInputSubject}
                type="text"
                placeholder={t("contact.subject")}
                errorText={t("formError.subject")}
                regex={expressions.allCharacters}
                name="_subject"
              />
              <Textarea
                state={inputMsg}
                changeState={changeInputMsg}
                type="text"
                placeholder={t("contact.msg")}
                errorText={t("formError.msg")}
                regex={expressions.allCharacters}
                name="message"
              />
              <input type="hidden" name="_captcha" value="false"></input>
              <Button>{t("contact.submitButton")}</Button>
            </ContactForm>
          </ContactItem>
        </ContactCont>
      </Flex>
    </>
  )
}

export default Contact