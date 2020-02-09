import React from 'react'

const text = {
    navBar: {
        acronym: 'CTE',
        brand1: 'Crosstraining',
        brand2: 'Empordà'
    },

    EN: {
        navbar: {
            who: "Who we are",
            what: "What we do",
            schedule: "Schedule",
            price: "Rates",
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
            par1: "We are a Crosstraining gym located on Calle dels Arboços 4 in Vulpellac.",

            par2: "We will help you with our classes to unlock your full potential through high intensity interval (HIIT) and functional training adapted to your sports level. Always paying close attention to the correct implementation of the movements",

            par3: "Whether you're just starting or been around for a while, with us you will always have a great time reaching your limit.",

            coachTitle: "The Coaches"
        },
        sectionPrice: {
            child: {
                content1: {
                    text: "1 sessió al mes ",
                    price: "20€",
                },
                content2: {
                    text: "2 sessions al mes",
                    price: "40€"
                }
            },
            basic: {
                content1: {
                    text: "9 sessions al mes",
                    price: "40€",
                },
                content2: {
                    text: "9 sessions al mes (matins)",
                    price: "30€",
                },
                content3: {
                    text: "13 sessions al mes",
                    price: "45€",
                },
                content4: {
                    text: "Il·limitat",
                    price: "58€",
                },
                content5: {
                    text: "Il.limitat (matins)",
                    price: "40€",
                },
            },
            bond: {
                content1: {
                    text: "1 sessió",
                    price: "8€",
                },
                content2: {
                    text: "5 sessions",
                    price: "35€",
                },
                content3: {
                    text: "10 sessions",
                    price: "60€",
                },
            },
            offer: {
                text: "Estudiants, jubilats, Agents ordre public, familiars de socis",
                discount: "-10%"
            },
            info: {
                text: "Matricula",
                price: "40€",
                vat: "IVA inclós en totes les quotes",
            }
        },
        sectionContact: {
            title1: "Can we help?",
            title2: "Leave us a message",
            name: "Name",
            email: "E-mail",
            message: "Your message here...",
            send: "Send",
            sending: "We are sending your message",
            sent: <div className="contact-sent-wrap"><p className="contact-p contact-sent-wrap--first">Thanks for contacting us ❤</p>
                <p className="contact-p contact-sent-wrap--second">We will contact you shortly.</p></div>
        },
        footer: {
            follow: "follow us:"
        },

    },

    ES: {
        navbar: {
            who: "Quien somos?",
            what: "Que hacemos?",
            schedule: 'Horario',
            price: "Quotas",
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
            par1: "Somos un gimnasio de Crosstraining situado en la calle dels Arboços 4 de Vulpellac.",
            par2: "Te ayudaremos con nuestras clases dirigidas a liberar tu máximo potencial mediante entrenos intervalicos de alta intensidad (HIIT) y funcionales adaptados a tu nivel deportivo. Siempre prestando mucha atención a la correcta implementación de los movimientos ",

            par3: "Sea acabando de empezar o llevando ya un tiempo, con nosotros siempre te lo pasaras a lo grande llegando a tu limite.",

            coachTitle: "Los Coaches"
        },
        sectionWhat: {
            icons: ["Fuerza", "Agilidad", "Flexibilidad", "Velocidad", "Equilibrio", "Condición"],
            par1: <p className="what-para">En <b>Crosstraining Empordà</b> te ofrecemos entrenos funcionales o HIITs para  grandes y pequeños, como también clases de Jiu Jitsu.</p>,
            par2: <p className="what-para">Los <b>HIIT</b> son entrenamientos intervalicos de alta intensidad. Es una técnica de entreno rápida, intensa y que et permite quemar calorías como ninguna otra.</p>,
            par3: <p className="what-para">Si tienes <b>curiosidad</b>, ven a probar una clase.</p>
        },
        sectionPrice: {
            child: {
                content1: {
                    text: "1 sesión al mes ",
                    price: "20€",
                },
                content2: {
                    text: "2 sesiones al mes ",
                    price: "40€"
                }
            },
            basic: {
                content1: {
                    text: "9 sesiones al mes ",
                    price: "40€",
                },
                content2: {
                    text: "9 sesiones al mes (mañanas) ",
                    price: "30€",
                },
                content3: {
                    text: "13 sesiones al mes ",
                    price: "45€",
                },
                content4: {
                    text: "Ilimitado ",
                    price: "58€",
                },
                content5: {
                    text: "Ilimitado (mañanas) ",
                    price: "40€",
                },
            },
            bond: {
                content1: {
                    text: "1 sesión ",
                    price: "8€",
                },
                content2: {
                    text: "5 sesiones ",
                    price: "35€",
                },
                content3: {
                    text: "10 sesiones ",
                    price: "60€",
                },
            },
            offer: {
                text: "Estudiantes, jubilados, Agentes orden publico, familiares de socios ",
                discount: "-10%"
            },
            info: {
                text: "Matricula ",
                price: "40€",
                vat: "IVA incluido en todas las cuotas",
            }
        },
        sectionContact: {
            title1: "Te podemos ayudar ?",
            title2: "Dejanos un mensaje",
            name: "Nombre",
            email: "E-mail",
            message: "Tu mensaje aqui...",
            send: "Enviar",
            sending: "Estamos enviando tu mensaje",
            sent: <div className="contact-sent-wrap"><p className="contact-p contact-sent-wrap--first">Gracies por contactar con nosotros ❤</p>
                <p className="contact-p contact-sent-wrap--second">En breve nos pondremos en contacto contigo.</p></div>
        },
        footer: {
            follow: "Siguenos:"
        },

    },

    CAT: {
        navbar: {
            who: "Qui som?",
            what: "Que fem?",
            schedule: 'Horari',
            price: "Quotes",
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
            par1: "Som un gimnàs de Crosstraining situat al carrer dels Arboços 4 a Vulpellac.",
            par2: "T'ajudarem en les nostres classes dirigides a alliberar el teu màxim potencial mitjançant entrenaments intervàlics d'alta intensitat (HIIT) i funcionals adaptats al teu nivell esportiu. Sempre prestant molta atenció al correcte desenvolupament del moviment.",

            par3: "Sia acabant de començar o portant temps, amb nosaltres sempre t'ho passaràs en gran arribant al teu límit.",

            coachTitle: "Els Coaches"
        },
        sectionWhat: {
            icons: ["Força", "Agilitat", "Flexibilitat", "Velocitat", "Equilibri", "Condició"],
            par1: <p className="what-para">A <b>Crosstraining Empordà</b> t'oferim entrenaments funcionals o HIITS, per a grans i petits, com tambe classes de Jiu Jitsu.</p>,
            par2: <p className="what-para">Els <b>HIIT</b> son entrenaments intervalics d'alta intensitat. És una tecnica d'entrenament ràpida, intensa i que et permet cremar calories com ninguna altre.</p>,
            par3: [<p className="what-para-third">Si tens <b>curiositat</b>,</p>, <p className="what-para-third"> vine a provar una classe.</p>]
        },
        sectionSchedule: {
            row1: {
                cell0: "9:30 - 10:30",
                cell1: <p className="ct">CROSSTRAINING</p>,
                cell2: <p className="ct">CROSSTRAINING</p>,
                cell3: <p className="ct">CROSSTRAINING</p>,
                cell4: <p className="ct">CROSSTRAINING</p>,
                cell5: <p className="ct">CROSSTRAINING</p>,
                cell6: <p className="ct">CROSSTRAINING</p>,
            },
            row2: {
                cell7: "10:30 - 11:30",
                cell9: <p className="ct">CROSSTRAINING</p>,
                cell8: <p className="ct">CROSSTRAINING</p>,
                cell10: <p className="ct">CROSSTRAINING</p>,
                cell11: <p className="ct">CROSSTRAINING</p>,
                cell12: <p className="ct">CROSSTRAINING</p>,
                cell13: <p className="ct">CROSSTRAINING</p>,
            },
            row3: {
                cell14: "11:30 - 15:15",
                cell15: <p className="ob">OPEN BOX</p>,
                cell16: <p className="ob">OPEN BOX</p>,
                cell17: <p className="ob">OPEN BOX</p>,
                cell18: <p className="ob">OPEN BOX</p>,
                cell19: <p className="ob">OPEN BOX</p>,
                cell20: "",
            },
            row4: {
                cell21: "15:15 - 16:15",
                cell22: <p className="ct">CROSSTRAINING</p>,
                cell23: <p className="ct">CROSSTRAINING</p>,
                cell24: <p className="ct">CROSSTRAINING</p>,
                cell25: <p className="ct">CROSSTRAINING</p>,
                cell26: <p className="ct">CROSSTRAINING</p>,
                cell27: "",
            },
            row5: {
                cell28: "16:30 - 17:30",
                cell29: <p className="ct">CROSSTRAINING</p>,
                cell30: <p className="ct">CROSSTRAINING</p>,
                cell31: <p className="ct">CROSSTRAINING</p>,
                cell32: <p className="ct">CROSSTRAINING</p>,
                cell33: <p className="ct">CROSSTRAINING</p>,
                cell34: "",
            },
            row6: {
                cell35: "17:30 - 18:30",
                cell36: <p className="ct">CROSSTRAINING</p>,
                cell37: <div className="cellSplitted"><p className="ct">CROSSTRAINING</p> <p className="jjk">Jiu-Jitsu Kids</p></div>,
                cell38: <p className="ct">CROSSTRAINING</p>,
                cell39: <div className="cellSplitted"><p className="ct">CROSSTRAINING</p> <p className="jjk">Jiu-Jitsu Kids</p></div>,
                cell40: <div className="cellSplitted"><p className="ct">CROSSTRAINING</p> <p className="ctk">Crosstraining Kids</p></div>,
                cell41: "",
            },
            row7: {
                cell42: "18:30 - 19:30",
                cell43: <p className="ct">CROSSTRAINING</p>,
                cell44: <p className="ct">CROSSTRAINING</p>,
                cell45: <p className="ct">CROSSTRAINING</p>,
                cell46: <p className="ct">CROSSTRAINING</p>,
                cell47: <p className="ct">CROSSTRAINING</p>,
                cell48: "",
            },
            row8: {
                cell49: "19:30 - 20:30",
                cell50: <p className="ct">CROSSTRAINING</p>,
                cell51: <p className="ct">CROSSTRAINING</p>,
                cell52: <p className="ct">CROSSTRAINING</p>,
                cell53: <p className="ct">CROSSTRAINING</p>,
                cell54: <p className="ct">CROSSTRAINING</p>,
                cell55: "",
            },
            row9: {
                cell56: "20:30 - 21:30",
                cell57: <p className="ct">CROSSTRAINING</p>,
                cell58: <div className="cellSplitted"><p className="ct">CROSSTRAINING</p> <p className="jj">Jiu-Jitsu</p></div>,
                cell59: <p className="ct">CROSSTRAINING</p>,
                cell60: <p className="ct">CROSSTRAINING</p>,
                cell61: <div className="cellSplitted"><p className="ct">CROSSTRAINING</p> <p className="jj">Jiu-Jitsu</p></div>,
                cell62: "",
            },

        },
        sectionPrice: {
            child: {
                content1: {
                    text: "1 sessió al mes ",
                    price: "20€",
                },
                content2: {
                    text: "2 sessions al mes ",
                    price: "40€"
                }
            },
            basic: {
                content1: {
                    text: "9 sessions al mes ",
                    price: "40€",
                },
                content2: {
                    text: "9 sessions al mes (matins) ",
                    price: "30€",
                },
                content3: {
                    text: "13 sessions al mes ",
                    price: "45€",
                },
                content4: {
                    text: "Il·limitat ",
                    price: "58€",
                },
                content5: {
                    text: "Il.limitat (matins) ",
                    price: "40€",
                },
            },
            bond: {
                content1: {
                    text: "1 sessió",
                    price: "8€",
                },
                content2: {
                    text: "5 sessions",
                    price: "35€",
                },
                content3: {
                    text: "10 sessions",
                    price: "60€",
                },
            },
            offer: {
                text: "Estudiants, jubilats, Agents ordre public, familiars de socis ",
                discount: "-10%"
            },
            info: {
                text: "Matricula ",
                price: "40€",
                vat: "IVA inclós en totes les quotes",
            }
        },
        sectionContact: {
            title1: "Et podem ajudar?",
            title2: "deixa'ns un missatge",
            name: "Nom",
            email: "E-mail",
            message: "El teu missatge aqui...",
            send: "Enviar",
            sending: "Estem enviant el teu missatge",
            sent: <div className="contact-sent-wrap"><p className="contact-p contact-sent-wrap--first">Gràcies per contactar amb nosaltres ❤</p>
                <p className="contact-p contact-sent-wrap--second">En breu ens posarem en contacte amb tu.</p></div>
        },
        footer: {
            follow: "Segueix-nos:"
        },
    }
}

export default text