import React from 'react'
import Post from './Post'
import ReactPlayer from 'react-player'
import { I18NConsumer } from '../i18ncontext'
import './style.sass'
import news from './content'

export default function News() {

    return <>
        <I18NConsumer>
            {({ text, lang }) => (
                <section className="news" id="news">
                    <h1 className='news-section-title'>{text[`${lang}`].navbar.news}</h1>

                    {news.map(post => {
                        return (
                            <Post
                                title={post.title}
                                date={post.date}
                                headline={post.headline}
                                article={post.article}
                                mediaURL={post.mediaURL}
                            />
                        )
                    })}

                </section>
            )}
        </I18NConsumer>
    </>
}