import React, { useEffect, useState } from 'react'
import images from '../../images'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import ToogleImgFormat from '../ToogleImgFormat'

import './style.sass'

const { instalation, instalationWebP } = images

export default function ({ webp }) {
    const [instalationArr, setInstalationArr] = useState(instalationWebP)

    useEffect(() => {
        const webPImgsArr = webp ? instalationWebP : instalation
        setInstalationArr(webPImgsArr)
    }, [])


    const responsive = {
        0: { items: 1 },
        1024: { items: 2 },
        1800: { items: 3 }
    }

    const Images = ({ image }) => {
        return (
            <div className="images-container">
                <img src={image} className="carousel-images" alt="shows different gym props and items" />
            </div>
        )
    }


    return (
        <>
            <section className="pic-container">

                <div className="carousel-container">
                    <AliceCarousel className="carousel"
                        items={instalationArr.map(item => (<Images image={item} />))}
                        responsive={responsive}
                        autoPlayInterval={2000}
                        autoPlayDirection="rtl"
                        fadeOutAnimation={true}
                        mouseTrackingEnabled={true}
                    />
                </div>

            </section>
        </>
    )
}