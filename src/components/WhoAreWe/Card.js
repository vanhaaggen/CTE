import React from 'react'
import ToogleImgFormat from '../ToogleImgFormat'

export default function ({ webPImg, fallBackImg, text1, text2 }) {

    return (
        <div className="who-divisor__coach-container">

            <div className="who-divisor__coach">

                <ToogleImgFormat
                    webPImg={webPImg}
                    fallBackImg={fallBackImg}
                    format={"png"}
                    className={"who-divisor__coach--image"}
                    altMssg={"coach"}
                />

                <div className="who-divisor__coach-description-container">
                    <div className="who-divisor__coach-description-container--line"></div>
                    <p className="who-divisor__coach-description-container--textBig">{text1}</p>
                    <p className="who-divisor__coach-description-container--textSmall">{text2}</p>
                </div>
            </div>

        </div>
    )
}