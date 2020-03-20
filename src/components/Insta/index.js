import React, { useState, useEffect } from 'react'
import logic from '../../logic'
import addClassToText from '../../utils/addClassToText'

import './style.sass'

export default function (props) {
    const { lang, text } = props
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
                <div className='title-wrapp'>
                    <p className="insta-pretitle">{text[`${lang}`].sectionInsta.pretitle}<span role="img">👇</span></p>
                    <p className="insta-title">{text[`${lang}`].sectionInsta.title}</p>
                </div>
                <div className="insta-caption-container">
                    <div className="big-caption-container">
                        {firstImage ? <div className="big-caption-container__img-cont">
                            <img className="big-caption-container__img-cont--img" src={firstImage.image} alt=" " />
                            <div>
                                {addClassToText(firstImage.caption)}
                            </div>
                        </div>
                            : <div>
                                <p>No image available</p>
                            </div>
                        }
                    </div>

                    <div className="small-caption-container">
                        {data && data.map((item, index) => (
                            <>
                                <div className="small-caption-container__img-cont" key={`insta-${index}`} onClick={() => handleOnClick(item, index)}>
                                    <img className="small-caption-container__img-cont--img" src={item.image} alt=" " />
                                </div>
                            </>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}