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
            <section className="schedule-container-content">
                <div style={{
                    fontSize: widthState.fontSize,
                    color: "#fc4545",
                    fontWeight: "800",
                    transition: ".7s linear",
                    padding: "3rem 0"

                }}>
                    <p className="schedule-title section-title-wrapper">{text[`${lang}`].navbar.schedule.toUpperCase()}</p>
                </div>

                <div className="sh-cont-wrapp">
                    <div className="control-table-container">
                        <div className="schedule-menu" >
                            <ScheduleControlBox delayTime={1000} bttnClass={"ct-bttn"} tdClass={"ct"} activity={"Crosstraining"} />
                            <ScheduleControlBox delayTime={1100} bttnClass={"ob-bttn"} tdClass={"ob"} activity={"Open Box"} />
                            <ScheduleControlBox delayTime={1200} bttnClass={"jj-bttn"} tdClass={"jj"} activity={"Jiu-Jitsu"} />
                            <ScheduleControlBox delayTime={1300} bttnClass={"jjk-bttn"} tdClass={"jjk"} activity={"Jiu-Jitsu Kids"} />
                            <ScheduleControlBox delayTime={1400} bttnClass={"ctk-bttn"} tdClass={"ctk"} activity={"Crosstraining Kids"} />
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
            </section>
        </>
    )
}

