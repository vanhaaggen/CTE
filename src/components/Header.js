import React from 'react'

import { Animated } from 'react-animated-css'
import { I18NConsumer } from './i18ncontext'

import './styles/Header.sass'

import logo from '../images'
const { back, barbell, circle, kettlebell, laurel } = logo


const BlankStripe = () => {
    return <>
        <div className="stripe"></div>
    </>
}

const Header = () => {
    return <>

        <header className='header' id="header">
            <div className="header-wrapper">
                <I18NConsumer>
                    {({ text, lang }) => (
                        <div className="quote-wrapper">
                            <Animated
                                animationIn="bounceInLeft"
                                animationInDelay={1400}
                                isVisible={true}>
                                {text[`${lang}`].header}
                            </Animated>
                        </div>
                    )}
                </I18NConsumer>
                <div className="animation-wrapper">
                    <div>
                        <Animated
                            animationIn="bounceIn"
                            animationInDelay={1200}
                            isVisible={true}
                            className="animation">
                            <img className="header-img" src={back} alt="cte-logo" />
                        </Animated>
                        <Animated
                            animationIn="bounceInLeft"
                            animationInDelay={900}
                            isVisible={true}
                            className="animation">
                            <img className="header-img" src={circle} alt="cte-logo" />
                        </Animated>
                        <Animated
                            animationIn="bounceInRight"
                            animationInDelay={600}
                            isVisible={true}
                            className="animation">
                            <img className="header-img" src={laurel} alt="cte-logo" />
                        </Animated>
                        <Animated
                            animationIn="bounceInUp"
                            animationInDelay={300}
                            isVisible={true}
                            className="animation">
                            <img className="header-img" src={barbell} alt="cte-logo" />
                        </Animated>
                        <Animated
                            animationIn="bounceInDown"
                            isVisible={true}
                            className="animation">
                            <img className="header-img" src={kettlebell} alt="cte-logo" />
                        </Animated>
                    </div>
                </div>
            </div>
        </header>

        <BlankStripe />

    </>
}

export default Header