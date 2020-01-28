import React from 'react'

export default function (rows, cols) {
    let tableRowId = document.getElementById(`table`)
    let rowNumber = 1
    let cellValues = [0]


    for (let i = 0; i < rows; i++) {

        tableRowId.innerHtml += <tr className={`table-row-${rowNumber}`} id={`table-row-${rowNumber}`}></tr>
        let tableDataId = document.getElementById(`table-data-${rowNumber}`)

        for (let j = 0; j < cols; j++) {
            tableDataId.innerHtml += <td className={`tData-${cellValues[cellValues.length - 1]}`}>
                <div className={`tData-div-${cellValues[cellValues.length - 1]}`}>
                    <p>{`Num-${cellValues[cellValues.length - 1]}`}</p>
                </div>
            </td>

            cellValues.push((cellValues.length - 1) + 1)
        }

        rowNumber++
    }

}