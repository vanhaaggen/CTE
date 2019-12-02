import React, { useEffect, useState } from 'react'
import { Animated } from 'react-animated-css'
import isInViewPort from '../utils/isInViewport'


import './SectionStyle.sass'



export default function SectionLayout(props) {
    const [isInView, setIsInView] = useState(false)
    const { section, content } = props


    useEffect(() => {
        function watchScroll() {
            window.addEventListener('scroll', function (event) {
                if (isInViewPort(`#${section}`)) setIsInView(true)
            })
        }

        watchScroll()
        //remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", function (event) {
                isInViewPort(`#${section}`)
            })
        }
    })


    return (
        <>
            <div className={`container-${section}`} id={section}>
                {isInView && <>
                    <Animated
                        animationIn="fadeIn"
                        animationInDelay={300}
                        isVisible={true}>
                        {content}
                    </Animated>
                </>}
            </div>
        </>
    )

}

