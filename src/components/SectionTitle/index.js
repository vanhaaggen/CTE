import React, { useEffect, useState } from 'react'

export default function ({ props, section }) {

    const { lang, text } = props

    return (
        <>
            <div style={{
                color: "white",
                fontWeight: "800",
                padding: "0 0 2rem 0",
                fontSize: "4rem"

            }} >
                <p id={section} className={`${section}-title section-title-wrapper`}>{text[`${lang}`].navbar[`${section}`].toUpperCase()}</p>
            </div>
        </>
    )
}