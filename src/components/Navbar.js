import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import './styles/Navbar.sass'

import text from '../text'
const { navBar } = text


class Navbar extends React.Component {
    render() {
        return <>

            <div className="Navbar">


                <Link className="menu"
                    activeClass="active"
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <div className="Navbar___brand-name">
                        <p className="acronym">{navBar.acronym}</p>
                        <span className="brand1">{navBar.brand1}</span>
                        <span className="brand2">{navBar.brand2}</span>
                    </div>
                </Link>


                <div className="Navbar__list">
                    <ul>
                        <Link className="menu"
                            activeClass="active"
                            to="who"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Qui Som?</Link>
                        <Link className="menu"
                            activeClass="active"
                            to="what"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Que fem?</Link>
                        <Link className="menu"
                            activeClass="active"
                            to="schedule"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Horaris</Link>
                    </ul>
                </div>
            </div>

        </>
    }
}

export default Navbar