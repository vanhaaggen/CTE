import React, { Component } from 'react'
import { I18NContext, I18NConsumer } from './i18ncontext'

import './styles/WhatWeDo.sass'


class WhatWeDo extends Component {
    render() {
        return (
            <>
                <I18NConsumer>
                    {({ text, lang }) => (
                        <div className="container-what" id="what">
                            <h2>{text[`${lang}`].navbar.what}</h2>
                        </div>
                    )}
                </I18NConsumer>
            </>
        )
    }
}

export default WhatWeDo