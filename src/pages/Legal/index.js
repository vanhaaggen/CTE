import React from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import { I18NConsumer } from '../../components/i18ncontext'

import './style.sass'

export default function () {
    return (
        <I18NConsumer>
            {({ text, lang }) => (
                <>
                    <ScrollToTop />
                    <div className="legal-container">
                        <h2>{text[`${lang}`].navbar.legal}</h2>
                    </div>
                </>
            )}
        </I18NConsumer>
    )
}