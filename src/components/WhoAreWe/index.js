import React, { useState, useEffect } from 'react'
import './style.sass'


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
                        <div className="right"></div>
                        <p className='para1'>{text[`${lang}`].sectionWho.par1}</p>
                        <p className='para2'>{text[`${lang}`].sectionWho.par2}</p>
                    </div>
                </article>
            </div>



        </>





    )
}