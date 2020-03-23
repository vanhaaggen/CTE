import React, { Route } from 'react'
import SectionLayout from '../components/SectionLayout'
import components from '../components'
import { I18NConsumer } from '../components/i18ncontext'




const { Hero, WhoAreWe, Instalation, WhatWeDo, Schedule, Price, Insta, Contact } = components


export default function Home(props) {
    return (
        <>
            <I18NConsumer>
                {({ text, lang }) => (
                    <main className="Home">
                        <Hero />
                        <SectionLayout section={'who'} text={text} lang={lang} content={<WhoAreWe text={text} lang={lang} />} />
                        <SectionLayout section={'what'} text={text} lang={lang} content={<WhatWeDo text={text} lang={lang} />} />
                        <SectionLayout section={'schedule'} text={text} lang={lang} content={<Schedule text={text} lang={lang} />} />
                        <SectionLayout section={'price'} text={text} lang={lang} content={<Price text={text} lang={lang} />} />
                        <Instalation text={text} lang={lang} />
                        <Insta text={text} lang={lang} />
                        <SectionLayout section={'contact'} text={text} lang={lang} content={<Contact text={text} lang={lang} />} />
                    </main>

                )}
            </I18NConsumer>
        </>
    )
}
