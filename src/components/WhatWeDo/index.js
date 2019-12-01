import React, { useEffect, useState } from 'react'
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
                if (isInViewPort('#what')) setIsInView(true)
            })
        }

        watchScroll()
        //remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", function (event) {
                isInViewPort('#what')
            })
        }
    })


    return (
        <>
            <I18NConsumer>
                {({ text, lang }) => (
                    <div className="container-what" id="what">
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

