import React from 'react'


export default function ({ image, text1, text2 }) {

    return (
        <div className="who-divisor__coach-container">

            <div className="who-divisor__coach">

                <img className="who-divisor__coach--image" src={image} alt="coach" />

                <div className="who-divisor__coach-description-container">
                    <div className="who-divisor__coach-description-container--line"></div>
                    <p className="who-divisor__coach-description-container--textBig">{text1}</p>
                    <p className="who-divisor__coach-description-container--textSmall">{text2}</p>
                </div>
            </div>

        </div>
    )
}