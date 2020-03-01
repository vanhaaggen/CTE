import React, { useEffect } from 'react'
/**
 * Component that alerts if you click outside of it
 * @param {*} props 
 */
export default function (props) {

    /**
     * Alert if clicked outside element
     */
    function handleClickOutside(event) {
        if (props.forwardedRef.current && !props.forwardedRef.current.contains(event.targe)) {
            props.handleOutsideAlert(true)
        }
    }

    useEffect(() => {
        //Bind the event listener
        document.addEventListener('click', handleClickOutside);
        //Unbind the event listener on clean up
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    })

    return <>
        <div ref={props.forwardedRef}>{props.children}</div>
    </>
}


