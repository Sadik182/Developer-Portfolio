import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faFacebookF, faLinkedinIn, faMailchimp, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faArrowRight, faPhone, faPhoneAlt, faMailBulk, faMailReply, faMailForward} from "@fortawesome/free-solid-svg-icons"
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container1 top'>
          <div className='heading text-center'>
            <h5>If You Have Any Project In Your Mind</h5>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Md. Sadikur Rahman</h1>
                  <h3>Jr. Software Engineer</h3>
                  <p className="text-justify">I am available for freelance work. If you have any project in your mind Connect with me via and call in to my account. I will make it soon as possible.</p> <br />
                  <p><FontAwesomeIcon icon={faPhone} /> (+88) 01715925172</p>
                  <p><FontAwesomeIcon icon={faMailBulk} /> Sadikurrahman728@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                    <a href="https://www.facebook.com/Sadik1820/"><FontAwesomeIcon icon={faFacebookF} size="2x"/></a>
                    </button>
                    <button className='btn_shadow'>
                    <a href="https://www.linkedin.com/in/sadik182/"><FontAwesomeIcon icon={faLinkedinIn} size="2x"/></a>
                    </button>
                    <button className='btn_shadow'>
                    <a href="https://github.com/Sadik182 "><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                    </button>
                    <button className='btn_shadow'>
                    <a href="https://t.me/Sadik1820"><FontAwesomeIcon icon={faTelegram} size="2x"/></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='d-flex w-100'>
                  <div className='w-100'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='w-100'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow mt-3'>
                  SEND MESSAGE <FontAwesomeIcon icon={faArrowRight} size = "1x"/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
