
import back from './back.png'
import barbell from './barbell.png'
import circle from './circle.png'
import laurel from './laurel.png'
import kettlebell from './kettlebell.png'

import backWebP from './back.webp'
import barbellWebP from './barbell.webp'
import circleWebP from './circle.webp'
import laurelWebP from './laurel.webp'
import kettlebellWebP from './kettlebell.webp'

import gerard from './ger.png';
import cristhian from './larr.png'
import gerardWebP from './ger.webp'
import cristhianWebP from './larr.webp'


import img1 from './ins-1.jpg'
import img2 from './ins-2.jpg'
import img3 from './ins-3.jpg'
import img4 from './ins-4.jpg'
import img5 from './ins-5.jpg'
import img1w from './ins-1.webp'
import img2w from './ins-2.webp'
import img3w from './ins-3.webp'
import img4w from './ins-4.webp'
import img5w from './ins-5.webp'

import icons from './icons'

const { cardio, strenght, flexibility, agility, meditationWoman, speed, gamer, underconst } = icons

const images = {

    logo: [
        back,
        barbell,
        circle,
        laurel,
        kettlebell,
        backWebP,
        barbellWebP,
        circleWebP,
        laurelWebP,
        kettlebellWebP
    ],

    coaches: [
        gerard,
        cristhian,
        gerardWebP,
        cristhianWebP
    ],

    instalation: {
        webp: [
            img1w,
            img2w,
            img4w,
            img5w,
            img3w,
        ],
        noWebp: [
            img1,
            img2,
            img4,
            img5,
            img3,
        ],
    },

    icons: [
        strenght,
        agility,
        meditationWoman,
        speed,
        flexibility,
        cardio
    ],

    underconstruction: [
        gamer,
        underconst
    ]
}

export default images
