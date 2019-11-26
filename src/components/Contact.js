import React, { Component } from 'react'
import { I18NConsumer } from './i18ncontext'
import './styles/Contact.sass'


class Contact extends Component {
    render() {
        return (
            <>
                <I18NConsumer>
                    {({ text, lang }) => (
                        <div className="container-contact" id="contact">
                            <h2>{text[`${lang}`].navbar.contact}</h2>
                        </div>
                    )}
                </I18NConsumer>

            </>
        )
    }
}

export default Contact