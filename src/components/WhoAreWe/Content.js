import React from 'react'
import { I18NConsumer } from '../i18ncontext'

export default function Content() {
    return <>
        <I18NConsumer>
            {({ text, lang }) => (
                <div>
                    <article>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit euismod proin, mauris himenaeos praesent posuere vehicula nascetur ante interdum velit pellentesque, neque nam nulla sodales sed felis cum molestie. Metus ullamcorper tortor magna commodo mauris enim suscipit consequat, bibendum nec nascetur lectus praesent facilisi. Montes ornare ad orci lobortis bibendum, neque diam eget scelerisque cursus condimentum, donec semper mauris accumsan.</p>
                    </article>
                </div>

            )}
        </I18NConsumer>

    </>
}