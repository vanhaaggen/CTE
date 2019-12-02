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
                <article className="who-container__article-intro">
                    <p className='section-intro'>{text[`${lang}`].sectionWho.intro}</p>
                </article>
                <article className="pictures-container">
                    <div className="pic-wrapper">
                        <div className="who-pictures">
                            <img className="coach1-pic" src={coach1} alt="coach" />
                        </div>
                    </div>
                    <div className="pic-wrapper">
                        <div className="who-pictures">
                            <img className="coach2-pic" src={coach2} alt="coach" />
                        </div>
                    </div>
                </article>
            </div>

        </>





    )
}