import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


import './style.sass'

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
                    <td key={j}
                        className={`table-data-child cell${cellId[cellId.length - 1]}`}>

                        {sectionSchedule[`row${i + 1}`][`cell${cellId[cellId.length - 1]}`]}

                    </td>)

                cellId.push((cellId.length - 1) + 1)
            }

            table.push(<tr key={i} className={`row${i + 1}`}>{children}</tr>)
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



        const cssClassName = (string) => {
            let toArr = Array.from(string)
            let pushNum = toArr.push("-td")
            let del = toArr.splice(0, 2)
            let result = toArr.join('')

            return result
        }

        for (let i = 0; i < cells.length; i++) {

            let parent = cells[i].parentNode
            let parentName = parent.nodeName


            boolean && (parentName == 'TD' ?
                parent.classList.add(cssClassName(selector)) :
                parent.parentNode.classList.add(cssClassName(`${selector}-splt`)))

            !boolean && (parentName == 'TD' ?
                parent.classList.remove(cssClassName(selector)) :
                parent.parentNode.classList.remove(cssClassName(`${selector}-splt`)))
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
                        {createTable(9, 7)}
                    </tbody>
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