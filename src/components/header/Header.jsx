import React, {useState} from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import './Header.css'
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler'
import Navbar from './Navbar'
const Header = () => {

    const [menuOpened,setMenuOpened] = useState(false)

    const getMenuStyles = (menuOpened) =>{
        if(document.documentElement.clientWidth <= 800){
            return{right:!menuOpened && "-100%"}
        }
    }
  return (
    <section className='h-wrapper'>
    
      <Navbar/>
    <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenuAltRight size = {30} />
    </div>
    </section>
  )
}

export default Header
