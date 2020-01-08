import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'


import './style.sass'

import { I18NConsumer } from '../i18ncontext'

export default function Footer() {

    const legal = () => {
        const date = new Date()
        const year = date.getFullYear()
        return <>
            <p className="footer-legal--text">Crosstraining Empordà, {year}</p>
            <p>Tots els drets reservats</p>
        </>
    }

    return <>

        <I18NConsumer>
            {({ text, lang }) => (
                <>
                    <div className="footer-container">
                        <div className="footer-container-upside">

                            <p className="footer-name"><span className="footer-name--brand1">{text.footer.brand1.toUpperCase()}</span><span className="footer-name--brand2">{text.footer.brand2.toUpperCase()}</span></p>

                            <div className="footer-right-wrapper">
                                <p className="footer-right-text">segueix-nos:</p>
                                <div className="media-container">
                                    <a href="https://www.instagram.com/crosstrainingemporda/?hl=es"><FontAwesomeIcon className="footer-insta media" icon={faInstagram} /></a>
                                    <div className="media-separator"></div>
                                    <a href="https://www.facebook.com/crosstrainingemporda/"><FontAwesomeIcon className="footer-face media" icon={faFacebook} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="footer-legal">
                            {legal()}
                        </div>

                    </div>

                </>
            )}
        </I18NConsumer>


    </>

}