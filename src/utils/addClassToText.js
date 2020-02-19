import React from 'react'

const INSTA_HASHTAG_URL = "https://www.instagram.com/explore/tags/"
const INSTA_ATTAG_URL = "https://www.instagram.com/"

/**
 * Iterates over a String to search for "#" and "@" and adds a classname
 * 
 * @param {string} string
 * 
 * @returns {string}
 */

export default function (string) {
    let strg = string.split(' ')

    for (let i = 0; i < strg.length; i++) {
        if (strg[i][0] === "#") {

            strg[i] = React.createElement('a', {
                key: [i],
                className: 'hashtag',
                href: `${INSTA_HASHTAG_URL}${strg[i].substring(1)}/`,
                target: 'blank',
                style: { color: 'blue' }
            }, ` ${strg[i]}`)

        } else if (strg[i][0] === "@") {

            strg[i] = React.createElement('a', {
                key: [i],
                className: 'atTag',
                href: `${INSTA_ATTAG_URL}${strg[i].substring(1)}/`,
                target: "blank",
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