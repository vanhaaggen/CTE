import React from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import { I18NConsumer } from '../../components/i18ncontext'
import images from '../../images'
import '../legals.sass'


export default function () {
    const { underconstruction: [gamer, underconst] } = images

    return (
        <I18NConsumer>
            {({ text, lang }) => (
                <>
                    <ScrollToTop />
                    {lang !== "EN" && <>
                        <section className="legals-container">
                            <div className="spacer"></div>
                            <h2 className="legals-title">{text[`${lang}`].navbar.legal}</h2>

                            <article>
                                {text[`${lang}`].legal.data.el1}
                                {text[`${lang}`].legal.data.el2}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].legal.title.object}</h3>
                                {text[`${lang}`].legal.object.p1}
                                {text[`${lang}`].legal.object.p2}
                                {text[`${lang}`].legal.object.p3}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].legal.title.respons}</h3>
                                {text[`${lang}`].legal.resp}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].legal.title.intelect}</h3>
                                {text[`${lang}`].legal.intelect.p1}
                                {text[`${lang}`].legal.intelect.p2}
                            </article>

                            <article className="legal-bottom">
                                <h3 className="legals-h3">{text[`${lang}`].legal.title.use}</h3>
                                {text[`${lang}`].legal.use.p1}
                                {text[`${lang}`].legal.use.p2}
                                {text[`${lang}`].legal.use.p3}
                            </article>

                        </section>
                    </>}
                    {lang === "EN" && <>
                        <section className="legal-container-EN">
                            <div className="spacer"></div>
                            <div className="underconst-block">
                                <div className="underconst-block__el">
                                    <p className="underconst-block__el--mod1">Sorry!</p>
                                    <p className="underconst-block__el--mod2">This section is currently under construction</p>
                                </div>
                                <img className="gamer" src={gamer} alt="gamer icon" />
                                <img className="underconst" src={underconst} alt="underconst icon" />
                            </div>
                        </section>
                    </>}
                </>
            )}
        </I18NConsumer>
    )
}