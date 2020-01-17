import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

export default function Carousel({ children, width, unit }) {
    const [index, setIndex] = useState(0)
    return (
        <div className="parent"
            style={{
                width: `${width}${unit}`,
            }}>
            <div className="container">
                <div className="inner"
                    style={{
                        width: `${width * children.length}${unit}`,
                        transform: `translateX(-${width * index}${unit})`

                    }}>
                    {children.map(item => (
                        <div className="item"
                            style={{
                                width: `${width}${unit}`
                            }}>
                            {item}
                        </div>
                    ))
                    }
                </div>
            </div>

            <div className="controls">
                <button className="next"
                    onClick={() => {
                        setIndex(index >= children.length - 1 ? index : index + 1)
                    }}>
                    Next
                </button>

                <button className="prev"
                    onClick={() => {
                        setIndex(index <= 0 ? index : index - 1)
                    }}>
                    Prev
                </button>
            </div>

        </div>

    )
}

Carousel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    width: PropTypes.number,
    unit: PropTypes.string,
}

Carousel.defaultProps = {
    width: 500,
    unit: 'px'
}

