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
            <div className="animation-container">
                <Animated
                    animationIn="bounceInLeft"
                    isVisible={true}
                    className="animation">
                    <img className="header-img" src={cteLogo} alt="cte-logo" />
                </Animated>
                <Animated
                    animationIn="bounceInLeft"
                    isVisible={true}
                    className="animation">
                    <img className="header-img" src={cteLogo} alt="cte-logo" />
                </Animated>
                <Animated
                    animationIn="bounceInLeft"
                    isVisible={true}
                    className="animation">
                    <img className="header-img" src={cteLogo} alt="cte-logo" />
                </Animated>
                <Animated
                    animationIn="bounceInLeft"
                    isVisible={true}
                    className="animation">
                    <img className="header-img" src={cteLogo} alt="cte-logo" />
                </Animated>
                <Animated
                    animationIn="bounceInLeft"
                    isVisible={true}
                    className="animation">
                    <img className="header-img" src={cteLogo} alt="cte-logo" />
                </Animated>
            </div>
        </header>

        <BlankStripe />

    </>
}

export default Header