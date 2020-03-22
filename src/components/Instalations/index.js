import React, { useState } from 'react'
import Modal from '../Modal'
import images from '../../images'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import './style.sass'

const { instalation } = images

export default function (props) {
    const [isModal, setIsModal] = useState(false)
    const [index, setIndex] = useState()


    // const handleLeft = () => {
    //     return index <= 0 ? setIndex(instalation.length - 1) : setIndex(index - 1)
    // }

    // const handleRight = () => {
    //     return index >= instalation.length - 1 ? setIndex(0) : setIndex(index + 1)
    // }
    const responsive = {
        0: { items: 1 },
        1024: { items: 2 },
        1800: { items: 3 }
    }



    const Images = ({ image }) => {
        return (
            <div className="images-container">
                <img className="carousel-images" src={image} alt=" " />
            </div>
        )
    }
    return (
        <>
            {/* <Modal show={isModal}
                image={instalation[index]} handleClose={() => setIsModal(false)}
                handleLeft={() => handleLeft()}
                handleRight={() => handleRight()} /> */}

            <section className="pic-container">

                <div className="carousel-container">
                    <AliceCarousel className="carousel"
                        items={instalation.map(item => (<Images image={item} />))}
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