import React, { useState } from 'react'

import './styleAccordion.sass'

export default function (props) {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenPanel = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    return (
        <>
            <p className="accordion" onClick={(e) => handleOpenPanel(e)}>{props.title}</p>
            <div className={!isOpen ? "panel-hidden" : "panel-visible"}>
                {props.children}
            </div>
        </>
    )
}
