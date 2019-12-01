import React, { useState, useEffect } from 'react'


import './style.sass'

export default function (props) {
    const [widthState, setWidthState] = useState({ width: "10%" })
    const { text, lang } = props

    useEffect(() => {
        const changeWidth = () => {
            setWidthState({ width: "100%" })
        }
        changeWidth()
    }, [])

    return <>

        <div style={{
            backgroundColor: "#fc4444",
            width: widthState.width,
            transition: "width 1s linear"
        }}>
            <p className="who-title section-title-wrapper">{text[`${lang}`].navbar.who}</p>
        </div>


        <div>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit euismod proin, mauris himenaeos praesent posuere vehicula nascetur ante interdum velit pellentesque, neque nam nulla sodales sed felis cum molestie. Metus ullamcorper tortor magna commodo mauris enim suscipit consequat, bibendum nec nascetur lectus praesent facilisi. Montes ornare ad orci lobortis bibendum, neque diam eget scelerisque cursus condimentum, donec semper mauris accumsan.</p>
            </article>
        </div>




    </>
}