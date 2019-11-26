import React from 'react'



import './styles/Home.sass'

import Header from '../components/Header'
import WhoAreWe from '../components/WhoAreWe'
import WhatWeDo from '../components/WhatWeDo'
import Schedule from '../components/Schedule'
import Contact from '../components/Contact'



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
