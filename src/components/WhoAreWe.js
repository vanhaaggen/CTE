import React, { Component } from 'react'
import { I18NConsumer } from './i18ncontext'

import './styles/WhoAreWe.sass'


class WhoAreWe extends Component {
    render() {
        return (
            <>

                <I18NConsumer>
                    {({ text, lang }) => (
                        <div className="container-who" id="who">
                            <h2>{text[`${lang}`].navbar.who}</h2>
                        </div>
                    )}
                </I18NConsumer>
            </>
        )
    }
}

export default WhoAreWe