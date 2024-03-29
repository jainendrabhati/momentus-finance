import React from 'react'
import './Footer.css'
// import Appwrap from '../../Wrapper/Appwrap';

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src='./mom.png' alt = '' width={120} />
                <span className='secondaryText'>
                    Our vision is to give all people <br/>
                    financial help so that they live better life .
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'> Information</span>
                <span className='secondaryText'>Bhairav Complex, Ground Floor, Shop No.6, Sardarshahar-331403</span>
                <div className="flexColCenter f-menu">
                    {/* <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span> */}
                    <span>Copyright © 2023 - All Rights Reserved</span>
                    <span> for any website related quary click here </span>
<span style={{gap:"9px", display:"flex"}}>
  <a href='https://www.linkedin.com/in/kishan-bhati-565b66236/'>Kishan Bhati</a> <a href="https://www.linkedin.com/in/jainendra-bhati-191b45208/">Jainendra Bhati</a></span>                     {/* <ul className='appnavbar-links'>
            {['home','partner','value','about','contact'].map((item)=>(
             <li className='app__flex p-text' key={`link-${item}`}>
                <div/>
              
                <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
           
             </li>
            ))}
          
          </ul> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;
