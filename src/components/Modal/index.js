import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowCircleRight, faTimes, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


import './style.sass'

export default function Modal({ handleClose, handleLeft, handleRight, show, image }) {


    return (
        <div className="modal" style={{
            display: `${show ? "block" : "none"}`
        }}>
            <div className="modal__main">
                <div className="modal__image">
                    <img className="img-big" src={image} alt=" " />
                </div>
                <div className="control-arrow">
                    <FontAwesomeIcon className="left" onClick={handleLeft} icon={faArrowCircleLeft} />
                    <FontAwesomeIcon className="right" onClick={handleRight} icon={faArrowCircleRight} />
                </div>
            </div>

            <FontAwesomeIcon className="modal-close" onClick={handleClose} icon={faTimes} />

        </div>


    )
}