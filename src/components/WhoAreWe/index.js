import React, { useState, useEffect } from 'react'
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

            <div style={{
                fontSize: widthState.fontSize,
                color: "#fc4545",
                fontWeight: "800",
                transition: "1s linear",
                paddingLeft: "4rem"
            }}>
                <p className="who-title section-title-wrapper">{text[`${lang}`].navbar.who.toUpperCase()}</p>
            </div>

            <div className="who-wrapper">

                <article className="who-description-wrapper">
                    <div className="who-description">
                        <p className='para1'>{text[`${lang}`].sectionWho.par1}</p>
                        <p className='para2'>{text[`${lang}`].sectionWho.par2}</p>
                    </div>
                    <p className="coach-title">{text[`${lang}`].sectionWho.coachTitle}</p>
                    <div className="who-coach-wrapper">
                        <div className="coach-wrapper">
                            <img className="coach-wrapper--style" src={coach1} alt="coach" />
                        </div>
                        <div className="coach-wrapper">
                            <img className="coach-wrapper--style" src={coach2} alt="coach" />
                        </div>
                    </div>
                </article>
            </div>



        </>





    )
}