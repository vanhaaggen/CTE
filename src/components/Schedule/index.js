import React, { useState, useEffect } from 'react'


import './style.sass'

export default function (props) {
    const [widthState, setWidthState] = useState({ fontSize: "2rem" })
    const [isOn, setIsOn] = useState(false)
    const [cellContent, setCellContent] = useState()
    const [selector, setSelector] = useState()

    const { text, lang } = props
    const { sectionSchedule } = text[`${lang}`]

    useEffect(() => {
        setWidthState({ fontSize: "6rem" })
    }, [])

    useEffect(() => {
        highlightCell(selector, isOn)
    }, [isOn])


    /**
     * Creates Schedule table and load dinamicaly content from the text prop.
     * 
     * @param {number} rows
     * @param {number} cols
     * 
     * @returns {Array}
     */

    const createTable = (rows, cols) => {
        let table = []
        let cellId = [0]

        for (let i = 0; i < rows; i++) {
            let children = []
            for (let j = 0; j < cols; j++) {
                children.push(
                    <td
                        className={`table-data-child cell${cellId[cellId.length - 1]}`}>

                        {sectionSchedule[`row${i + 1}`][`cell${cellId[cellId.length - 1]}`]}

                    </td>)

                cellId.push((cellId.length - 1) + 1)
            }

            table.push(<tr className={`row${i + 1}`}>{children}</tr>)
        }

        return table
    }

    /**
     * If cells inner text match with cellContent parameter the cell changes its style.
     * 
     * @param {string} selector
     * @param {boolean} boolean 
     * 
     * @returns {nodeList}
     */

    const highlightCell = (selector, boolean) => {
        const cells = document.querySelectorAll(selector)

        for (let i = 0; i < cells.length; i++) {

            let parent = cells[i].parentNode

            boolean && (parent.style.boxShadow = "0px 2px 5px -2px rgba(0,0,0,0.6)")
            !boolean && (parent.style.boxShadow = "none")
        }
    }


    const handleControlBox = (param) => {
        setIsOn(!isOn)
        setSelector(param)
    }


    function ScheduleControlBox({ activity, handleControlBox }) {
        return (

            <div className="schedule-menu__container ct-container" onClick={handleControlBox}>
                <p>{activity}</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" ></span>
                </label>
            </div>
        )
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
            </div>



            <div className="table-container">
                <table className="table-layout" id="display-table">
                    <tr>
                        <th></th>
                        <th>Dilluns</th>
                        <th>Dimarts</th>
                        <th>Dimecres</th>
                        <th>Dijous</th>
                        <th>Divendres</th>
                        <th>Dissabte</th>
                    </tr>
                    {createTable(9, 7)}
                </table>
            </div>

        </>
    )
}

{/* <div className=" schedule-menu__container ob-container">
                    <p>Open Box</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="schedule-menu__container jj-container">
                    <p>Jiu-Jitsu</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="schedule-menu__container jjk-container">
                    <p>Jiu-Jitsu Kids</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="schedule-menu__container ctk-container">
                    <p>Crosstraining Kids</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            */}