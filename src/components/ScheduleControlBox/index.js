import React, { useState, useEffect } from 'react'
import { Animated } from 'react-animated-css'
import methods from '../../utils/index.js'

import './style.sass'

const { highlightCell } = methods

export default function ({ delayTime, bttnClass, tdClass, activity }) {
    const [isOn, setIsOn] = useState(false)
    const [selector, setSelector] = useState()

    useEffect(() => {
        highlightCell(selector, isOn)
    }, [isOn])

    const activeStyle = {
        backgroundColor: isOn ? "#151515" : "",
        color: isOn ? "#f5f5f5" : "black",
    }

    return (<>
        <Animated className="schedule-cont"
            animationIn="bounceInUp"
            animationInDelay={delayTime}
            isVisible={true}>

            <div className={`schedule-menu__container ${bttnClass}`}
                style={activeStyle}
                onClick={() => {

                    setSelector(`p.${tdClass}`)
                    setIsOn(!isOn)
                }
                } >
                <p>{activity}</p>
            </div>

        </Animated>
    </>)
}