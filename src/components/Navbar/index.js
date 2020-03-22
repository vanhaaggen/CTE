import React, { useState, useRef } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { Animated } from 'react-animated-css'
import Media from 'react-media'
import OutsideAlerter from './OutsideAlerter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './style.sass'
import './styleMobile.sass'

import { I18NConsumer } from '../i18ncontext'


export default function Navbar(props) {
    const [isAnimation, setIsAnimation] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const childRef = useRef(null)


    const LinkComponent = ({ text, lang, linkTo }) => {
        return (
            <Link className="menu"
                activeClass="active"
                to={linkTo}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                {text[`${lang}`].navbar[`${linkTo}`]}
            </Link>
        )
    }

    const LinkComponentMobile = ({ text, lang, linkTo }) => {
        return (
            <Link className="menu-mobile"
                activeClass="active"
                to={linkTo}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >{text[`${lang}`].navbar[`${linkTo}`]}</Link>
        )
    }

    const handleOutsideAlert = (childState) => {
        if (childState === true) {
            setIsMobileMenuOpen(!isMobileMenuOpen)
        } else {
            return
        }

    }

    return <>

        <I18NConsumer>
            {({ text, lang }) => (
                <header className="navbar-wrapper">
                    <Media query={{ minWidth: 776 }}>
                        {matches => matches ? (
                            <>
                                <div className="Navbar">
                                    <div className="navbar-container">
                                        <Link
                                            activeClass="active"
                                            to="hero"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            <div className="navbar-container___brand-name">
                                                <p className="acronym">{text.navBar.acronym}</p>
                                                <span className="brand1">{text.navBar.brand1}</span>
                                                <span className="brand2">{text.navBar.brand2}</span>
                                            </div>
                                        </Link>

                                        <div className="navbar-container__list">
                                            <nav className="nav-list">
                                                <div className="link-container large">
                                                    <LinkComponent text={text} lang={lang} linkTo={'who'} />
                                                </div>
                                                <div className="link-container large">
                                                    <LinkComponent text={text} lang={lang} linkTo={'what'} />
                                                </div>
                                                <div className="link-container small">
                                                    <LinkComponent text={text} lang={lang} linkTo={'schedule'} />
                                                </div>
                                                <div className="link-container small">
                                                    <LinkComponent text={text} lang={lang} linkTo={'price'} />
                                                </div>
                                                <div className="link-container small">
                                                    <LinkComponent text={text} lang={lang} linkTo={'contact'} />
                                                </div>

                                            </nav>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="button-lang" >
                                            <div className="lang-container">
                                                <span>lang</span>
                                                <div className='langMenu'>
                                                    <p className='langMenu__lang' onClick={() => {
                                                        props.handleLang('CAT')
                                                        setIsAnimation(!isAnimation)

                                                    }
                                                    }>CAT</p>
                                                    <p className='langMenu__lang' onClick={() => {
                                                        props.handleLang('ES')
                                                        setIsAnimation(!isAnimation)

                                                    }
                                                    }>ES</p>
                                                    <p className='langMenu__lang' onClick={() => {
                                                        props.handleLang('EN')
                                                        setIsAnimation(!isAnimation)

                                                    }
                                                    }>EN</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </>
                        ) : (
                                <>
                                    <div className={`Navbar-mobile`}>
                                        <div className="navbar-container-mobile">
                                            <Link className="menu"
                                                activeClass="active"
                                                to="header"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                <div className="navbar-container-mobile___brand-name-mobile">
                                                    <p className="acronym-mobile">{text.navBar.acronym}</p>
                                                </div>
                                            </Link>
                                            <div onClick={(e) => {
                                                e.preventDefault()
                                                setIsMobileMenuOpen(!isMobileMenuOpen)
                                            }
                                            }>
                                                <FontAwesomeIcon className="menu-icon" icon={isMobileMenuOpen ? faTimes : faBars} />
                                            </div>
                                        </div>
                                        {isMobileMenuOpen && <>
                                            <OutsideAlerter forwardedRef={childRef} handleOutsideAlert={handleOutsideAlert}>
                                                <div className="navbar-menu-container-mobile">
                                                    <nav className="navbar-menu-container-mobile__list">

                                                        <LinkComponentMobile text={text} lang={lang} linkTo={'who'} />
                                                        <LinkComponentMobile text={text} lang={lang} linkTo={'what'} />
                                                        <LinkComponentMobile text={text} lang={lang} linkTo={'schedule'} />
                                                        <LinkComponentMobile text={text} lang={lang} linkTo={'price'} />
                                                        <LinkComponentMobile text={text} lang={lang} linkTo={'contact'} />
                                                        <div className="menu-mobile" >
                                                            <div className="lang-container-m">
                                                                <p className='lang-m'>lang</p>
                                                                <p className='lang-bttn-m' onClick={() => {
                                                                    props.handleLang('CAT')
                                                                    setIsMobileMenuOpen(!isMobileMenuOpen)

                                                                }
                                                                }>CAT</p>
                                                                <p className='lang-bttn-m' onClick={() => {
                                                                    props.handleLang('ES')
                                                                    setIsMobileMenuOpen(!isMobileMenuOpen)


                                                                }
                                                                }>ES</p>
                                                                <p className='lang-bttn-m' onClick={() => {
                                                                    props.handleLang('EN')
                                                                    setIsMobileMenuOpen(!isMobileMenuOpen)

                                                                }
                                                                }>EN</p>
                                                            </div>
                                                        </div>



                                                    </nav>
                                                </div>
                                            </OutsideAlerter>
                                        </>}
                                    </div>
                                </>
                            )
                        }
                    </Media>
                </header>
            )}
        </I18NConsumer>
    </>
}


