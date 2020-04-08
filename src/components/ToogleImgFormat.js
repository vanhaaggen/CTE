import React from 'react'

export default function (props) {
    return (
        <picture>
            <source srcSet={props.webPImg} type="image/webp" />
            <source srcSet={props.fallBackImg} type={`image/${props.format}`} />
            <img className={props.className} src={props.fallBackImg} alt={props.altMssg} />
        </picture>
    )
}