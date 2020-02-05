import React, { useState, useEffect } from 'react'
import { Animated } from 'react-animated-css'
import './style.sass'

import coach1 from '../../images/coach1.png'
import coach2 from '../../images/coach2.png'


export default function (props) {
    const [widthState, setWidthState] = useState({ fontSize: "2rem" })
    const { text, lang } = props

    useEffect(() => {
        setWidthState({ fontSize: "6rem" })
    }, [])

    return (

        <>
            <section className="who-container-content">

                <div style={{
                    fontSize: widthState.fontSize,
                    color: "#fc4545",
                    fontWeight: "800",
                    transition: "1s linear",
                    padding: "3rem 0"

                }}>
                    <p className="who-title section-title-wrapper">{text[`${lang}`].navbar.who.toUpperCase()}</p>
                </div>

                <div className="who-wrapp">
                    <Animated className="who-wrapp__anim"
                        animationIn="bounceInLeft"
                        animationInDelay={500}
                        isVisible={true}>

                        <div className="divisor-background border-left">
                            <div className="divisor-wave1">


                                <div className="who-divisor">

                                    <article className="who-divisor__paragraph ">
                                        <p className='who-divisor__paragraph--size'>{text[`${lang}`].sectionWho.par1}</p>
                                        <p className='who-divisor__paragraph--size'>{text[`${lang}`].sectionWho.par2}</p>
                                    </article>

                                    <div className="who-divisor__coach-container">

                                        <div className="who-divisor__coach">

                                            <img className="who-divisor__coach--image" src={coach1} alt="coach" />

                                            <div className="who-divisor__coach-description-container">
                                                <div className="who-divisor__coach-description-container--line"></div>
                                                <p className="who-divisor__coach-description-container--textBig">Coach Cristhian</p>
                                                <p className="who-divisor__coach-description-container--textSmall">Jo t'ensenyare a moure pesos alts sense que et facis mal.</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </Animated>

                    <Animated className="who-wrapp__anim"
                        animationIn="bounceInRight"
                        animationInDelay={1100}
                        isVisible={true}>


                        <div className="divisor-background border-right">
                            <div className="divisor-wave2">
                                <div className="who-divisor">

                                    <div className="who-divisor__coach-container">

                                        <div className="who-divisor__coach">

                                            <img className="who-divisor__coach--image" src={coach2} alt="coach" />

                                            <div className="who-divisor__coach-description-container">
                                                <div className="who-divisor__coach-description-container--line"></div>
                                                <p className="who-divisor__coach-description-container--textBig">Coach Gerard</p>
                                                <p className="who-divisor__coach-description-container--textSmall">Amb mi aprendras que sempre pots una mica mes</p>
                                            </div>

                                        </div>

                                    </div>

                                    <article className="who-divisor__paragraph par3">
                                        <q className='who-divisor__paragraph--size-par3'>{text[`${lang}`].sectionWho.par3}</q>
                                    </article>

                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            </section>




        </>





    )
}