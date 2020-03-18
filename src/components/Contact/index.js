import React, { useState } from 'react'
import logic from '../../logic'


import './style.sass'

import form from '../../resource/form.pdf'

export default function (props) {

    const [sent, setSent] = useState(false)
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const { text, lang } = props



    const handleSendEmail = async (name, email, userMessage) => {
        try {
            const response = await logic.sendMail(name, email, userMessage)
            if (response === 'OK') {
                setLoader(false)
                setSent(true)
            }
        } catch ({ message }) {
            setLoader(false)
            setSent(false)
            setError(true)
            console.log(message)
        }
    }

    const handleBackToForm = () => {
        setError(false)
        setSent(false)
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

                                <form className="contact-form" name="contact" onSubmit={event => {
                                    event.preventDefault()

                                    const { target: { name: { value: name }, email: { value: email }, userMessage: { value: userMessage } } } = event

                                    handleSendEmail(name, email, userMessage)
                                    setLoader(true)

                                }}>
                                    <input type="hidden" name="form-name" value="contact" />
                                    <label htmlFor="name" className="label-placeholder"></label>
                                    <input type="text" name="name" id="name" className="input-field" placeholder={text[`${lang}`].sectionContact.name} />
                                    <label htmlFor="email" className="label-placeholder"></label>
                                    <input type="email" name="email" id="email" className="input-field" placeholder={text[`${lang}`].sectionContact.email} />
                                    <label htmlFor="userMessage" className="label-placeholder"></label>
                                    <textarea name="userMessage" id="userMessage" rows="5" className="textarea" placeholder={text[`${lang}`].sectionContact.message}></textarea>
                                    <div className="bttn-wrap">
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
                                    <p className="sentBackBttn" onClick={handleBackToForm}><span aria-label="emoji" role="img">👈</span>Torna</p>
                                </div>
                            </div>
                        </>}

                        {error && <>
                            <div className="error-container">
                                <p>Ups! <span aria-label="emoji" role="img">😅</span></p>
                                <p>Sembla que algo <b>no</b> ha anat bé...</p>
                                <p className="errorBackBttn" onClick={handleBackToForm}>torna-ho a probar <span aria-label="emoji" role="img">🤞</span></p>
                            </div>
                        </>}
                    </div>
                    <div className="contact-content--right-size">
                        <div className="download-container">
                            <div className="download-container__text-wrap">
                                <p className="download-container__text-wrap--text1">Si ja t'hem convençut !</p>
                                <p className="download-container__text-wrap--text2">descarrega't el nostre formulari d'inscripció</p>
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

            </div>
        </>
    )
}