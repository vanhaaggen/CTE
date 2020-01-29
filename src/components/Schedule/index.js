import React, { useState, useEffect } from 'react'


import './style.sass'

export default function (props) {
    const [widthState, setWidthState] = useState({ fontSize: "2rem" })
    const { text, lang } = props
    const { sectionSchedule } = text[`${lang}`]

    useEffect(() => {
        setWidthState({ fontSize: "6rem" })
    }, [])

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
                    <td className="table-data">
                        <div className={`table-data-child cell${cellId[cellId.length - 1]}`}>
                            {sectionSchedule[`row${i + 1}`][`cell${cellId[cellId.length - 1]}`]}
                        </div>
                    </td>)
                cellId.push((cellId.length - 1) + 1)
            }
            table.push(<tr className={`row${i + 1}`}>{children}</tr>)
        }
        return table
    }

    return <>

        <div style={{
            fontSize: widthState.fontSize,
            color: "#52f9b1",
            fontWeight: "800",
            transition: "1s linear",
            paddingLeft: "4rem"
        }}>
            <p className="schedule-title section-title-wrapper">{text[`${lang}`].navbar.schedule.toUpperCase()}</p>
        </div>
        <div className="table-container">
            <table>
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
}