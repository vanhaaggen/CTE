import React from 'react'
import { I18NConsumer } from '../i18ncontext'


import './Stripe.sass'

export default function Stripe() {

    return (
        <>

            <I18NConsumer>
                {({ text, lang }) => (
                    <div className="stripe" id="stripe">
                        <div className="stripe-container">
                            <p className="stripe-text"><q>VINCIT QUI SE VINCIT</q><br /> <span className="stripe-text_translation">{text[`${lang}`].quote}</span></p>
                        </div>
                        <div className="stripe-badge">
                            {text[`${lang}`].stripeText.map((badge, i) => (

                                <div className="stripe-anim">
                                    <div className="cont" key={`cont${i}`}>
                                        <div className={`cont${i}`}>{badge}</div>
                                    </div>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                )}
            </I18NConsumer>

        </>
    )
}

