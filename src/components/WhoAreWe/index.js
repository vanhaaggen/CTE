import React from 'react'
import Card from './Card'

import './style.sass'

import images from '../../images'


const { coaches: [gerard, cristhian, gerardWebp, cristhianWebP] } = images


export default function (props) {
    const { text, lang } = props
    return (
        <section className="who-container-content">

            <div className="who-wrapp">

                
            <article className="who-divisor__paragraph">
                                {text[`${lang}`].sectionWho.par1}
                                {text[`${lang}`].sectionWho.par2}
                            </article>

                <div className="divisor-background back-border-img-right">
                    <div className="divisor-wave2">
                        <div className="who-divisor">

                            <Card
                                webPImg={gerardWebp}
                                fallBackImg={gerard}
                                text1={text[`${lang}`].sectionWho.coach2.name}
                                text2={text[`${lang}`].sectionWho.coach2.text}
                            />

                            <article className="who-divisor__paragraph par3">
                                <q className='who-divisor__paragraph--size-par3'>{text[`${lang}`].sectionWho.par3}</q>
                            </article>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}