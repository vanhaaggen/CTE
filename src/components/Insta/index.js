import React, { useState, useEffect } from 'react'
import logic from '../../logic'

import './style.sass'

export default function (prop) {
    const [images, setImages] = useState()

    useEffect(() => {
        (async () => {
            try {

                const response = await logic.instaFetch()

                setImages(response)

            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <>
            <section className="insta-container">
                <p className="insta-title">El nostre Insta</p>
                <div className="insta-images-container">
                    {images && images.map((item, index) => (
                        <div className="insta-thumb-container" key={`insta-${index}`}>
                            <img className="insta-thumb-container__image" src={item} alt="" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}