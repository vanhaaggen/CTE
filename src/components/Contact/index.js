import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logic from '../../logic'


import './style.sass'

import form from '../../resource/form.pdf'

export default function (props) {
    const { text, lang } = props
    const [sent, setSent] = useState(false)
    const [honey, setHoney] = useState()
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    useEffect(() => {
        if (honey) {
            document.querySelector('.contact-button').disabled = true
        } else {
            document.querySelector('.contact-button').disabled = false
        }
    }, [honey])


    const handleSendEmail = async (eathoneybitch, name, email, userMessage) => {
        try {
            setLoader(true)
            await logic.sendMail(eathoneybitch, name, email, userMessage)
            setLoader(false)
            setSent(true)

        } catch ({ message }) {
            setLoader(false)
            if (message === "Failed to fetch" || message === "honeypot is being looted") {
                setError(true)

            } else {
                const messageArr = message.split('\n')
                setErrorMessage(messageArr)
            }
        }
    }

    const handleBackToForm = () => {
        setError(false)
        setSent(false)
        setErrorMessage(null)
    }

    const handleChange = event => {
        setHoney(event.target.value)
    }

    return (
        <>
            <div className="contact-container">

                <section className="contact-content">
                    <div className="contact-content--left-size">
                        {!sent && !loader && !error && <>
                            <div className="form-container">
                                <div className="title-wrap">
                                    <h2 className="title-h2">{text[`${lang}`].sectionContact.title1}</h2>
                                    <p className="title-p">{text[`${lang}`].sectionContact.title2}</p>
                                </div>

                                <form className="contact-form" onSubmit={event => {
                                    event.preventDefault()

                                    const { target: { eathoneybitch: { value: eathoneybitch }, name: { value: name }, email: { value: email }, userMessage: { value: userMessage } } } = event

                                    handleSendEmail(eathoneybitch, name, email, userMessage)


                                }}>
                                    <label htmlFor="eathoneybitch"></label>
                                    <input type="text" name="eathoneybitch" onChange={handleChange} hidden />

                                    <label htmlFor="name" className="label-placeholder"></label>
                                    <input type="text" name="name" id="name" className="input-field" placeholder={text[`${lang}`].sectionContact.name} />
                                    <label htmlFor="email" className="label-placeholder"></label>
                                    <input type="email" name="email" id="email" className="input-field" placeholder={text[`${lang}`].sectionContact.email} />
                                    <label htmlFor="userMessage" className="label-placeholder"></label>
                                    <textarea name="userMessage" id="userMessage" rows="5" className="textarea" placeholder={text[`${lang}`].sectionContact.message}></textarea>

                                    <div className="disclaimer-block">
                                        <p>{text[`${lang}`].sectionContact.legal} <Link className="disclaimer-block--mod" to="/privacy">{text[`${lang}`].navbar.privacy}</Link></p>
                                    </div>

                                    <div className="bttn-wrap">
                                        <div>{errorMessage && errorMessage.map(error => (
                                            <p className="error-message">{error}</p>
                                        ))}</div>
                                        <button className="contact-button">{text[`${lang}`].sectionContact.send}</button>
                                    </div>
                                </form>
                            </div>
                        </>}

                        {loader && <>
                            <div className="contact-message-wrap">
                                <p className="contact-mssg-p">{text[`${lang}`].sectionContact.sending}</p>
                                <div className="loadingio-spinner-bars-gxjsvz4su5i">
                                    <div className="ldio-8wnefg9gpr5">
                                        <div className="ldio-first-bar">✉</div><div className="ldio-second-bar">✉</div><div className="ldio-third-bar">✉</div><div className="ldio-fourth-bar">✉</div>
                                    </div>
                                </div>
                            </div>
                        </>}

                        {sent && <>
                            <div className="sended-mssg-container">
                                {text[`${lang}`].sectionContact.sent}
                                <div className="sentBackBttn-container">
                                    <p className="sentBackBttn" onClick={handleBackToForm}><span aria-label="emoji" role="img">👈</span>{text[`${lang}`].sectionContact.goback}</p>
                                </div>
                            </div>
                        </>}

                        {error && <>
                            <div className="error-container">
                                <p>Ups! <span aria-label="emoji" role="img">😅</span></p>
                                {text[`${lang}`].sectionContact.error}
                                <p className="errorBackBttn" onClick={handleBackToForm}>{text[`${lang}`].sectionContact.tryagain}<span aria-label="emoji" role="img">🤞</span></p>
                            </div>
                        </>}
                    </div>
                    <div className="contact-content--right-size">
                        <div className="download-container">
                            <div className="download-container__text-wrap">
                                <p className="download-container__text-wrap--text1">{text[`${lang}`].sectionContact.downloadtitle}</p>
                                <p className="download-container__text-wrap--text2">{text[`${lang}`].sectionContact.downloadtitle1}</p>
                                <p className="em-fi-dwn">
                                    <span aria-label="emojis" className="emoji-finger-down" role="img">👇</span>
                                    <span aria-label="emojis" className="emoji-finger-down" role="img">👇</span>
                                    <span aria-label="emojis" className="emoji-finger-down" role="img">👇</span>
                                    <span aria-label="emojis" className="emoji-finger-down" role="img">👇</span>
                                    <span aria-label="emojis" className="emoji-finger-down" role="img">👇</span>
                                </p>
                            </div>
                            <a className="download-bttn" href={form} download>Download Form</a>
                        </div>
                    </div>

                </section>

            </div >
        </>
    )
}