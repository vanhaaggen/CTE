import React from 'react'

import { Animated } from 'react-animated-css'
import './styles/Header.sass'

import cteLogo from '../images/crosstransparent.png'


const BlankStripe = () => {
    return <>
        <div className="stripe"></div>
    </>
}

const Header = () => {
    return <>

        <header className='header' id="header">
            <Animated animationIn="bounceInLeft"
                isVisible={true}>
                <img className="header-img" src={cteLogo} alt="cte-logo" />
            </Animated>
        </header>

        <BlankStripe />

    </>
}

export default Header