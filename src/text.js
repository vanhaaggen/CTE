import React from 'react'

const text = {
    navBar: {
        acronym: 'CTE',
        brand1: 'Crosstraining',
        brand2: 'Empordà'
    },
    footer: {
        brand1: 'crosstraining',
        brand2: 'empordà'
    },

    EN: {
        navbar: {
            who: "Who we are",
            what: "What we do",
            schedule: "Schedule",
            contact: "Contact"
        },
        header: <p className="quote">BE YOUR<br />BETTER<br />VERSION</p>,
        quote: "He Conquers Who Conquers Himself ",
        stripeText: [
            <p className="stripeText">We call the gym <span className="stripeText___box1">BOX</span></p>,
            <p className="stripeText">We call the trainings <span className="stripeText___box2">WODs</span></p>,
            <p className="stripeText">We call the subscribers <span className="stripeText___box3">Family</span></p>,
            <p className="stripeText">We call the suffering a <span className="stripeText___box4">Joyful</span> experience</p>,
        ],
        sectionWho: {
            par1: "We are a Crosstraining gym located on Calle dels Arboços 4 in Vulpellac. We will help you with our classes to unlock your full potential through high intensity interval (HIIT) and functional training adapted to your sports level. Always paying close attention to the correct implementation of the movements",

            par2: "Whether you're just starting or been around for a while, with us you will always have a great time reaching your limit.",

            coachTitle: "The Coaches"
        }

    },

    ES: {
        navbar: {
            who: "Quien somos?",
            what: "Que hacemos?",
            schedule: 'Horario',
            contact: 'Contacto'
        },
        header: <p className="quote">SE TU<br />MEJOR<br />VERSIÓN</p>,
        quote: "Conquista el que se vence a si mismo",
        stripeText: [
            <p className="stripeText">Al gimnasio lo llamamos <span className="stripeText____box1">BOX</span></p>,
            <p className="stripeText">A los entrenamientos los llamamos <span className="stripeText____box2">WODs</span></p>,
            <p className="stripeText">A los abonados los llamamos <span className="stripeText____box3">Familia</span></p>,
            <p className="stripeText">A los entrenadores los llamamos <span className="stripeText____box4">Coaches</span></p>,

        ],
        sectionWho: {
            par1: "Somos un gimnasio de Crosstraining situado en la calle dels Arboços 4 de Vulpellac. Te ayudaremos con nuestras clases dirigidas a liberar tu máximo potencial mediante entrenos intervalicos de alta intensidad (HIIT) y funcionales adaptados a tu nivel deportivo. Siempre prestando mucha atención a la correcta implementación de los movimientos ",

            par2: "Sea acabando de empezar o llevando ya un tiempo, con nosotros siempre te lo pasaras a lo grande llegando a tu limite.",

            coachTitle: "Los Coaches"
        },
        sectionWhat: {
            par1: <p className="what-para">En <b>Crosstraining Empordà</b> te ofrecemos entrenos funcionales o HIITs para  grandes y pequeños, como también clases de Jiu Jitsu.</p>,
            par2: <p className="what-para">Los <b>HIIT</b> son entrenamientos intervalicos de alta intensidad. Es una técnica de entreno rápida, intensa y que et permite quemar calorías como ninguna otra.</p>,
            par3: <p className="what-para">Si tienes curiosidad, ven a probar una clase.</p>
        }

    },

    CAT: {
        navbar: {
            who: "Qui som?",
            what: "Que fem?",
            schedule: 'Horari',
            contact: "Contacte"
        },
        header: <p className="quote">SIGUES<br />LA TEVA<br />MILLOR<br />VERSIÓ</p>,
        quote: "Conquereix el que es venç a si mateix",
        stripeText: [
            <p className="stripeText">Al gimnàs en diem <span className="stripeText___box1">BOX</span></p>,
            <p className="stripeText">Als entrenaments els anomenem <span className="stripeText___box2">WOD</span></p>,
            <p className="stripeText">Als abonats els anomenem <span className="stripeText___box3">Familia</span></p>,
            <p className="stripeText">Als entrenadors els anomenem <span className="stripeText___box4">Coaches</span></p>,
        ],
        sectionWho: {
            par1: "Som un gimnàs de Crosstraining situat al carrer dels Arboços 4 a Vulpellac. T'ajudarem en les nostres classes dirigides a alliberar el teu màxim potencial mitjançant entrenaments intervàlics d'alta intensitat (HIIT) i funcionals adaptats al teu nivell esportiu. Sempre prestant molta atenció al correcte desenvolupament del moviment.",

            par2: "Sia acabant de començar o portant temps, amb nosaltres sempre t'ho passaràs en gran arribant al teu límit.",

            coachTitle: "Els Coaches"
        },
        sectionWhat: {
            par1: <p className="what-para">A <b>Crosstraining Empordà</b> t'oferim entrenaments funcionals o HIITS, per a grans i petits, com tambe classes de Jiu Jitsu.</p>,
            par2: <p className="what-para">Els <b>HIIT</b> son entrenaments intervalics d'alta intensitat. És una tecnica d'entrenament ràpida, intensa i que et permet cremar calories com ninguna altre.</p>,
            par3: <p className="what-para">Si tens curiositat, vine a provar una classe.</p>
        }
    }
}

export default text