import React, { useState } from 'react'

export default function ({ text, image }) {
    const [hover, setHover] = useState(false)


    const handleMouseOver = () => {
        setHover(true)
    }

    return (
        <div className='icon-block-container'>

            <div className="ib-img-container" onMouseOver={handleMouseOver}>
                <img className="ib-img-container--image" src={image} alt=" " />
            </div>
            <p className={!hover ? "hover" : "onHover"}>
                {text}
            </p>

        </div>
    )
}