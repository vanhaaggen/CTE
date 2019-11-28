import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { I18NConsumer } from '../i18ncontext'
import { Animated } from 'react-animated-css'
import isInViewPort from '../../utils/isInViewport'
import Content from './Content'

import '../styles/WhoAreWe.sass'



export default function () {
    const [isInView, setIsInView] = useState(false)


    useEffect(() => {
        function watchScroll() {
            window.addEventListener('scroll', function (event) {
                if (isInViewPort('#who')) setIsInView(true)
            })
        }

        watchScroll()
        //remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", function (event) {
                isInViewPort('#who')
            })
        }
    })


    return (
        <>

            <I18NConsumer>
                {({ text, lang }) => (
                    <div className="container-who" id="who">
                        {isInView && <>
                            <Animated
                                animationIn="fadeIn"
                                animationInDelay={300}
                                isVisible={true}>
                                <h2>{text[`${lang}`].navbar.who}</h2>
                                <Content />
                            </Animated>
                        </>}
                    </div>

                )}
            </I18NConsumer>
        </>
    )

}

