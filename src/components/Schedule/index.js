import React, { useState, useEffect } from 'react'


import './style.sass'

export default function (props) {
    const [widthState, setWidthState] = useState({ fontSize: "2rem" })
    const { text, lang } = props

    useEffect(() => {
        setWidthState({ fontSize: "6rem" })
    }, [])

    return <>

        <div style={{
            fontSize: widthState.fontSize,
            color: "#52f9b1",
            fontWeight: "800",
            transition: "1s linear",
            paddingLeft: "4rem"
        }}>
            <p className="schedule-title section-title-wrapper">{text[`${lang}`].navbar.schedule.toUpperCase()}</p>
        </div>


        <div>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit euismod proin, mauris himenaeos praesent posuere vehicula nascetur ante interdum velit pellentesque, neque nam nulla sodales sed felis cum molestie. Metus ullamcorper tortor magna commodo mauris enim suscipit consequat, bibendum nec nascetur lectus praesent facilisi. Montes ornare ad orci lobortis bibendum, neque diam eget scelerisque cursus condimentum, donec semper mauris accumsan.</p>
            </article>
        </div>




    </>
}