import React from 'react'
import './Companies.css'
import Appwrap from '../../../Wrapper/Appwrap'
const Companies = () => {
  return (
   <section className='c-wrapper partner'>
{/* <div className="paddings innerWidth flexCenter c-container">
    <img src="./sbii.jpg" alt="" />
    <img src="./lic.png" alt="" />
    <img src="./hdfc.png" alt="" />
    <img src="./bob.png" alt="" />
    <img src = "./kotak.png" alt = ""/>
    <img src = './pnb.png' alt = ""/>
    <img src='./canera_bank.png' alt = ""/>
</div> */}
        <div className='r-main-3'>
            <div className='r-main-3-1'>
                <div className='r-main-3-2'>
                    <ul>
                        <li>
                            <img src ="sbii.jpg"/>
                        </li>

                        <li>
                            <img src ="bob.png" />
                        </li>

                        <li>
                            <img src ="hdfc.png"/>
                        </li>

                       

                        <li>
                            <img src ="pnb.png"/>
                        </li>

                        <li>
                            <img src ="lich.jpg"/>
                        </li>

                        <li>
                            <img src ="icici1.png" alt="25"/>
                        </li>

                        <li>
                        <img src ="can.png"/>
                        </li>

                        {/* <li>
                        <img src ="sbii.jpg"/>
                        </li> */}

                        
                    </ul>
                </div>
            </div>
            
        </div>
   </section>
  )
}

export default Appwrap(Companies,'partner');
