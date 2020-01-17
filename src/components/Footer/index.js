import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

import './style.sass'

import whiteLogo from '../../images/logo-white.png'
import { I18NConsumer } from '../i18ncontext'



export default function Footer() {

    const legal = () => {
        const date = new Date()
        const year = date.getFullYear()
        return <>
            <p className="footer-legal">Crosstraining Empordà - {year}</p>
        </>
    }

    return <>

        <I18NConsumer>
            {({ text, lang }) => (
                <>
                    <footer className="footer-container">

                        <div className="footer-wrapper">

                            <div>
                                <div className="footer-name">
                                    <p className="footer-name--brand1">{text.navBar.brand1.toUpperCase()}</p>
                                    <p className="footer-name--brand2">{text.navBar.brand2.toUpperCase()}</p>
                                </div>
                                <div className="footer-address">
                                    <p>Carrer dels Arboços, 4</p>
                                    <p>1711, Vulpellac</p>
                                    <p>+34 659 53 37 21</p>
                                </div>
                            </div>

                            <div className="logo-wrapper">
                                <img src={whiteLogo} alt="logo" />
                            </div>

                            <div className="footer-social">
                                <p className="footer-right-text">{text[`${lang}`].footer.follow}</p>
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

                    </footer>

                </>
            )}
        </I18NConsumer>

    </>

}