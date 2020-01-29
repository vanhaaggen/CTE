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
            price: "Prices",
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
            par1: <p className="what-para">En <b>Crosstraining Empordà</b> te ofrecemos entrenos funcionales o HIITs para  grandes y pequeños, como también clases de Jiu Jitsu.</p>,
            par2: <p className="what-para">Los <b>HIIT</b> son entrenamientos intervalicos de alta intensidad. Es una técnica de entreno rápida, intensa y que et permite quemar calorías como ninguna otra.</p>,
            par3: <p className="what-para">Si tienes curiosidad, ven a probar una clase.</p>
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
            par1: <p className="what-para">A <b>Crosstraining Empordà</b> t'oferim entrenaments funcionals o HIITS, per a grans i petits, com tambe classes de Jiu Jitsu.</p>,
            par2: <p className="what-para">Els <b>HIIT</b> son entrenaments intervalics d'alta intensitat. És una tecnica d'entrenament ràpida, intensa i que et permet cremar calories com ninguna altre.</p>,
            par3: <p className="what-para">Si tens curiositat, vine a provar una classe.</p>
        },
        sectionSchedule: {
            row1: {
                cell0: "9:30 - 10:30",
                cell1: "CROSSTRAINING",
                cell2: "CROSSTRAINING",
                cell3: "CROSSTRAINING",
                cell4: "CROSSTRAINING",
                cell5: "CROSSTRAINING",
                cell6: "CROSSTRAINING",
            },
            row2: {
                cell7: "10:30 - 11:30",
                cell8: "CROSSTRAINING",
                cell9: "CROSSTRAINING",
                cell10: "CROSSTRAINING",
                cell11: "CROSSTRAINING",
                cell12: "CROSSTRAINING",
                cell13: "CROSSTRAINING",
            },
            row3: {
                cell14: "11:30 - 15:15",
                cell15: "OPEN BOX",
                cell16: "OPEN BOX",
                cell17: "OPEN BOX",
                cell18: "OPEN BOX",
                cell19: "OPEN BOX",
                cell20: "",
            },
            row4: {
                cell21: "15:15 - 16:15",
                cell22: "CROSSTRAINING",
                cell23: "CROSSTRAINING",
                cell24: "CROSSTRAINING",
                cell25: "CROSSTRAINING",
                cell26: "CROSSTRAINING",
                cell27: "",
            },
            row5: {
                cell28: "16:30 - 17:30",
                cell29: "CROSSTRAINING",
                cell30: "CROSSTRAINING",
                cell31: "CROSSTRAINING",
                cell32: "CROSSTRAINING",
                cell33: "CROSSTRAINING",
                cell34: "",
            },
            row6: {
                cell35: "17:30 - 18:30",
                cell36: "CROSSTRAINING",
                cell37: "CROSSTRAINING" + " " + "Jiu-Jitsu Kids",
                cell38: "CROSSTRAINING",
                cell39: "CROSSTRAINING" + " " + "Jiu-Jitsu Kids",
                cell40: "CROSSTRAINING Crosstraining Kids",
                cell41: "",
            },
            row7: {
                cell42: "18:30 - 19:30",
                cell43: "CROSSTRAINING",
                cell44: "CROSSTRAINING",
                cell45: "CROSSTRAINING",
                cell46: "CROSSTRAINING",
                cell47: "CROSSTRAINING",
                cell48: "",
            },
            row8: {
                cell49: "19:30 - 20:30",
                cell50: "CROSSTRAINING",
                cell51: "CROSSTRAINING",
                cell52: "CROSSTRAINING",
                cell53: "CROSSTRAINING",
                cell54: "CROSSTRAINING",
                cell55: "",
            },
            row9: {
                cell56: "20:30 - 21:30",
                cell57: "CROSSTRAINING",
                cell58: "CROSSTRAINING" + " " + "Jiu-Jitsu",
                cell59: "CROSSTRAINING",
                cell60: "CROSSTRAINING",
                cell61: "CROSSTRAINING" + " " + "Jiu-Jitsu",
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