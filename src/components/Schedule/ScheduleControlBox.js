import React from 'react'

export default function ScheduleControlBox({ activity, handleControlBox }) {
    return (

        <div className="schedule-menu__container ct-container" onClick={handleControlBox}>
            <p>{activity}</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round" ></span>
            </label>
        </div>
    )
}