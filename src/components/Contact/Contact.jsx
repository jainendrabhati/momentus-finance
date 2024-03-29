import React from 'react'
import { MdCall,MdWhatsapp,MdLocationOn,MdEmail} from 'react-icons/md'

// import {BsFillChatDotsFill} from 'react-icons'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import './Contact.css'
import Appwrap from '../../Wrapper/Appwrap'
// import './Navbar.scss'
const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span style={{color:"#ff922d", fontSize:'2rem', fontWeight:'bold'}}>Our Contacts</span>
                <span className='primaryTeext'>Easy to Contact Us</span>
                <span className='secondaryText'>We always ready to help by providing the best Loan services for you. We believe in giving a good rate of interest to make your life better </span>
            
             <div className="flexColStart contactModes">
                <div className="flexStart row">
                    <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Call</span>
                            <span className='secondaryText'>+91 7014181601 </span>
                            <span className='secondaryText'>+91 8955410682 </span>
                        </div>
                    </div>
                    {/* <div className="flexCenter button">Call Now</div> */}
                </div>

                <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdWhatsapp size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Chat</span>
                            <span className='secondaryText'>+91 7014181601 </span>
                        </div>
                    </div>
                    {/* <div className="flexCenter button">Chat Now</div> */}
                </div>
             </div>

             <div className="flexStart row ">
                    <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdLocationOn size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Address</span>
                            <span className='secondaryText'><p>Bhairav Complex, Ground Floor, Shop No.6 , Sardarshahar-331403 </p></span>
                        </div>
                    </div>
                    {/* <div className="flexCenter button">Video Call Now</div> */}
                </div>

                <div className="flexCenter mode" style={{width:'22rem'}}>
                    <div className="flexStart ">
                        <div className="flexCenter icon">
                            <MdEmail size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Mail</span>
                            <span className='secondaryText'>momentusfinance@gmail.com </span>
                        </div>
                    </div>
                    {/* <div className="flexCenter button">Mail Now</div> */}
                </div>
             </div>
             </div>
            </div>
            <div className="c-right Emi_calculator">
                <h2 style={{color:"#ff922d", fontSize:'2rem', fontWeight:'bold'}}> <a href ="https://emicalculat.netlify.app/" >Emi Calculator </a></h2>
                <div className="image" style={{ borderRadius: "0px", height:"21rem",cursor:"pointer", }} >
                    <a href = "https://emicalculat.netlify.app/">
                    <img src = './emic.png' alt = ''/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Appwrap(Contact,'contact');
