import React from 'react'

import './style.sass'

export default function Modal({ handleClose, show, image }) {


    return (
        <div className="modal" style={{
            display: `${show ? "block" : "none"}`
        }}>
            <div className="modal__main">
                <img className="img-big" src={image} alt=" " />
            </div>
            <div className="modal-close">
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}