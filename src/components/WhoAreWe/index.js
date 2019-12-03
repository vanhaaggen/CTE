import React, { useState, useEffect } from 'react'

import './style.sass'
import coach1 from '../../images/coach1.png'
import coach2 from '../../images/coach2.png'

export default function (props) {
    const [widthState, setWidthState] = useState({ width: "10%" })
    const { text, lang } = props

    useEffect(() => {
        setWidthState({ width: "100%" })
    }, [])

    return (

        <>
            <div style={{
                backgroundColor: "#fc4444",
                width: widthState.width,
                transition: "width 1s linear"
            }}>
                <p className="who-title section-title-wrapper">{text[`${lang}`].navbar.who}</p>
            </div>


            <div className="who-container">
                <article className="who-container___article-intro">
                    <p className='who-container___article-intro_par1'>{text[`${lang}`].sectionWho.par1}</p>
                    <p className='who-container___article-intro_par2'>{text[`${lang}`].sectionWho.par2}</p>
                </article>

                <article className="pictures-container">

                    <div className="pic-wrapper">

                        <div className="who-pictures">
                            <img className="coach1-pic" src={coach1} alt="coach" />
                            <div className="overlay">
                                <p className="text-pic">Cristhian</p>
                            </div>
                        </div>

                    </div>

                    <div className="pic-wrapper">

                        <div className="who-pictures">
                            <img className="coach2-pic" src={coach2} alt="coach" />
                            <div className="overlay">
                                <p className="text-pic">Gerard</p>
                            </div>
                        </div>

                    </div>
                </article>
            </div>

        </>





    )
}