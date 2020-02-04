import React, { useState, useEffect } from 'react'
import methods from '../../utils/index.js'
import ScheduleControlBox from '../ScheduleControlBox'
import './style.sass'

const { highlightCell, createTable } = methods


export default function (props) {
    const [widthState, setWidthState] = useState({ fontSize: "2rem" })
    const { text, lang } = props
    const { sectionSchedule } = text[`${lang}`]

    useEffect(() => {
        setWidthState({ fontSize: "6rem" })
    }, [])



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

            <div className="sh-cont-wrapp">
                <div className="control-table-container">
                    <div className="schedule-menu" >
                        <ScheduleControlBox bttnClass={"ct-bttn"} tdClass={"ct"} activity={"Crosstraining"} />
                        <ScheduleControlBox bttnClass={"ob-bttn"} tdClass={"ob"} activity={"Open Box"} />
                        <ScheduleControlBox bttnClass={"jj-bttn"} tdClass={"jj"} activity={"Jiu-Jitsu"} />
                        <ScheduleControlBox bttnClass={"jjk-bttn"} tdClass={"jjk"} activity={"Jiu-Jitsu Kids"} />
                        <ScheduleControlBox bttnClass={"ctk-bttn"} tdClass={"ctk"} activity={"Crosstraining Kids"} />
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
                </div>
            </div>
        </>
    )
}

