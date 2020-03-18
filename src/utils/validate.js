import React from 'react'

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
/**
 * validate form inputs
 * @param {string} honey
 * @param {string} name
 * @param {string} email
 * 
 * @returns {Error}
 */
export default function (honey, name, email) {
    let errors = ''

    if (honey) throw new Error(`honeypot is being looted`)

    if (!name.trim()) errors += 'name is empty or blank'

    if (!EMAIL_REGEX.test(email)) {
        if (errors) errors += '\n'
        errors += `email with value ${email} is not a valid e-mail`
    }

    if (errors) throw new Error(errors)

}


