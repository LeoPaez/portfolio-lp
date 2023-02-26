import React from 'react'
import ToggleLang from "./Inputs/ToggleLang"
import { useTranslation } from "react-i18next"

const ChangeLang = () => {
  const [t, i18n] = useTranslation("global")
  const handleChange = (e) => {
    if(e.target.checked) {
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("es")
    }
  }

  return (
    <>
      <ToggleLang onChange={handleChange} />
    </>
  )
}

export default ChangeLang