import React from 'react'
import SectionTitle from '../SectionTitle'
import IconBox from './IconBox'
import images from "../../images"

import './style.sass'

const { icons } = images

export default function (props) {
    const { text, lang } = props


    return (<>
        <section className="what-container">

            <SectionTitle props={props} section={"what"} padding={"0 0 4rem 0"} />

            <div className="what-content">

                <article className="what-description-wrapper">

                    <div className="what-first-paragraph whatContent">
                        {text[`${lang}`].sectionWhat.par1}
                    </div>

                    <div className="what-second-paragraph whatContent">
                        {text[`${lang}`].sectionWhat.par2}
                    </div>

                </article>

                <div className="what-stripe-container">
                    <div className="what-shape-container">

                        <div className="what-text-wrapper">
                            <p className="what-text-wrapper--text1">Els beneficis d'entrenar amb nosaltres?</p>
                            <p className="what-text-wrapper--text2"><i>guanyaras en...</i></p>
                        </div>

                        <div className="what-blocks">
                            {icons.map((item, index) => {
                                return <IconBox key={`what-b-${index}`} text={text[`${lang}`].sectionWhat.icons[index]} image={item} />
                            })}
                        </div>
                    </div>
                </div>

                <article className="what-third-pgrph-wrapper">
                    <div className="what-third-pgrph-line-Left"></div>
                    <div className="what-third-paragraph whatContent">
                        {text[`${lang}`].sectionWhat.par3}
                    </div>
                    <div className="what-third-pgrph-line-Right"></div>
                </article>

            </div>


        </section>

    </>)
}
