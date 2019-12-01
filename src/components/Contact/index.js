import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { I18NConsumer } from '../i18ncontext'
import { Animated } from 'react-animated-css'
import isInViewPort from '../../utils/isInViewport'
import Content from './content'

import './style.sass'



export default function (props) {
    const [isInView, setIsInView] = useState(false)



    useEffect(() => {
        function watchScroll() {
            window.addEventListener('scroll', function (event) {
                if (isInViewPort('#contact')) setIsInView(true)
            })
        }

        watchScroll()
        //remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", function (event) {
                isInViewPort('#contact')
            })
        }
    })
    return (
        <>
            <I18NConsumer>
                {({ text, lang }) => (
                    <div className="container-contact" id="contact">
                        {isInView && <>
                            <Animated
                                animationIn="fadeIn"
                                animationInDelay={300}
                                isVisible={true}>
                                <Content text={text} lang={lang} />
                            </Animated>
                        </>}
                    </div>
                )}
            </I18NConsumer>

        </>
    )
}
