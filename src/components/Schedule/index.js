import React from 'react'
import Media from 'react-media'
import methods from '../../utils/index.js'
import ScheduleControlBox from '../ScheduleControlBox'
import './style.sass'

const { createTable } = methods


export default function (props) {

    const { text, lang } = props
    const { daysOfWeek, daysOfWeekMobile } = text[`${lang}`].sectionSchedule
    const { scheduleContent, scheduleContentMobile } = text

    return (
        <>
            <section className="schedule-container-content">
                <Media query={{ minWidth: 776 }}>
                    {matches => matches ? (
                        <div className="sh-cont-wrapp">
                            <div className="control-table-container">
                                <div className="ctnr-schedule-menu">
                                    <div className="schedule-menu" >
                                        <ScheduleControlBox bttnClass={"ct-bttn"} tdClass={"ct"} activity={"Crosstraining"} />
                                        <ScheduleControlBox bttnClass={"ob-bttn"} tdClass={"ob"} activity={"Open Box"} />
                                        <ScheduleControlBox bttnClass={"jj-bttn"} tdClass={"jj"} activity={"*Jiu-Jitsu"} />
                                        <ScheduleControlBox bttnClass={"jjk-bttn"} tdClass={"jjk"} activity={"*Jiu-Jitsu Kids"} />
                                        <ScheduleControlBox bttnClass={"ctk-bttn"} tdClass={"ctk"} activity={"*Crosstraining Kids"} />
                                    </div>
                                    <div className="covid-disclaimer">
                                        <p>{text[`${lang}`].sectionSchedule.covidMssg}</p>
                                    </div>
                                </div>


                                <div className="table-container">
                                    <table className="table-layout" id="display-table">
                                        <tbody>
                                            <tr>
                                                <th></th>
                                                {daysOfWeek.map((day, i) => {
                                                    return <th key={`d-${i}`}>{day}</th>
                                                })}
                                            </tr>
                                            {createTable(scheduleContent, 9, 7)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ) : (
                            <div className="sh-cont-wrapp">
                                <div className="control-table-container-mbl">
                                    <div className="schedule-menu-mbl" >
                                        <div className="schedule-menu-mbl__subclass">
                                            <ScheduleControlBox bttnClass={"ct-bttn"} tdClass={"ct-mbl"} activity={"Crosstraining"} />
                                            <ScheduleControlBox bttnClass={"ctk-bttn"} tdClass={"ctk-mbl"} activity={"*Crosstraining Kids"} />
                                        </div>
                                        <div className="schedule-menu-mbl__subclass">
                                            <ScheduleControlBox bttnClass={"jj-bttn"} tdClass={"jj-mbl"} activity={"*Jiu-Jitsu"} />
                                            <ScheduleControlBox bttnClass={"jjk-bttn"} tdClass={"jjk-mbl"} activity={"*Jiu-Jitsu Kids"} />
                                            <ScheduleControlBox bttnClass={"ob-bttn"} tdClass={"ob-mbl"} activity={"Open Box"} />
                                        </div>
                                        <div className="covid-disclaimer-mbl">
                                            <p>{text[`${lang}`].sectionSchedule.covidMssg}</p>
                                        </div>
                                    </div>
                                    <div className="table-container">
                                        <table className="table-layout" id="display-table">
                                            <tbody>
                                                <tr>
                                                    <th></th>
                                                    {daysOfWeekMobile.map((day, i) => {
                                                        return <th key={`d-${i}`}>{day}</th>
                                                    })}
                                                </tr>
                                                {createTable(scheduleContentMobile, 9, 7)}
                                            </tbody>
                                        </table>
                                    </div>


                                </div>
                            </div>
                        )}
                </Media>
            </section>
        </>
    )
}

