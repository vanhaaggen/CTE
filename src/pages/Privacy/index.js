import React from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import { I18NConsumer } from '../../components/i18ncontext'
import { Link } from 'react-router-dom'
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
                            <h2 className="legals-title">{text[`${lang}`].navbar.privacy}</h2>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.data}</h3>
                                {text[`${lang}`].privacy.data} <Link className="toLegal" to="/legal">{text[`${lang}`].navbar.legal}</Link>
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.normativa}</h3>
                                {text[`${lang}`].privacy.normativa.p1}
                                {text[`${lang}`].privacy.normativa.p2}
                                {text[`${lang}`].privacy.normativa.p3}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.finalidad}</h3>
                                {text[`${lang}`].privacy.finalidad.p1}
                                {text[`${lang}`].privacy.finalidad.p2}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.plazo}</h3>
                                {text[`${lang}`].privacy.plazo}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.legitim}</h3>
                                {text[`${lang}`].privacy.legitim}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.consentdata}</h3>
                                {text[`${lang}`].privacy.consentdata}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.category}</h3>
                                {text[`${lang}`].privacy.category}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.medidas}</h3>
                                {text[`${lang}`].privacy.medidas}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.cesion}</h3>
                                {text[`${lang}`].privacy.cesion}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.derechos}</h3>
                                {text[`${lang}`].privacy.derechos.p1}
                                {text[`${lang}`].privacy.derechos.p2}
                            </article>

                            <article>
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.como}</h3>
                                {text[`${lang}`].privacy.como}
                            </article>

                            <article className="legal-bottom">
                                <h3 className="legals-h3">{text[`${lang}`].privacy.titles.consent}</h3>
                                {text[`${lang}`].privacy.consent}
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
