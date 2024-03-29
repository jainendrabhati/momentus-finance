import React, { useState } from 'react'
import './Navbar.css'
// import { images } from '../../constants'
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import { motion} from 'framer-motion';
import { Link } from 'react-router-dom';
// import { User, useAuth0 } from '@auth0/auth0-react';
const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  // const { loginWithRedirect } = useAuth0();
  // const { logout ,isAuthenticated } = useAuth0();

  return (
    <nav className='app__navbar'>
     
        <div className='app__navbar-logo' style={{width:'180px', height:'80px'}}>
            <img src = 'log.png' className='logok' alt = "logo" />
        </div>
        <ul className='appnavbar-links'>
            {['home','partner','services','about','contact'].map((item)=>(
             <li className='app__flex p-text' key={`link-${item}`}>
                <div/>
              
                <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
             {/* <Link to ={`${item}`}>{`${item}`}</Link> */}
             </li>
            ))}
          
          </ul>
           <button className='nav-button'>
            <a href="https://applyloanmomentus.netlify.app/">Apply Now</a>
            </button>
          
            {/* </nav> */}

     <div className='app__navbar-menu' >
        <HiMenuAlt4 onClick={()=>setToggle(true)}/>

        {toggle && (
            <motion.div
            whileInView={{x:[300,0]}}
            transition={{duration:0.85,ease:'easeOut'}}>
                <HiX onClick={()=>setToggle(false)}/>
                <ul>
                {['home','partner','services','about','contact'].map((item)=>(
             <li  key={item}>
              
                <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
             </li>
            
             
            ))}
             <button className='button'>
            <a href="https://applyloanmomentus.netlify.app/">Apply Now</a>
            </button>
            </ul>
            </motion.div>
        )}
     </div>

     </nav>
  )
}

export default Navbar
