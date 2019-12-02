import React from 'react'
import SectionLayout from '../components/SectionLayout'
import components from '../components'
import { I18NConsumer } from '../components/i18ncontext'


import './styles/Home.sass'

const { Header, WhoAreWe, WhatWeDo, Schedule, Contact } = components


export default function Home(props) {
    return (
        <>
            <I18NConsumer>
                {({ text, lang }) => (
                    <div className="Home">
                        <Header />
                        <SectionLayout section={'who'} content={<WhoAreWe text={text} lang={lang} />} />
                        <SectionLayout section={'what'} content={<WhatWeDo text={text} lang={lang} />} />
                        <SectionLayout section={'schedule'} content={<Schedule text={text} lang={lang} />} />
                        <SectionLayout section={'contact'} content={<Contact text={text} lang={lang} />} />
                    </div>
                )}
            </I18NConsumer>
        </>
    )
}
