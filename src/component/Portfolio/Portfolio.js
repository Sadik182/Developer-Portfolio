import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import image from '../../images/portfolio_2.jpg';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Portfolio.css'

import data from './PortfolioData.js';


const Portfolio = () => {
  const [show, setShow] = useState(3);
  const slice = data.slice(0, show);
  const loadMore = () => {
    setShow(show + show);
  }
  return (
    <>
      <section className="Portfolio top" id="portfolio">
          <div className="heading text-center ">
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>
        <div className="container1">
          <div className="row justify-content-center align-items-center">
          {
            slice.map((item, index) => {
              return (
                <div className="btn_shadow2 col-12 col-lg-4 col-md-6 mb-4" key={index}>
                  <img src={item.img} alt="" className="cardImage" />
                   <h3 className="cardTitle">{item.title}</h3>
                  <div className="d-flex">
                   <a className="gitHub" href={item.git}><FontAwesomeIcon icon={faGithub} size="2x" title="Source Code"/></a>
                   <a className="liveDemo" href={item.live}><FontAwesomeIcon icon={faExternalLink} size="2x" title="Live Demo"/></a>
                  </div>
               </div>
              )
            })
          }
          </div>
          {
            show < 6 ? (<button onClick={loadMore} className="btn btn-dark d-block w-100">Load More</button>): (null)
          }
        </div>
      </section>
    </>
  );
};

export default Portfolio;
