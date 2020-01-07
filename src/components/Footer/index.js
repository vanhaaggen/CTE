import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'


import './style.sass'

import { I18NConsumer } from '../i18ncontext'

export default function Footer() {

    return <>

        <I18NConsumer>
            {({ text, lang }) => (
                <div className="footer-container">
                    <p className="footer-name"><span className="footer-name--brand1">{text.footer.brand1.toUpperCase()}</span><span className="footer-name--brand2">{text.footer.brand2.toUpperCase()}</span></p>
                    <div className="footer-media-container">

                        <a href="https://www.instagram.com/crosstrainingemporda/?hl=es"><FontAwesomeIcon className="footer-insta media" icon={faInstagram} /></a>
                        <a href="https://www.facebook.com/crosstrainingemporda/"><FontAwesomeIcon className="footer-face media" icon={faFacebook} /></a>


                    </div>
                </div>
            )}
        </I18NConsumer>

    </>

}