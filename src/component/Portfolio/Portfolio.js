import React, { useState } from "react";
import "./Portfolio.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import image from '../../images/portfolio_2.jpg'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Portfolio = () => {
  return (
    <>
      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center ">
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
            <ul className="compunent"></ul>
          </div>
          <div>
            <CardGroup className="card_group">
              <Card className="btn_shadow2">
                <Card.Img variant="top" src={image} className="cardImage"/>
                <Card.Body>
                  <Card.Title className="cardTitle">Doctors Portal Using MERN Stack</Card.Title>
                </Card.Body>
                <Card.Footer className='d-flex'>
                <a className="gitHub" href="https://github.com/Sadik182?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" title="Source Code"/></a>
            <a className="liveDemo" href="#" target="_blank"><FontAwesomeIcon icon={faExternalLink} size="2x" title="Live Demo"/></a>
                </Card.Footer>
              </Card>
              <Card className="btn_shadow2">
                <Card.Img variant="top" src={image} className="cardImage"/>
                <Card.Body>
                  <Card.Title className="cardTitle">Doctors Portal Using MERN Stack</Card.Title>
                </Card.Body>
                <Card.Footer className='d-flex'>
                <a className="gitHub" href="https://github.com/Sadik182?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" title="Source Code"/></a>
            <a className="liveDemo" href="#" target="_blank"><FontAwesomeIcon icon={faExternalLink} size="2x" title="Live Demo"/></a>
                </Card.Footer>
              </Card>
              <Card className="btn_shadow2">
                <Card.Img variant="top" src={image} className="cardImage"/>
                <Card.Body>
                  <Card.Title className="cardTitle">Doctors Portal Using MERN Stack</Card.Title>
                </Card.Body>
                <Card.Footer className='d-flex'>
                <a className="gitHub" href="https://github.com/Sadik182?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" title="Source Code"/></a>
            <a className="liveDemo" href="#" target="_blank"><FontAwesomeIcon icon={faExternalLink} size="2x" title="Live Demo"/></a>
                </Card.Footer>
              </Card>
              <Card className="btn_shadow2">
                <Card.Img variant="top" src={image} className="cardImage"/>
                <Card.Body>
                  <Card.Title className="cardTitle">Doctors Portal Using MERN Stack</Card.Title>
                </Card.Body>
                <Card.Footer className='d-flex'>
                <a className="gitHub" href="https://github.com/Sadik182?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" title="Source Code"/></a>
            <a className="liveDemo" href="#" target="_blank"><FontAwesomeIcon icon={faExternalLink} size="2x" title="Live Demo"/></a>
                </Card.Footer>
              </Card>
              <Card className="btn_shadow2">
                <Card.Img variant="top" src={image} className="cardImage"/>
                <Card.Body>
                  <Card.Title className="cardTitle">Doctors Portal Using MERN Stack</Card.Title>
                </Card.Body>
                <Card.Footer className='d-flex'>
                <a className="gitHub" href="https://github.com/Sadik182?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" title="Source Code"/></a>
            <a className="liveDemo" href="#" target="_blank"><FontAwesomeIcon icon={faExternalLink} size="2x" title="Live Demo"/></a>
                </Card.Footer>
              </Card>
              <Card className="btn_shadow2">
                <Card.Img variant="top" src={image} className="cardImage"/>
                <Card.Body>
                  <Card.Title className="cardTitle">Doctors Portal Using MERN Stack</Card.Title>
                </Card.Body>
                <Card.Footer className='d-flex'>
                <a className="gitHub" href="https://github.com/Sadik182?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" title="Source Code"/></a>
            <a className="liveDemo" href="#" target="_blank"><FontAwesomeIcon icon={faExternalLink} size="2x" title="Live Demo"/></a>
                </Card.Footer>
              </Card>
            
            </CardGroup>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
