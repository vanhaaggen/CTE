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
        title: 'NOVA NORMALITAT',
        date: '01-06-2020',
        headline: 'Entrenar sí, però amb precaució',
        article: {
            body: [<p className="news-container--text">Avui, 1 de Juny i entrant en fase 2, podem dir que ja podrem tornar a gaudir dels nostres entrenaments a Crosstraining Empordà. </p>,
            <p className="news-container--text">Us expliquem com serà aquesta nova normalitat i quines mesures hem pres perquè tots vosaltres pogueu tornar a gaudir dels vostres entrenaments, segurs, higiènics i complint les distàncies de seguretat.</p>],
            link: {
                name: '#crosstrainingemporda',
                url: 'https://www.instagram.com/p/CA2XA-JKOiw/'
            },
        },
        mediaURL: 'https://youtu.be/mL3tocjLih4',
    },
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
    },

]

export default news