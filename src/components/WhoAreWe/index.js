import React from 'react'
import { I18NConsumer } from '../i18ncontext'
import { Animated } from 'react-animated-css'
import Content from './Content'
import '../styles/WhoAreWe.sass'



export default function () {

    return (
        <>

            <I18NConsumer>
                {({ text, lang }) => (
                    <div className="container-who" id="who">
                        <h2>{text[`${lang}`].navbar.who}</h2>
                        <Content />
                    </div>
                )}
            </I18NConsumer>
        </>
    )

}

