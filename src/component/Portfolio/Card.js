import React, { useState } from "react"
import './Portfolio.css'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import image from '../../images/portfolio_2.jpg'

const Card = (props) => {

  return (
    <>
        <div className="btn_shadow">
          <img src={image} alt="" />
          <h3>{props.category}</h3>
          <div className="d-flex">
            <a href="#" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
            <a href="#" target="_blank"><FontAwesomeIcon icon={faExternalLink} size="2x"/></a>
            
    
          </div>
        </div>
    </>
  )
}

export default Card
