import React from 'react'

/*data model:
**
* { title: '',
    date: '',
    headline: '',
    article: {body: '', link: {name: '', url''}},
    mediaURL: '' }
}*/

const news = [
    {
        title: ' COVID-19',
        date: '25-05-2020',
        headline: 'Com ens organitzarem',
        article: {
            body: [<p className="news-container--text">Després de passar-nos més de 2 mesos de confinament sembla que les mesures de l'estat d'alarma es relaxen una mica.</p>,
            <p className="news-container--text">Com que tots tenim moltes ganes de tornar a entrenar i des de Crosstraining Empordà ens preocupa la salut dels nostres membres, us deixem un breu vídeo on us explicarem com ens ho muntarem.</p>],
            link: {
                name: 'segueix-nos',
                url: 'https://www.instagram.com/crosstrainingemporda/'
            },
        },
        mediaURL: 'https://youtu.be/CzMxdxKCikY',
    }
]

export default news