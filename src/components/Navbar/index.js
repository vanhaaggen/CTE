import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { Animated } from 'react-animated-css'
import Media from 'react-media'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'



import './style.sass'
import './styleMobile.sass'

import { I18NConsumer } from '../i18ncontext'



export default function Navbar(props) {
    const [langMenu, setLangMenu] = useState(false)
    const [animation, setAnimation] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    function delayLangMenu(param) {
        setTimeout(() => {
            setLangMenu(!param)
        }, 300);
    }

    return <>


        <I18NConsumer>
            {({ text, lang }) => (
                <div className="navbar-wrapper">
                    <Media query={{ minWidth: 700 }}>
                        {matches => matches ? (
                            <>
                                <div className="Navbar">
                                    <div className="navbar-container">
                                        <Link className="menu"
                                            activeClass="active"
                                            to="header"
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
                                            <ul>
                                                <Link className="menu"
                                                    activeClass="active"
                                                    to="who"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                >{text[`${lang}`].navbar.who}</Link>
                                                <Link className="menu"
                                                    activeClass="active"
                                                    to="what"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                >{text[`${lang}`].navbar.what}</Link>
                                                <Link className="menu"
                                                    activeClass="active"
                                                    to="schedule"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                >{text[`${lang}`].navbar.schedule}</Link>
                                                <Link className="menu"
                                                    activeClass="active"
                                                    to="price"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                >{text[`${lang}`].navbar.price}</Link>
                                                <Link className="menu"
                                                    activeClass="active"
                                                    to="contact"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                >{text[`${lang}`].navbar.contact}</Link>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="button-lang" onClick={() => {
                                            setAnimation(!animation)
                                            delayLangMenu(langMenu)
                                        }
                                        }>
                                            <span>lang</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="lang-wrapper">
                                    {langMenu === true && <>
                                        <Animated
                                            animationIn="slideInRight"
                                            animationOut="slideOutRight"
                                            animationInDuration={300}
                                            animationOutDuration={300}
                                            isVisible={animation}>
                                            <div className='langMenu'>
                                                <p className='langMenu__lang' onClick={() => {
                                                    props.handleLang('CAT')
                                                    setAnimation(!animation)
                                                    delayLangMenu(langMenu)
                                                }
                                                }>CAT</p>
                                                <p className='langMenu__lang' onClick={() => {
                                                    props.handleLang('ES')
                                                    setAnimation(!animation)
                                                    delayLangMenu(langMenu)
                                                }
                                                }>ES</p>
                                                <p className='langMenu__lang' onClick={() => {
                                                    props.handleLang('EN')
                                                    setAnimation(!animation)
                                                    delayLangMenu(langMenu)
                                                }
                                                }>EN</p>
                                            </div>

                                        </Animated>
                                    </>}
                                </div>
                            </>
                        ) : (
                                <>
                                    <div className={`Navbar-mobile-${menuOpen}`}>
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
                                                console.log('this works')
                                                setMenuOpen(!menuOpen)
                                            }
                                            }>
                                                <FontAwesomeIcon className="menu-icon" icon={menuOpen ? faTimes : faBars} />
                                            </div>
                                        </div>
                                        {menuOpen && <>
                                            <div className="navbar-container-mobile">
                                                <ul className="navbar-container-mobile__list">
                                                    <Link className="menu-mobile"
                                                        activeClass="active"
                                                        to="who"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={500}
                                                        onClick={() => setMenuOpen(!menuOpen)}
                                                    >{text[`${lang}`].navbar.who}</Link>
                                                    <Link className="menu-mobile"
                                                        activeClass="active"
                                                        to="what"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={500}
                                                        onClick={() => setMenuOpen(!menuOpen)}
                                                    >{text[`${lang}`].navbar.what}</Link>

                                                    <Link className="menu-mobile"
                                                        activeClass="active"
                                                        to="schedule"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={500}
                                                        onClick={() => setMenuOpen(!menuOpen)}
                                                    >{text[`${lang}`].navbar.schedule}</Link>

                                                    <Link className="menu-mobile"
                                                        activeClass="active"
                                                        to="price"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={500}
                                                        onClick={() => setMenuOpen(!menuOpen)}
                                                    >{text[`${lang}`].navbar.price}</Link>

                                                    <Link className="menu-mobile"
                                                        activeClass="active"
                                                        to="contact"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={500}
                                                        onClick={() => setMenuOpen(!menuOpen)}
                                                    >{text[`${lang}`].navbar.contact}</Link>
                                                    <div className="menu-mobile" onClick={() => {
                                                        setAnimation(!animation)
                                                        delayLangMenu(langMenu)
                                                    }
                                                    }>
                                                        <span>lang</span>
                                                    </div>
                                                </ul>
                                            </div>
                                        </>}

                                        <div className="lang-wrapper-mobile">
                                            {langMenu === true && <>
                                                <Animated
                                                    animationIn="slideInRight"
                                                    animationOut="slideOutRight"
                                                    animationInDuration={300}
                                                    animationOutDuration={300}
                                                    isVisible={animation}>
                                                    <div className='langMenu-mobile'>
                                                        <p className='langMenu__lang-mobile' onClick={() => {
                                                            props.handleLang('CAT')
                                                            setAnimation(!animation)
                                                            delayLangMenu(langMenu)
                                                        }
                                                        }>CAT</p>
                                                        <p className='langMenu__lang-mobile' onClick={() => {
                                                            props.handleLang('ES')
                                                            setAnimation(!animation)
                                                            delayLangMenu(langMenu)
                                                        }
                                                        }>ES</p>
                                                    </div>

                                                </Animated>
                                            </>}
                                        </div>
                                    </div>

                                </>
                            )
                        }
                    </Media>
                </div>
            )}
        </I18NConsumer>

    </>
}


