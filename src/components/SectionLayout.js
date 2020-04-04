import React from 'react'
import SectionTitle from './SectionTitle'
import './SectionStyle.sass'


export default function SectionLayout(props) {
    const { section, content } = props

    return (
        <>
            <section className={`${section}-background`} >

                <SectionTitle props={props} section={section} />
                <div className={`container-${section}`}>{content}</div>

            </section>
        </>
    )

}

