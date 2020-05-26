import React from 'react'
import ReactPlayer from 'react-player'

import './postStyle.sass'

export default function ({ title, date, headline, article, mediaURL }) {
    const { body, link: { name, url } } = article
    return (
        <div className="post-container">

            <div className="post-header">
                <h2 className="news-title" >{title}</h2>
                <div className="news-date-container">
                    <p className="news-date">{date}</p>
                </div>
            </div>

            <div className="post-body">
                <article className="news-container">
                    <p className="news-container--title">{headline}</p>
                    {body}
                    {url.length > 0 && <a href={url} target="_blank" className=" news-container--text post-link">{name}</a>}
                </article>

                <div className="post-media-container">
                    <ReactPlayer className='react-player' controls={true} url={mediaURL} width="95%" height="95%" />
                </div>
            </div>
        </div>
    )
}