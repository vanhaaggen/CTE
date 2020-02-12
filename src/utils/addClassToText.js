import React from 'react'

/**
 * Iterates over a String to search for "#" and "@" and adds  a classname
 * 
 * @param {string} string
 * 
 * @returns {string}
 */

export default function (string) {
    let strg = string.split(' ')


    for (let i = 0; i < strg.length; i++) {
        if (strg[i][0] === "#") {
            strg[i] = React.createElement('span', {
                className: 'hashtag',
                style: { color: 'blue' }
            }, ` ${strg[i]}`)
        } else if (strg[i][0] === "@") {
            strg[i] = React.createElement('span', {
                className: 'atTag',
                style: { color: 'purple' }
            }, ` ${strg[i]} `)
        } else {
            strg[i] = ` ${strg[i]}`
        }
    }

    return React.createElement('p', {
        className: 'caption-text',
    }, strg)
}