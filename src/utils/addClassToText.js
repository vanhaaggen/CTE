import React from 'react'

/**
 * Iterates over a String to search for "#" and "@" and adds  a classname
 * 
 * @param {string} param 
 * 
 * @returns {string}
 */

export default function (param) {
    let strg = param.split(' ')


    for (let i = 0; i < strg.length; i++) {
        if (strg[i][0] === "#") {
            strg[i] = <span className="hashtag">{strg[i]}</span>
        } else if (strg[i][0] === "@") {
            strg[i] = <span className="atTag">{strg[i]}</span>
        }
    }

    return strg.join(' ')
}