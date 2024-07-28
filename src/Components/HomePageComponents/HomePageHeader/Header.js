import React from 'react'
import logo from '../../../assets/logo - Copy.png'
import './Header.css'
import Head from '../HeaderComponent/Head'
import { Link } from 'react-router-dom';
import CustomDropDown from '../CustomDropDown/CustomDropDown'
import { useTranslation } from 'react-i18next';
function Header() {
  const { t } = useTranslation('header')
  {console.log(t)}
  return (
    
    <div className='Header'>
        <nav>
            <img src={logo} className='icon' alt='img'/>
            <div className='nav-btns'>
            <CustomDropDown/>
            <Link to='/login'><button id='sign-in'>{t("head-signin")}</button></Link>
        </div>
        </nav>  
        <Head/>    
    </div>
     
  )
}

export default Header
