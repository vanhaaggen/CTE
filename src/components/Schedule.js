import React, { Component } from 'react'
import { I18NConsumer } from './i18ncontext'

import './styles/Schedule.sass'


class Schedule extends Component {
    render() {
        return (
            <>
                <I18NConsumer>
                    {({ text, lang }) => (
                        <div className="container-schedule" id="schedule">
                            <h2>{text[`${lang}`].navbar.schedule}</h2>
                        </div>
                    )}
                </I18NConsumer>

            </>
        )
    }
}

export default Schedule