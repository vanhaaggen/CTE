import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import components from './index'

import SectionWipes2 from '../components/SectionWipes2'


import text from '../text'
import { I18NProvider } from './i18ncontext'

const { Navbar, Footer } = components

function App() {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'CAT')


    const handleLang = (lang) => {
        setLanguage(lang)
        localStorage.setItem('lang', lang)
    }

    return <>
        <BrowserRouter>
            <I18NProvider value={{ text: text, lang: language }}>
                <Navbar handleLang={handleLang} />
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
                <Footer />

                {/* <SectionWipes2 /> */}


            </I18NProvider>
        </BrowserRouter>
    </>
}

export default App

//para pasar props en React Router utilizamos el prop de render en vez del de component.
//este accepta una inline function sin montar y desmontar el componente constantemente.
//<Route exact path='/' render={(props) => <Home handleLang={handleLang}/>}