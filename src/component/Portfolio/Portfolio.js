import React, { useState } from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"
import PortfolioList from "./PortfolioList"

const Portfolio = () => {
  const [selected, setSelected] = useState('react')
  const list = [
    {
      id: 'react',
      title: 'React Project'
    },
    {
      id: 'javaScript',
      title: 'JavaScript Project'
    },
    {
      id: 'frontend',
      title: 'Frontend Project'
    },
    {
      id: 'backend',
      title: 'Backend Project'
    },
  ]
  
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
            <ul className="compunent">
              
            </ul>
          </div>
          <div>
            
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Portfolio
