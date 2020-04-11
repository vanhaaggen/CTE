import React from 'react'
import Media from 'react-media'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import ToogleImgFormat from '../ToogleImgFormat'

import './style.sass'

import whiteLogo from '../../images/logo-white.png'
import whiteLogoWebP from '../../images/logo-white.webp'
import { I18NConsumer } from '../i18ncontext'



export default function Footer() {

    const legal = (param) => {
        const date = new Date()
        const year = date.getFullYear()
        return <>
            <p className={!param ? `footer-legal-p` : `footer-legal-p${param}`}>Crosstraining Empordà - {year}</p>
        </>
    }


    return <>

        <I18NConsumer>
            {({ text, lang }) => (
                <>
                    <footer className="footer-container">
                        <Media query={{ minWidth: 776 }}>
                            {matches => matches ? (
                                <>
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
                                            <ToogleImgFormat
                                                webPImg={whiteLogoWebP}
                                                fallBackImg={whiteLogo}
                                                format={"png"}
                                                altMssg={"crosstraining emporda logo"}
                                            />
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
                                        <div className="legals">
                                            <Link className="legal-link" to="/legal">{text[`${lang}`].navbar.legal}</Link>
                                            <span>|</span>
                                            <Link className="legal-link" to="/privacy">{text[`${lang}`].navbar.privacy}</Link>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                    <>

                                        <div className="footer-wrapper-mbl">
                                            <div>
                                                <div className="logo-wrapper-mbl">
                                                    <img src={whiteLogo} alt="crosstraining emporda logo" />
                                                </div>
                                                <div className="footer-address-mbl">
                                                    <p>Carrer dels Arboços, 4</p>
                                                    <p>1711, Vulpellac</p>
                                                    <p><span className="prefix">+34</span> 659 533 721</p>
                                                </div>
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

                                        <div className="footer-legal-m">
                                            <div className="legals-mob">
                                                <Link className="legal-link" to="/legal">{text[`${lang}`].navbar.legal}</Link>
                                                <span>|</span>
                                                <Link className="legal-link" to="/privacy">{text[`${lang}`].navbar.privacy}</Link>
                                            </div>
                                            {legal("-mbl")}
                                        </div>

                                    </>
                                )}
                        </Media>


                    </footer>

                </>
            )}
        </I18NConsumer>

    </>

}