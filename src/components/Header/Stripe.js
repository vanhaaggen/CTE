import React from 'react'
import { Animated } from 'react-animated-css'
import { I18NConsumer } from '../i18ncontext'

import './Stripe.sass'


function Stripe() {
    return (

        <>
            <I18NConsumer>
                {({ text, lang }) => (
                    <div className="stripe">
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
                                        isVisible={true}>
                                        <div key={`cont${i}`} className={`cont cont${i}`}>{badge}</div>
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