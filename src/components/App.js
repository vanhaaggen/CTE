import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'

import SectionWipes2 from '../components/SectionWipes2'
import Layout from '../components/Layout'



function App() {
    return <>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>

                {/* <SectionWipes2 /> */}

            </Layout>
        </BrowserRouter>
    </>
}

export default App