import React, { useEffect } from 'react'
import Post from './Post'
import AliceCarousel from 'react-alice-carousel'
import { I18NConsumer } from '../i18ncontext'
import './style.sass'
import news from './content'

export default function News() {

    const responsive = {
        2000: { items: 1 },
    }

    return <>
        <I18NConsumer>
            {({ text, lang }) => (
                <section className="news" id="news">
                    <h1 className='news-section-title'>{text[`${lang}`].navbar.news}</h1>

                    <AliceCarousel className="carousel"
                        items={news.map((post, i) => (<Post
                            key={`post-${i + 1}`}
                            title={post.title}
                            date={post.date}
                            headline={post.headline}
                            article={post.article}
                            mediaURL={post.mediaURL}
                        />))}
                        responsive={responsive}
                        fadeOutAnimation={true}
                        mouseTrackingEnabled={true}
                        infinite={false}
                    />

                </section>
            )}
        </I18NConsumer>
    </>
}

{/* <Post
                                    title={post.title}
                                    date={post.date}
                                    headline={post.headline}
                                    article={post.article}
                                    mediaURL={post.mediaURL}
                                /> */}