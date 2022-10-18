import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo2.png"
import { Container, Nav, Navbar } from "react-bootstrap"

const Header = () => {
//   // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  
  return (
    <>
    <Navbar collapseOnSelect expand="lg"  className="header">
      <Container>
        <Navbar.Brand href="#home" className="logo"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  )
}

export default Header
