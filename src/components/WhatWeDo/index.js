import React, { useState, useEffect } from 'react'
import logic from '../../logic'
import './style.sass'

export default function (props) {
    const [widthState, setWidthState] = useState({ fontSize: "2rem" })
    const { text, lang } = props
    // const [nasaPic, setNasaPic] = useState(undefined)

    useEffect(() => {
        setWidthState({ fontSize: "6rem" })
    }, [])

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const nasaData = await logic.nasaApi()

    //             setNasaPic(nasaData)

    //         } catch (error) {
    //             console.log(error)
    //         }
    //     })()
    // }, [])


    return (<>
        <div className="what-container">
            <div style={{
                fontSize: widthState.fontSize,
                color: "#4577f6",
                fontWeight: "800",
                transition: "1s linear",
                paddingRight: "4rem"
            }}>
                <p className=" what-title section-title-wrapper">{text[`${lang}`].navbar.what.toUpperCase()}</p>
            </div>


            <section className="what-content">
                <article className="what-description-wrapper">

                    <div className="what-first-para-wrap whatContent">
                        {text[`${lang}`].sectionWhat.par1}
                    </div>

                    <div className="what-second-para-wrap whatContent">
                        {text[`${lang}`].sectionWhat.par2}
                    </div>

                    <div className="what-third-para-wrap whatContent">
                        {text[`${lang}`].sectionWhat.par3}
                    </div>

                </article>
            </section>

        </div>

    </>)
}
{/* <div className="nasa-container">
                {nasaPic && nasaPic.photos.map((pic, i) => {
                    return <>
                        <div className="div" key={`nasa-${i}`}>
                            <img className="nasa-img" src={pic.img_src} alt="mars rove" />
                        </div>
                    </>
                })}
            </div> */}