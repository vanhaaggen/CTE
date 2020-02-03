import React, { useRef, useEffect } from 'react'

//custom Hook for getting previous value

export default function (value) {

    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    })
    return ref.current;
}