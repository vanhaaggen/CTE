import React, { useEffect, useState } from 'react'
import { Animated } from 'react-animated-css'
import { I18NConsumer } from '../i18ncontext'
import isInViewPort from '../../utils/isInViewport'

import './Stripe.sass'


function Stripe() {
    const [isInView, setIsinView] = useState(false)
    console.log('Holis')
    useEffect(() => {
        function watchPageScroll() {
            window.addEventListener('scroll', function (event) {
                if (isInViewPort('#stripe')) setIsinView(true)
            })
        }
        watchPageScroll()

        return () => {
            window.removeEventListener('scroll', function (event) {
                isInViewPort('#stripe')
            })
        }
    })

    return (
        <>
            <I18NConsumer>
                {({ text, lang }) => (
                    <div className="stripe" id="stripe">
                        <div className="stripe-container">
                            <p className="stripe-text"><q>VINCIT QUI SE VINCIT</q><br /> <span className="stripe-text_translation">{text[`${lang}`].quote}</span></p>
                        </div>
                        <div className="stripe-badge">
                            {text[`${lang}`].stripeText.map((badge, i) => {
                                let count = i * 100
                                return <>

                                    <Animated className="stripe-anim"
                                        key={`anim${i}`}
                                        animationIn="bounceInUp"
                                        animationInDelay={count}
                                        isVisible={isInView}>
                                        <div className="cont" key={`cont${i}`}>
                                            <div className={`cont${i}`}>{badge}</div>
                                        </div>
                                    </Animated>

                                </>
                            })}
                        </div>
                    </div>
                )}
            </I18NConsumer>

        </>
    )
}

export default Stripe