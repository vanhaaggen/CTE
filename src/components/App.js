import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from '../pages/Home'
import components from './index'
import legalPages from '../pages'

import text from '../text'
import { I18NProvider } from './i18ncontext'


const { Navbar, Footer } = components
const { Legal, Privacy } = legalPages

export default function App(props) {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'CAT')
    const [isWebP, setIsWebP] = useState(true)

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

    /* global Modernizr */

    useEffect(() => {

        if (Modernizr.webp) {
            setIsWebP(true)
            console.info('%cWebP is supported ✅', 'color: green')
        } else {
            console.info('%cWebP is not supported in your Browser ❌', 'font-weight: bold')
        }

    }, [])


    return <>
        <BrowserRouter>
            <I18NProvider value={{ text: text, lang: language, webp: isWebP }}>
                <Navbar handleLang={handleLang} />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path="/legal" component={Legal} />
                    <Route exact path="/privacy" component={Privacy} />
                    <Route exact path="/opens21" component={() => {
                        window.location.href = "https://photos.app.goo.gl/4Xxn6FQ2qYday5GM7"
                        return null;
                    }
                    } />
                </Switch>
                <Footer />
            </I18NProvider>
        </BrowserRouter>
    </>
}



//para pasar props en React Router utilizamos el prop de render en vez del de component.
//este accepta una inline function sin montar y desmontar el componente constantemente.
//<Route exact path='/' render={(props) => <Home handleLang={handleLang}/>}