import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import "swiper/css" 
import './Residencies.css'
import Appwrap from '../../../Wrapper/Appwrap'
import data from '../../../utils/slider.json'
import { sliderSettings } from '../../../utils/common'
import { BiFontSize } from 'react-icons/bi'
const Residencies = () => {
  return (
    <section className='r-wrapper'>
<div className="paddings innerWidth r-container">
    <div className="r-head flexColStart">
        <span className='orangeText'style={{color: 'black'}}>Best Choices</span>
        <span className='primaryText'>Our Services</span>
    </div>
    <Swiper {...sliderSettings} className='sw'>
        <SliderButtons/>
        {data.map((card,i)=>(
        <SwiperSlide key={i}>
            <div className='flexColStart r-card'>
                <a href = "https://loanpages.netlify.app/">
            <img src={card.image} width={'214px'} height={'161px'} alt="home"/>
            <span className='secondaryText r-price'>
                <span style={{color:"orange"}}></span><br/>
                <span className='primaryTexts' >{card.name}</span> <br/>
                <span className=''>{card.price}</span>   <br/>
            </span>
            {/* <span className='primaryTexts' >{card.name}</span> <br/> */}
            <span className='primaryTextp' style={{paddingTop:'3px', cursor:'pointer'}}>{card.detail}</span> <br/>
            <span className='know'>Know more</span>
            </a>
            </div>
        </SwiperSlide>


    ))
    }
    </Swiper>
    <div className='loan'>
    {data.map((card,i)=>( 
    <div className='flexColStart r-card' key = {i}>
<a href = "https://loanpages.netlify.app/">
<img src={card.image}  alt="home"/>
<span className='secondaryText r-price'>
<span style={{color:"orange"}}></span><br/>
<span className='primaryTexts' >{card.name}</span> <br/>
<span className=''>{card.price}</span>   <br/>
</span>
{/* <span className='primaryTexts' >{card.name}</span> <br/> */}
<span className='primaryTextp' style={{paddingTop:'3px', cursor:'pointer'}}>{card.detail}</span> <br/>
<span className='know'>Know more</span>
</a>
</div> ))
    }
</div>
</div>
    </section>
  )
}

export default Appwrap(Residencies,'services');

const SliderButtons =()=>{
    const swiper = useSwiper();
    return(
        <div className='flexCenter r-buttons'>
            <button className='button' onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button className='button' onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}