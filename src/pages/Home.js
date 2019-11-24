import React from 'react'
import { Link } from 'react-router-dom'


import './styles/Home.sass'

import Header from '../components/Header'
import WhoAreWe from '../components/WhoAreWe'
import WhatWeDo from '../components/WhatWeDo'
import Schedule from '../components/Schedule'




export default function Home() {
    return (
        <>
            <div className="Home">
                <Header />
                <WhoAreWe />
                <WhatWeDo />
                <Schedule />
            </div>
        </>
    )
}
