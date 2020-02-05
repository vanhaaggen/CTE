import React from 'react'

import { Animated } from 'react-animated-css'
import { I18NConsumer } from '../i18ncontext'
import Stripe from './Stripe'

import './style.sass'


import images from '../../images'
const { logo: [back, barbell, circle, laurel, kettlebell] } = images


const Header = () => {
    return <>

        <section className='hero' id="hero">
            <div className="hero-wrapper">
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
                            <img className="hero-img" src={back} alt="cte-logo" />
                        </Animated>
                        <Animated
                            animationIn="bounceInLeft"
                            animationInDelay={900}
                            isVisible={true}
                            className="animation">
                            <img className="hero-img" src={circle} alt="cte-logo" />
                        </Animated>
                        <Animated
                            animationIn="bounceInRight"
                            animationInDelay={600}
                            isVisible={true}
                            className="animation">
                            <img className="hero-img" src={laurel} alt="cte-logo" />
                        </Animated>
                        <Animated
                            animationIn="bounceInUp"
                            animationInDelay={300}
                            isVisible={true}
                            className="animation">
                            <img className="hero-img" src={barbell} alt="cte-logo" />
                        </Animated>
                        <Animated
                            animationIn="bounceInDown"
                            isVisible={true}
                            className="animation">
                            <img className="hero-img" src={kettlebell} alt="cte-logo" />
                        </Animated>

                    </div>
                </div>
            </div>

        </section>

        <Stripe />

    </>
}

export default Header