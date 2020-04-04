import React, { useState, useEffect } from 'react'
import methods from '../../utils/index.js'

import './style.sass'

const { highlightCell } = methods

export default function ({ bttnClass, tdClass, activity }) {
    const [isOn, setIsOn] = useState(false)
    const [selector, setSelector] = useState(null)

    useEffect(() => {
        highlightCell(selector, isOn)
    }, [isOn, selector])

    const activeStyle = {
        backgroundColor: isOn ? "#151515" : "",
        color: isOn ? "#f5f5f5" : "black",
    }

    return (<>
        <div className="schedule-cont">

            <div className={`schedule-menu__container ${bttnClass}`}
                style={activeStyle}
                onClick={() => {

                    setSelector(`p.${tdClass}`)
                    setIsOn(!isOn)
                }
                } >
                <p>{activity}</p>
            </div>

        </div>
    </>)
}