import React, { useState } from "react"
import contact1 from "./contact1.png"
import linkedin from "../pic/linkedin.png"
import insta from "../pic/insta.png"
import github from "../pic/github.png"
import "./Contact.css"

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
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Shreya Anand</h1>
                  {/* <p>Chief Operating Officer</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br /> */}
                  <p>Phone: +91 9472383201</p>
                  <p>Email: shreyaanand1501@gmail.com</p> <br />
                  </div>
              </div>
            </div>

{/* 
<div className='button'>
                  <a href="https://github.com/Anand-shreya">
                    <button className='btn_shadow'>
                      <i class='fab fa-facebook-f'></i> 
                      <img src={github} alt="" />
                    </button>
                  </a>
                  <a href="https://www.instagram.com/shreya._anand/">
                    <button className='btn_shadow'>
                      <i class='fab fa-instagram'></i>
                      <img src={insta} alt="" />
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/anand-shreya/" target="_blank">
                    <button className='btn_shadow'> 
                    <img src={linkedin} alt="LinkedIn" />
                    </button>
                  </a>
                </div>
*/}
            <div className='right box_shodow'>
              <form  action="https://formspree.io/f/mgejvvnv" method="POST">
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} required/>
                  </div>
                  <div className='input row'>
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
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent} required></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
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
