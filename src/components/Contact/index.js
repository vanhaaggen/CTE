import React, { useState, useEffect } from 'react'
import logic from '../../logic'


import './style.sass'

export default function (props) {
    const [widthState, setWidthState] = useState({ fontSize: "2rem" })
    const [sent, setSent] = useState(false)
    const [loader, setLoader] = useState(false)
    const { text, lang } = props

    useEffect(() => {
        setWidthState({ fontSize: "6rem" })
    }, [])


    const handleSendEmail = async (name, email, userMessage) => {
        try {
            const response = await logic.sendMail(name, email, userMessage)
            if (response === 'OK') {
                setLoader(false)
                setSent(true)
            } else {
                setSent(false)
            }
        } catch ({ message }) {
            console.log(message)
        }
    }

    return (

        <>

            <div className="contact-container">
                <div style={{
                    fontSize: widthState.fontSize,
                    color: "#4577f6",
                    fontWeight: "800",
                    transition: "1s linear",
                    paddingRight: "4rem"
                }}>
                    <p className=" contact-title section-title-wrapper">{text[`${lang}`].navbar.contact.toUpperCase()}</p>
                </div>
                <section className="contact-content">
                    {!sent && !loader && <>
                        <div className="title-wrap">
                            <h2 className="title-h2">{text[`${lang}`].sectionContact.title1}</h2>
                            <p className="title-p">{text[`${lang}`].sectionContact.title2}</p>
                        </div>
                        <form className="contact-form" onSubmit={event => {
                            event.preventDefault()

                            const { target: { name: { value: name }, email: { value: email }, userMessage: { value: userMessage } } } = event

                            handleSendEmail(name, email, userMessage)
                            setLoader(true)

                        }}>
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
                        {text[`${lang}`].sectionContact.sent}
                    </>}
                </section>

            </div>
        </>
    )
}