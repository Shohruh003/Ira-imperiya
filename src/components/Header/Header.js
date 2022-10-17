
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Language from '../../Images/language.png'
import Megaphone from '../../Images/megaphone.png'
import Logo from '../../Images/logo.png'
import SiteLogo from '../../Images/site-logo.png'
import './header.css'
export const Header = () => {

  const [btn, setBtn] = useState()

  return (
    <div className="header">
        <div className="container">
          <div className="header-inner">
            <div className='site-logo'>
            <img className="site-logoImg" alt="logo" width={42} height={37} src={Logo} />
            <img className="site-logoImg" alt="site-logo" width={119} height={13} src={SiteLogo} />
            </div>
            <div className='header-navbar'>
              <nav>
                <ul className='header-list'>
                  <li>
                  <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/'>Ecosystem</NavLink>
                  </li>

                  <li>
                  <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/buy'>Buy</NavLink>
                  </li>

                  <li>
                  <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/ira'>What is IRA?</NavLink>
                  </li>

                  <li>
                  <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/guide'>Quick start guide</NavLink>
                  </li>

                  <li>
                  <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/improvement'>Total improvement</NavLink>
                  </li>
                </ul>
              </nav>

              <button onClick={()=>{
                    setBtn(!btn);
                    }} className="header-btn">
              <img className="header-imgLanguage" alt="language" width={24} height={24} src={Language} />
              <img className="header-imgMegaphone" alt="megaphone" width={18} height={18} src={Megaphone} />
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}