import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import Appwrap from '../../../Wrapper/Appwrap'
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className='hero-wrapper home'>
    <div className='paddings innerWidth flexCenter hero-container' style={{}}>
        <div className='flexColStart hero-left'>
           <div className="hero-title">
            <div className='orange-circle'/>
            <h1>Trusted Loans<br/>
            For Every Stage<br/>
      Of Life</h1>
           </div>

           <div className="flexColStart hero-des">
            <span className='secondaryText'>Get the financial support you need with our convenient and reliable loan services. We offer </span>
            <span className='secondaryText'> competitive interest rates and flexible repayment options to help you achieve your goals. Trust </span>
            <span className='secondaryText'> us to meet your financial needs quickly and efficiently.</span>
           </div>

           {/* <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className='button'>Search</button>
           </div> */}

           <div className='flexCenter stats'>
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={880000} end={300000000} duration={4}/>
                    <span className='plus'>+</span>

                </span>
                <span className='secondaryText'>Amount Provided</span>
            </div>
           

           <div className="flexColCenter stat">
                <span>
                    <CountUp start={1950} end={2000} duration={4}/>
                    <span className='plus' >+</span>

                </span>
                <span className='secondaryText'>Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
                <span>
                    <CountUp  end={28} duration={4}/>
                    <span className='plus'>+</span>

                </span>
                <span className='secondaryText'>Partner</span>
            </div>
           
           </div>

          
        </div>

        <div className='flexCenter hero-right'>
            <div className='image-container'>
                <img src ="./mome.png" alt='h-img'/>
            </div>
        </div>
      
    </div>
    </section>
  )
}

<section className='hero-wrapper'></section>
export default Appwrap(Hero,'home')
