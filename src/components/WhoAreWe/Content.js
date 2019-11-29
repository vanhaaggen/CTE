import React, { useState, useEffect } from 'react'
import { Animated } from 'react-animated-css'

import '../styles/WhoAreWe.sass'

export default function Content(props) {
    const [widthState, setWidthState] = useState({ width: "5%" })
    const { text, lang, isInView } = props

    useEffect(() => {
        const changeWidth = () => {
            setWidthState({ width: "100%" })
        }
        changeWidth()
    }, [])

    return <>
        <div className="section-title-wrapper">
            <Animated
                animationIn="slideInLeft"
                animationInDelay={100}
                animationInDuration={2000}
                isVisible={true}>

                <h2 style={{
                    paddingLeft: "1rem",
                    fontSize: "4vw",
                    backgroundColor: "#fc4444",
                    color: "white",
                    width: widthState.width,
                    transition: "width 2s"

                }}>{text[`${lang}`].navbar.who}</h2>
            </Animated>
        </div>

        <div>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit euismod proin, mauris himenaeos praesent posuere vehicula nascetur ante interdum velit pellentesque, neque nam nulla sodales sed felis cum molestie. Metus ullamcorper tortor magna commodo mauris enim suscipit consequat, bibendum nec nascetur lectus praesent facilisi. Montes ornare ad orci lobortis bibendum, neque diam eget scelerisque cursus condimentum, donec semper mauris accumsan.</p>
            </article>
        </div>




    </>
}