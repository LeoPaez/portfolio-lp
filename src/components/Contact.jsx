import React, { useState } from 'react'
import styled from 'styled-components'
import ContactDraw from "../assets/contact-img.svg"
import Location from "../assets/icons/location.png"
import Email from "../assets/icons/email.png"
import Swal from "sweetalert2"
import Input from './Inputs/Input'
import Textarea from './Inputs/Textarea'

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContactCont = styled.div`
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212529;
  width: 46%;
  border-radius: 8px;
  margin-bottom: 140px;
  @media (max-width: 1500px){
    width: 60%;
  }
  @media (max-width: 1300px){
    width: 70%;
  }
  @media (max-width: 1000px){
    width: 80%;
  }
  @media (max-width: 900px){
    flex-direction: column;
    height: 540px;
    gap: 30px;
    padding-bottom: 8px;
  }
  @media (max-width: 600px){
    width: 85%;
  }
`
const ContactItem = styled.div`
  width: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ContactTitle = styled.h3`
  margin-bottom: 30px;
  font-size: 24px;
  @media (max-width: 900px){
    margin-bottom: 20px;
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
const ContactSubmit = styled.button`
  padding: 8px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-size: 16px;
  color: #e9ecef;
  margin-top: -6px;
  font-weight: 600;
  letter-spacing: 0.5px;
  background-color: #FF9900;
  :hover {
    background-color: #FFA600;
  }
  @media (max-width: 900px){
    padding: 10px 50px;
  }
`

const Contact = () => {
  const [inputName, changeInputName] = useState({campo: '', valido: null});
  const [inputEmail, changeInputEmail] = useState({campo: '', valido: null});
  const [inputSubject, changeInputSubject] = useState({campo: '', valido: null});
  const [inputMsg, changeInputMsg] = useState({campo: '', valido: null});
	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    allCharacters: /^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]{1,16}$/,
	}
  
  const onSubmit = (e) => {
		if (
      inputName.valido === "true" &&
      inputEmail.valido === "true" &&
      inputSubject.valido === "true" &&
      inputMsg
    ){
			changeInputName({campo: '', valido: ''});
			changeInputEmail({campo: '', valido: ''});
			changeInputSubject({campo: '', valido: ''});
			changeInputMsg({campo: '', valido: ''});
		} else {
      e.preventDefault();
      Swal.fire({
        title: "Espera...",
        html: "<b>No completaste todos los campos del formulario</b>",
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
            <ContactTitle>Contactame</ContactTitle>
            <ContactInfo>
              <ContactIconBg>
                <ContactIcon src={Location} />
              </ContactIconBg>
              <ContactInfoText>Mar del Plata, Bs. As, Argentina</ContactInfoText>
            </ContactInfo>
            <ContactInfo>
              <ContactIconBg>
                <ContactIcon src={Email} />
              </ContactIconBg>
              <ContactInfoText>lpaezbusiness@gmail.com</ContactInfoText>
            </ContactInfo>
            <ContactImg src={ContactDraw} />
          </ContactItem>
          <ContactItem>
            <ContactForm action="https://formsubmit.co/lpaezbusiness@gmail.com" method="POST" onSubmit={onSubmit}>
              <Input
                estado={inputName}
                cambiarEstado={changeInputName}
                tipo="text"
                placeholder="Nombre"
                name="name"
                leyendaError="Por favor ingresa solo letras"
                expresionRegular={expresiones.nombre}
              />
              <Input 
                estado={inputEmail}
                cambiarEstado={changeInputEmail}
                tipo="email"
                placeholder="Email"
                name="email"
                leyendaError="Por favor ingresa un email valido"
                expresionRegular={expresiones.correo}
              />
              <Input 
                estado={inputSubject}
                cambiarEstado={changeInputSubject}
                tipo="text"
                placeholder="Asunto"
                name="subject"
                leyendaError="Por favor ingresa un asunto"
                expresionRegular={expresiones.allCharacters}
              />
              <Textarea
                estado={inputMsg}
                cambiarEstado={changeInputMsg}
                tipo="text"
                placeholder="Mensaje"
                name="mensaje"
                leyendaError="Por favor ingresa un mensaje"
                expresionRegular={expresiones.allCharacters}
              />
              <ContactSubmit type="submit">Enviar</ContactSubmit>
            </ContactForm>
          </ContactItem>
        </ContactCont>
      </Flex>
    </>
  )
}

export default Contact