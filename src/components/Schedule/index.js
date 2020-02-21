import React from 'react'
import SectionTitle from '../SectionTitle'
import methods from '../../utils/index.js'
import ScheduleControlBox from '../ScheduleControlBox'
import './style.sass'

const { createTable } = methods


export default function (props) {

    const { text, lang } = props
    const { daysOfWeek } = text[`${lang}`].sectionSchedule
    const { scheduleContent } = text


    return (
        <>
            <section className="schedule-container-content">

                <SectionTitle props={props} section={"schedule"} padding={"0 0 4rem 0"} />

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
                                        {daysOfWeek.map(day => {
                                            return <th>{day}</th>
                                        })}
                                    </tr>
                                    {createTable(scheduleContent, 9, 7)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

