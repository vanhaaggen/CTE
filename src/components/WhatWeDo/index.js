import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import IconBox from './IconBox'
import images from "../../images"

import './style.sass'

const { icons } = images

export default function (props) {
    const { text, lang } = props


    return (<>
        <section className="what-container">

            <div className="what-content">

                <article className="what-description-wrapper">

                    <div className="what-first-paragraph whatContent">
                        {text[`${lang}`].sectionWhat.par1}
                    </div>

                    <div className="what-second-paragraph whatContent">
                        {text[`${lang}`].sectionWhat.par2}
                    </div>

                </article>

                <article className="what-stripe-container">
                    <div className="what-shape-container">

                        <div className="what-text-wrapper">
                            {text[`${lang}`].sectionWhat.benefits}
                            {text[`${lang}`].sectionWhat.benefits1}
                        </div>
                        <div className="what-blocks">
                            {icons.map((item, index) => {
                                return <IconBox key={`what-b-${index}`} text={text[`${lang}`].sectionWhat.icons[index]} image={item} />
                            })}
                        </div>

                    </div>
                </article>

                <article className="what-third-pgrph-wrapper">
                    <div className="what-third-pgrph-line-Left"></div>
                    <div className="what-third-paragraph whatContent">
                        {text[`${lang}`].sectionWhat.par3}
                    </div>
                    <div className="what-third-pgrph-line-Right"></div>
                </article>
                <article className="what-fourth-pgrph-wrapper">

                    {text[`${lang}`].sectionWhat.par4}
                    {text[`${lang}`].sectionWhat.o}
                    <Link className="contactLink"
                        activeClass="active"
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        {text[`${lang}`].sectionWhat.contactLink}
                    </Link>

                </article>

            </div>


        </section>

    </>)
}
