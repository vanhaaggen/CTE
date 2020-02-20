import React from 'react'
import SectionTitle from '../SectionTitle'
import Card from './Card'
import { Animated } from 'react-animated-css'
import './style.sass'

import coach1 from '../../images/coach1.png'
import coach2 from '../../images/coach2.png'


export default function (props) {
    const { text, lang } = props


    return (

        <section className="who-container-content">

            <SectionTitle props={props} section={"who"} padding={"0 0 4rem 0"} />

            <div className="who-wrapp">
                <Animated className="who-wrapp__anim"
                    animationIn="bounceInLeft"
                    animationInDelay={500}
                    isVisible={true}>

                    <div className="divisor-background back-border-img-left">
                        <div className="divisor-wave1">
                            <div className="who-divisor">

                                <article className="who-divisor__paragraph">
                                    <p className='who-divisor__paragraph--size'>{text[`${lang}`].sectionWho.par1}</p>
                                    <p className='who-divisor__paragraph--size'>{text[`${lang}`].sectionWho.par2}</p>
                                </article>

                                <Card image={coach1} text1={text[`${lang}`].sectionWho.coach1.name} text2={text[`${lang}`].sectionWho.coach1.text} />

                            </div>

                        </div>
                    </div>
                </Animated>

                <Animated className="who-wrapp__anim"
                    animationIn="bounceInRight"
                    animationInDelay={1100}
                    isVisible={true}>


                    <div className="divisor-background back-border-img-right">
                        <div className="divisor-wave2">
                            <div className="who-divisor">

                                <Card image={coach2} text1={text[`${lang}`].sectionWho.coach2.name} text2={text[`${lang}`].sectionWho.coach2.text} />

                                <article className="who-divisor__paragraph par3">
                                    <q className='who-divisor__paragraph--size-par3'>{text[`${lang}`].sectionWho.par3}</q>
                                </article>

                            </div>
                        </div>
                    </div>
                </Animated>
            </div>
        </section>
    )
}