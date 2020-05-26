import React, { useEffect, useState } from 'react'
import images from '../../images'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import ToogleImgFormat from '../ToogleImgFormat'

import './style.sass'



export default function () {
    const [isLessThan, setIsLessThan] = useState(false)
    const { instalation: { webp, noWebp } } = images

    useEffect(() => {
        function handleIsLessThan(event) {
            if (event.target.innerWidth < 540) {
                return setIsLessThan(true)
            } else {
                return setIsLessThan(false)
            }
        }
        window.addEventListener('resize', handleIsLessThan)

        return () => {
            window.removeEventListener('resize', handleIsLessThan)
        }
    }, [])




    const responsive = {
        600: { items: 1 },
        980: { items: 2 },
        1400: { items: 3 },
    }

    const stagePadding = function () {
        if (!isLessThan) {
            return {
                paddingLeft: 50,
                paddingRight: 50
            }
        } else {
            return
        }
    };

    const Images = ({ image, idx }) => {
        return (
            <div className="images-container">
                <picture>
                    <source srcSet={image} type="image/webp" />
                    <source srcSet={noWebp[idx]} type="image/jpeg" />
                    <img className="carousel-images" src={noWebp[idx]} alt="Gym equipment" />
                </picture>
            </div>
        )
    }


    return (
        <>
            <section className="pic-container">

                <div className="carousel-container">
                    <AliceCarousel className="carousel"
                        items={webp.map((item, index) => (<Images image={item} idx={index} />))}
                        responsive={responsive}
                        fadeOutAnimation={true}
                        mouseTrackingEnabled={true}
                        stagePadding={stagePadding()}
                    />
                </div>

            </section>
        </>
    )
}