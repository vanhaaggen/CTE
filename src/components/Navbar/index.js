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
                onClick={() => setMenuOpen(!menuOpen)}
            >{text[`${lang}`].navbar[`${linkTo}`]}</Link>
        )
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
                                                <nav className="navbar-container-mobile__list">
                                                    <LinkComponentMobile text={text} lang={lang} linkTo={'who'} />
                                                    <LinkComponentMobile text={text} lang={lang} linkTo={'what'} />
                                                    <LinkComponentMobile text={text} lang={lang} linkTo={'schedule'} />
                                                    <LinkComponentMobile text={text} lang={lang} linkTo={'price'} />
                                                    <LinkComponentMobile text={text} lang={lang} linkTo={'contact'} />
                                                    <div className="menu-mobile" onClick={() => {
                                                        setAnimation(!animation)
                                                        delayLangMenu(langMenu)
                                                    }
                                                    }>
                                                        <span>lang</span>
                                                    </div>
                                                </nav>
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
                </header>
            )}
        </I18NConsumer>
    </>
}


