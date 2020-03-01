import React, { useState } from 'react'
import Modal from '../Modal'
import images from '../../images'

import './style.sass'

const { instalation } = images

export default function (props) {
    const [isModal, setIsModal] = useState(false)
    const [index, setIndex] = useState()


    const handleLeft = () => {
        return index <= 0 ? setIndex(instalation.length - 1) : setIndex(index - 1)
    }

    const handleRight = () => {
        return index >= instalation.length - 1 ? setIndex(0) : setIndex(index + 1)
    }

    return (
        <>
            <Modal show={isModal}
                image={instalation[index]} handleClose={() => setIsModal(false)}
                handleLeft={() => handleLeft()}
                handleRight={() => handleRight()} />

            <section className="pic-container">

                <div className="img-wrapper">

                    {instalation.map((item, index) => (
                        <div className="image" style={{
                            width: `${document.documentElement.clientWidth / instalation.length}%`,
                            height: "100%",
                            backgroundImage: `url(${item})`
                        }} key={index}
                            onClick={() => {
                                setIndex(index)
                                setIsModal(true)
                            }}
                        ></div>
                    ))}
                </div>
            </section>
        </>
    )
}