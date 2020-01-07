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

            <div className="contact-container">
                <div style={{
                    fontSize: widthState.fontSize,
                    color: "#4577f6",
                    fontWeight: "800",
                    transition: "1s linear",
                    paddingRight: "4rem"
                }}>
                    <p className=" contact-title section-title-wrapper">{text[`${lang}`].navbar.contact.toUpperCase()}</p>
                </div>
                <section className="contact-content">
                    <article className="contact-description-wrapper">

                        Hello
                </article>
                </section>

            </div>
        </>
    )
}