import React, { useState, useEffect } from 'react'

export default function ({ text, image }) {
    const [hover, setHover] = useState()

    useEffect(() => {
        setHover(noHover)
    }, [])


    const noHover = {
        color: "white",
        fontWeight: 600,
        transform: "translateY(-60px)",
        opacity: 0
    }

    const onHover = {
        color: "white",
        transition: ".2s ease-out",
        fontWeight: 600,
        padding: "0 .3rem",
        borderLeft: "3px solid #fc4646"
    }

    const handleMouseOver = () => {
        setHover(onHover)
    }

    return (
        <div className={`icon-block-container`}>

            <div className="ib-img-container" onMouseOver={handleMouseOver}>
                <img className="ib-img-container--image" src={image} alt=" " />
            </div>
            <p style={hover}>
                {text}
            </p>

        </div>
    )
}