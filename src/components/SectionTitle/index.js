import React, { useEffect, useState } from 'react'

export default function ({ props, section, padding }) {
    const [widthState, setWidthState] = useState({ fontSize: "2rem" })
    const { lang, text } = props

    useEffect(() => {
        setWidthState({ fontSize: "6rem" })
    }, [])


    return (
        <>
            <div style={{
                fontSize: widthState.fontSize,
                color: "white",
                fontWeight: "800",
                transition: ".7s linear",
                padding: `${padding}`

            }}>
                <p className={`${section}-title section-title-wrapper`}>{text[`${lang}`].navbar[`${section}`].toUpperCase()}</p>
            </div>
        </>
    )
}