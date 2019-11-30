import React from 'react'

import components from '../components'


import './styles/Home.sass'

import Header from '../components/Header'
import Schedule from '../components/Schedule'
import Contact from '../components/Contact'



const { WhoAreWe, WhatWeDo } = components




export default function Home() {
    return (
        <>
            <div className="Home">
                <Header />
                <WhoAreWe />
                <WhatWeDo />
                <Schedule />
                <Contact />

            </div>
        </>
    )
}
