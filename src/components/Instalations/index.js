import React, { useEffect, useState } from 'react'
import Modal from '../Modal'
import images from '../../images'

import './style.sass'

const { instalation } = images

export default function (props) {
    const [image, setImage] = useState()
    const [modal, setModal] = useState(false)


    return (
        <>
            <Modal show={modal} image={image} handleClose={() => setModal(false)} />

            <section className="pic-container">
                <p className="install-title">Les Instal·lacions</p>

                <div className="img-wrapper">

                    {instalation.map((item, index) => (
                        <div className="image" style={{
                            width: `${document.documentElement.clientWidth / instalation.length}%`,
                            height: "100%",
                            backgroundImage: `url(${item})`
                        }} key={index}
                            onClick={() => {
                                setImage(item)
                                setModal(true)

                            }}
                        ></div>
                    ))}
                </div>
            </section>
        </>
    )
}