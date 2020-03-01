import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


import './style.sass'

export default function Modal({ handleClose, handleLeft, handleRight, show, image }) {


    return (
        <div className="modal" style={{
            display: `${show ? "block" : "none"}`
        }}>
            <div className="modal-content">
                <img className="img-big" src={image} alt=" " />
            </div>
            <FontAwesomeIcon className="modal-close" onClick={handleClose} icon={faTimes} />
            <div className="control-box">
                <div className="control left" onClick={handleLeft}>

                </div>
                <div className="control right" onClick={handleRight} >

                </div>
            </div>


        </div>


    )
}