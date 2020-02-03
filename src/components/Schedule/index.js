import React, { useState, useEffect } from 'react'
import methods from '../../utils/index.js'
import './style.sass'

const { highlightCell, createTable } = methods


export default function (props) {
    const [widthState, setWidthState] = useState({ fontSize: "2rem" })
    const [isOn, setIsOn] = useState(false)
    const [selector, setSelector] = useState()

    const { text, lang } = props
    const { sectionSchedule } = text[`${lang}`]

    useEffect(() => {
        setWidthState({ fontSize: "6rem" })
    }, [])

    useEffect(() => {
        highlightCell(selector, isOn)
    }, [isOn])




    function ScheduleControlBox({ activity, handleControlBox }) {
        return (<>
            <div className="schedule-menu__container ct-container" onClick={handleControlBox}>
                <p>{activity}</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" ></span>
                </label>
            </div>
        </>)
    }

    const handleControlBox = (param) => {
        setIsOn(!isOn)
        setSelector(param)
    }


    return (
        <>
            <div style={{
                fontSize: widthState.fontSize,
                color: "#52f9b1",
                fontWeight: "800",
                transition: "1s linear",
                paddingLeft: "4rem"
            }}>
                <p className="schedule-title section-title-wrapper">{text[`${lang}`].navbar.schedule.toUpperCase()}</p>
            </div>

            <div className="schedule-menu" >
                <ScheduleControlBox activity={"Crosstraining"} handleControlBox={() => handleControlBox("p.crosstraining")} />
                <ScheduleControlBox activity={"Open Box"} handleControlBox={() => handleControlBox("p.openbox")} />
                <ScheduleControlBox activity={"Jiu-Jitsu"} handleControlBox={() => handleControlBox("p.jj")} />
                <ScheduleControlBox activity={"Jiu-Jitsu Kids"} handleControlBox={() => handleControlBox("p.jjk")} />
                <ScheduleControlBox activity={"Crosstraining Kids"} handleControlBox={() => handleControlBox("p.ctk")} />
            </div>



            <div className="table-container">
                <table className="table-layout" id="display-table">
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Dilluns</th>
                            <th>Dimarts</th>
                            <th>Dimecres</th>
                            <th>Dijous</th>
                            <th>Divendres</th>
                            <th>Dissabte</th>
                        </tr>
                        {createTable(sectionSchedule, 9, 7)}
                    </tbody>
                </table>
            </div>

        </>
    )
}

