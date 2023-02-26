import React from 'react'
import styled from "styled-components"
import "./ToggleButton.css"

const ToggleLang = () => {
  return (
		<div className="cont">
			<div className="switch">
				<input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" />
				<label htmlFor="language-toggle"></label>
				<span className="on">ES</span>
				<span className="off">EN</span>
  		</div>
		</div>
  )
}

export default ToggleLang;