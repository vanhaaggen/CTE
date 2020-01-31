import React from 'react'
/**
     * Creates Schedule table and load dinamicaly content from the text prop.
     * 
     * @param {number} rows
     * @param {number} cols
     * 
     * @returns {Array}
     */

const createTable = (text, rows, cols) => {
    let table = []
    let cellId = [0]

    for (let i = 0; i < rows; i++) {
        let children = []
        for (let j = 0; j < cols; j++) {
            children.push(
                <td key={j}
                    className={`table-data-child cell${cellId[cellId.length - 1]}`}>

                    {text[`row${i + 1}`][`cell${cellId[cellId.length - 1]}`]}

                </td>)

            cellId.push((cellId.length - 1) + 1)
        }

        table.push(<tr key={i} className={`row${i + 1}`}>{children}</tr>)
    }

    return table
}

export default createTable