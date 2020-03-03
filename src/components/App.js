import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import components from './index'


import text from '../text'
import { I18NProvider } from './i18ncontext'
import { faWindows } from '@fortawesome/free-brands-svg-icons'

const { Navbar, Footer } = components

function App() {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'CAT')


    const handleLang = (lang) => {
        setLanguage(lang)
        localStorage.setItem('lang', lang)
    }

    /**
     * check for iOs browser touch events. 
     * If present, cursor is set to pointer so it recognizes click events.
     */
    useEffect(() => {
        if ('ontouchstart' in document.documentElement) {
            document.body.style.cursor = 'pointer';
        }
    }, [])

    /**
    * starts animations after page has loaded.
    */
    useEffect(() => {
        function showPage() {
            document.body.classList.remove('js-loading');
        }

        document.body.classList.add('js-loading');

        window.addEventListener("load", showPage);

        return () => {
            window.removeEventListener("load", showPage)
        }
    })

    return <>
        <BrowserRouter>
            <I18NProvider value={{ text: text, lang: language }}>
                <Navbar handleLang={handleLang} />
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
                <Footer />
            </I18NProvider>
        </BrowserRouter>
    </>
}

export default App

//para pasar props en React Router utilizamos el prop de render en vez del de component.
//este accepta una inline function sin montar y desmontar el componente constantemente.
//<Route exact path='/' render={(props) => <Home handleLang={handleLang}/>}