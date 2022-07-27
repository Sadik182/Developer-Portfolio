import React from "react"
import "./Home.css"
import hero from "../pic/hero2.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faTwitter, faFacebookF, faLinkedinIn, faReact, faMdb, faNodeJs, } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Md. Sadikur Rahman</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Jr. Software Engineer.", " MERN Stack Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>If you have any project in your mind, Contact with me. I will make it soon as posible.</p>

            <div className='button '>
                   <h4 className="find_me">FIND ME ON</h4>
                  <button className='btn_shadow_social'>
                  <a href="#"><FontAwesomeIcon icon={faLinkedinIn} size="2x"/></a>
                  </button>
                  <button className='btn_shadow_social'>
                  <a href="#"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                  </button>
                  <button className='btn_shadow_social'>
                  <a href="#"><FontAwesomeIcon icon={faFacebookF} size="2x"/></a>
                  </button>
                  <button className='btn_shadow_social'>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                  </button>
             </div>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                <a href="#"><FontAwesomeIcon icon={faMdb} size="2x"/></a>
                </button>
                <button className='btn_shadow'>
                <a href="#"><FontAwesomeIcon icon={faReact} size="2x"/></a>
                </button>
                <button className='btn_shadow'>
                <a href="#"><FontAwesomeIcon icon={faNodeJs} size="2x"/></a>
                </button>
                <button className='btn_shadow'>
                <a href="#"><FontAwesomeIcon icon={faNodeJs} size="2x"/></a>
                </button>
                <button className='btn_shadow'>
                <a href="#"><FontAwesomeIcon icon={faNodeJs} size="2x"/></a>
                </button>
                <button className='btn_shadow'>
                <a href="#"><FontAwesomeIcon icon={faNodeJs} size="2x"/></a>
                </button>
               
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
