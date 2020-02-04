import React, { useState, useEffect } from 'react'
import methods from '../../utils/index.js'

import './style.sass'

const { highlightCell } = methods

export default function ({ bttnClass, tdClass, activity }) {
    const [isOn, setIsOn] = useState(false)
    const [selector, setSelector] = useState()

    useEffect(() => {
        highlightCell(selector, isOn)
    }, [isOn])


    return (<>
        <div className={`schedule-menu__container ${bttnClass}`}
            onClick={(event) => {
                event.stopPropagation()
                setSelector(`p.${tdClass}`)
                setIsOn(!isOn)
            }
            } >
            <p>{activity}</p>
        </div>
    </>)
}