import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo2.png"
import { Container, Nav, Navbar } from "react-bootstrap"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    // <>
    //   <header className='header'>
    //     <div className='container d_flex'>
    //       <div className='logo'>
    //         <img src={logo} alt='' />
    //       </div>

    //       <div className='navlink'>
    //         <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
    //           {/* <ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'> */}
    //           <li>
    //             <a href='#home'>home</a>
    //           </li>
    //           <li>
    //             <a href='#features'>features</a>
    //           </li>
    //           <li>
    //             <a href='#portfolio'>portfolio</a>
    //           </li>
    //           <li>
    //             <a href='#resume'>resume</a>
    //           </li>
              
    //           <li>
    //             <a href='#contact'>contact</a>
    //           </li>
    //           <li>
    //             <button className='home-btn'>Hire Me</button>
    //           </li>
    //         </ul>

    //         <button className='toggle' onClick={() => setMobile(!Mobile)}>
    //           {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
    //         </button>
    //       </div>
    //     </div>
    //   </header>
    // </>
  )
}

export default Header
