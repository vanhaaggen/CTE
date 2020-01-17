import React from 'react'
import Carousel from '../Carousel'

import './style.sass'

export default function (props) {
    return (
        <>
            <section className="pic-container">
                <p className="install-title">Les Instal·lacions</p>
                <Carousel>
                    <img src="https://picsum.photos/id/100/500/500" />
                    <img src="https://picsum.photos/id/200/500/500" />
                    <img src="https://picsum.photos/id/100/500/500" />
                    <img src="https://picsum.photos/id/200/500/500" />
                    <img src="https://picsum.photos/id/100/500/500" />
                    <img src="https://picsum.photos/id/200/500/500" />
                </Carousel>
            </section>
        </>
    )
}