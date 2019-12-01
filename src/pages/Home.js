import React from 'react'

import components from '../components'


import './styles/Home.sass'

const { Header, WhoAreWe, WhatWeDo, Schedule, Contact } = components


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
