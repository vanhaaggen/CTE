import React, { useState, useEffect } from 'react'
import logic from '../../logic'
import addClassToText from '../../utils/addClassToText'

import './style.sass'

export default function (prop) {
    const [data, setData] = useState([])
    const [firstImage, setFirstImage] = useState()


    useEffect(() => {
        (async () => {
            try {
                const response = await logic.instaFetch()
                console.log(response)
                setData(response)
                setFirstImage(response.shift())

            } catch (error) {
                console.log(error)
            }
        })()
    }, [])


    const handleOnClick = (item, index) => {
        let prev = firstImage
        setFirstImage(item)
        setData(data.map(x => x === item ? x = prev : x))
    }

    return (
        <>
            <section className="insta-container">
                <p className="insta-title">El nostre Insta</p>
                <div className="insta-caption-image-container">
                    <div className="insta-first">
                        {firstImage ? <div className="insta-first-wrap">
                            <img src={firstImage.image} alt=" " />
                            <div>
                                <p>{addClassToText(firstImage.caption)}</p>
                            </div>
                        </div>
                            : <div>
                                <p>No image available</p>
                            </div>
                        }
                    </div>

                    <div className="insta-images-container">
                        {data && data.map((item, index) => (
                            <>
                                <div className="insta-thumb-container" key={`insta-${index}`} onClick={() => handleOnClick(item, index)}>
                                    <img className="insta-thumb-container__image" src={item.image} alt=" " />
                                </div>
                            </>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}