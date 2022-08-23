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
              <Card className="btn_shadow">
                <Card.Img variant="top" src={image} className="cardImage"/>
                <Card.Body>
                  <Card.Title className="cardTitle">Card title</Card.Title>
                </Card.Body>
                <Card.Footer className='d-flex'>
                <a href="https://github.com/Sadik182?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
            <a href="#" target="_blank"><FontAwesomeIcon icon={faExternalLink} size="2x"/></a>
                </Card.Footer>
              </Card>
              <Card>
              <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
              <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
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
