import React from 'react'
import './About.scss'
import { useState,useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Appwrap from '../../../Wrapper/Appwrap';
import { color } from 'framer-motion';

const About = () => {
  const form = useRef();
    useEffect(()=>{
        setTimeout(() => {
          //  setLetterClass('text-animate-hover')
       }, 3000)
   },[])

   const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_bp1hdnq","template_d0s532w",form.current, "Gt_dCiq7BguQ5Wy3D")
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  
  return (
    <div className='about'>
        <div className='paddings innerWidth flexCenter about-container'>
            <div className='about-1'>
                <h3 style={{color:"#ff922d", fontSize:'2rem', fontWeight:'bold'}}>About Us</h3>
            </div>
            <div className='about-2'>
                <div className='about-img'><div>
                  <img className='vi' src ="vi.png"/><br/>
                <h4 style={{color:"#ff922d"}}>Vikram Prajapat </h4><br/></div>
                <div><img className='vi' src ="ot.png"/><br/>
                <h4 style={{color:"#ff922d"}}>Vikas Tak </h4><br/></div>
                </div>
              <div><p className='abspan'>         Welcome to Momentus Finance,  your trusted partner for all your loan needs. Momentus Finance is a loan DSA (Direct Selling Agent) firm that offers fast, easy and affordable loans and insurances to individuals and businesses. Whether you need money for home construction, personal expenses, education, medical bills, home improvement, debt consolidation, or business expansion. We can help you get the loan you need in minutes. You can apply through our website (www.momentusfinance.in) and get approved instantly. You can choose from a variety of loan options, such as home loans, mortgage loans, personal loans, business loans, education loans, takeover loans and car loans, with flexible repayment terms and low interest rates. You can also choose from a range of loan options, such as fixed or variable interest rate, secured or unsecured loan, short-term or long-term loan, and more. We also provide free credit counseling and financial education to help you manage your finances better. With Momentus Finance, you can achieve your financial goals and dreams with ease. You can get GST Certificate and Income Tax Returns facilities from our experienced CA (Chartered Accountant). Momentus Finance is the ultimate loan provider firm for you.</p></div>
            </div>
        </div>
        <div className='container contact-page paddings innerWidth flexCenter'>
        <div className='contact-form'>
                    <form ref={form} onSubmit = {sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type = "text" style={{backgroundColor:'#fe8639',fontSize:'1rem'}}  name = "name" placeholder='Name' required/>

                            </li>
                            <li className='half'>
                                <input type = "email" style={{backgroundColor:'#fe8639', fontSize:'1rem'}} name = "email" placeholder='Email' required/>
                                
                            </li>
                          
                            <li >
                                <input className = 'textarea' style={{backgroundColor:'#fe8639'}} name = "message" placeholder='Message' required />
                                
                            </li>
                            <li >
                                <input type = "submit" className='flat-button' value='SEND'/>
                                
                            </li>
                        </ul>
                    </form>
                    </div>
                 
    </div>
    </div>
  )
}

export default Appwrap(
  About,'about'
)
