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

    console.log('function runs')
    for (let i = 0; i < strg.length; i++) {
        if (strg[i][0] === "#") {
            strg[i] = React.createElement('span', {
                key: [i],
                className: 'hashtag',
                style: { color: 'blue' }
            }, ` ${strg[i]}`)
        } else if (strg[i][0] === "@") {
            strg[i] = React.createElement('span', {
                key: [i],
                className: 'atTag',
                style: { color: 'purple' }
            }, ` ${strg[i]} `)
        } else {
            strg[i] = React.createElement('span', {
                key: [i]
            }, ` ${strg[i]}`)
        }
    }

    return React.createElement('p', {
        className: 'caption-text',
    }, strg)
}