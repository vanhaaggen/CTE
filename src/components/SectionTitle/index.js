import React from 'react'

export default function ({ props, section }) {

    const { lang, text } = props

    return (
        <>
            <div style={{
                color: "white",
                fontWeight: "800",
                fontSize: "4rem"

            }} >
                <p id={section} className={`${section}-title section-title-wrapper`}>{text[`${lang}`].navbar[`${section}`].toUpperCase()}</p>
            </div>
        </>
    )
}