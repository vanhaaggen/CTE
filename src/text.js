import React from 'react'
import ES_LEGAL from './legals/ES_legal'
import CAT_LEGAL from './legals/CAT_legal'
import ES_PRIVACY from './legals/ES_privacy'
import CAT_PRIVACY from './legals/CAT_privacy'


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
            contact: "Contact",
            home: "Home",
            legal: "Terms & Conditions",
            privacy: "Privacy Policy"
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
            par1: <p className='who-divisor__paragraph--size'>We are a Crosstraining gym located on <b>Calle dels Arboços 4 in Vulpellac.</b></p>,

            par2: <p className='who-divisor__paragraph--size'>We will help you with our classes to <b>unlock</b> your full potential through <b>high intensity interval</b> (HIIT) and functional training adapted to your sports level. Always paying close attention to the correct implementation of the movements.</p>,

            par3: "Whether you're just starting or been around for a while, with us you will always have a great time reaching your limit.",

            coach1: {
                name: "- Coach Cristhian -",
                text: "I will teach you how to move big loads with little risk."
            },

            coach2: {
                name: "- Coach Gerard -",
                text: "I will teach you to overcome your weaknesess"
            }
        },
        sectionWhat: {
            par1: <p className="what-para">At <b>Crosstraining Empordà</b> we offer functional training or HIITs for adults and children, as well as Jiu Jitsu classes.</p>,
            par2: <p className="what-para"><b>HIITs</b> are high intensity interval training sessions. It is a fast, intense training technique that allows you to burn calories like no other</p>,
            benefits: <p className="what-text-wrapper--text1">Benefits for training with us?</p>,
            benefits1: <p className="what-text-wrapper--text2"><i>You will gain...</i></p>,
            icons: ["Strength", "Agility", "Flexibility", "Speed", "Balance", "Condition"],
            par3: [<p key={`what-para-3-1`} className="what-para-third">If you're <b>curious</b>,</p>, <p key={`what-para-3-2`} className="what-para-third">come and try a class</p>],
            par4: <p className="what-para-fourth">Call us ☎ <span className="what-para-fourth--phone-num">659 53 37 21</span></p>,
            o: <span>or</span>,
            contactLink: "Send us an email ✉"

        },
        sectionSchedule: {
            daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysOfWeekMobile: ["Mo", "Tu", "We", "Th", "Fr", "Sa"]
        },
        sectionPrice: {
            fee: {
                child: "Kids fee",
                basic: "Basic fee",
                ticket: "Tickets"
            },
            child: {
                content1: {
                    text: "1 session per month ",
                    price: "20€",
                },
                content2: {
                    text: "2 session per month",
                    price: "40€"
                }
            },
            basic: {
                content1: {
                    text: "9 session per month",
                    price: "40€",
                },
                content2: {
                    text: "9 session per month AM",
                    price: "30€",
                },
                content3: {
                    text: "13 session per month",
                    price: "45€",
                },
                content4: {
                    text: "Unlimited",
                    price: "58€",
                },
                content5: {
                    text: "Unlimited AM",
                    price: "40€",
                },
            },
            bond: {
                content1: {
                    text: "1 session",
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
                text: "Students, retirees, law enforcement officers, family members",
                discount: "-10%"
            },
            info: {
                text: "Enrolment",
                price: "40€",
                vat: "VAT included in all fees",
            }
        },
        sectionContact: {
            title1: "Any doubt?",
            title2: "Leave us a message",
            name: "Name",
            email: "E-mail",
            message: "Your message here...",
            send: "Submit",
            sending: "We are sending your message",
            sent: <div className="contact-sent-wrap"><p className="contact-p contact-sent-wrap--first">Thanks for contacting us ❤</p>
                <p className="contact-p contact-sent-wrap--second">We will contact you shortly.</p></div>,
            error: <p>Seems that something has gone <b>wrong</b>...</p>,
            tryagain: "try again",
            goback: "go back",
            legal: "By clicking on the “Submit” button you are confirming that you have read and accepted our ",
            downloadtitle: "If we've already convinced you!",
            downloadtitle1: "download our registration form"
        },
        sectionInsta: {
            pretitle: "follow us ",
            title: <a className="insta-title" href="https://www.instagram.com/crosstrainingemporda/">#crosstrainingemporda</a>
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
            price: "Cuotas",
            contact: 'Contacto',
            home: "Volver",
            legal: "Aviso Legal",
            privacy: "Política de Privacidad"
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
            par1: <p className='who-divisor__paragraph--size'>Somos un gimnasio de Crosstraining situado en la <b>calle dels Arboços 4 de Vulpellac.</b></p>,
            par2: <p className='who-divisor__paragraph--size'>Te ayudaremos con nuestras <b>clases dirigidas</b> a liberar tu máximo potencial mediante <b>entrenos intervalicos de alta intensidad</b> (HIIT) y funcionales adaptados a tu nivel deportivo. Siempre prestando mucha atención a la correcta implementación de los movimientos.</p>,

            par3: "Sea acabando de empezar o llevando ya un tiempo, con nosotros siempre te lo pasaras a lo grande llegando a tu limite.",

            coach1: {
                name: "- Coach Cristhian - ",
                text: "Yo te enseñaré a mover pesos altos sin riesgo."
            },

            coach2: {
                name: "- Coach Gerard -",
                text: "Yo te enseñaré a superar tus debilidades."
            }
        },
        sectionWhat: {
            par1: <p className="what-para">En <b>Crosstraining Empordà</b> te ofrecemos entrenos funcionales o HIITs para  grandes y pequeños, como también clases de Jiu Jitsu.</p>,
            par2: <p className="what-para">Los <b>HIIT</b> son entrenamientos intervalicos de alta intensidad. Es una técnica de entreno rápida, intensa y que et permite quemar calorías como ninguna otra.</p>,
            benefits: <p className="what-text-wrapper--text1">Los beneficios de entrenear con nosotros?</p>,
            benefits1: <p className="what-text-wrapper--text2"><i>ganarás en...</i></p>,
            icons: ["Fuerza", "Agilidad", "Flexibilidad", "Velocidad", "Equilibrio", "Condición"],
            par3: [<p key={`what-para-3-1`} className="what-para-third">Si tienes <b>curiosidad</b>,</p>, <p key={`what-para-3-2`} className="what-para-third">ven a probar una clase.</p>],
            par4: <p className="what-para-fourth">Llamanos ☎ <span className="what-para-fourth--phone-num">659 53 37 21</span></p>,
            o: <span>o</span>,
            contactLink: "Envianos un mail ✉"

        },
        sectionSchedule: {
            daysOfWeek: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            daysOfWeekMobile: ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        },
        sectionPrice: {
            fee: {
                child: "Cuota Infantil",
                basic: "Cuotas básicas",
                ticket: "Bonos"
            },
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
        sectionInsta: {
            pretitle: "síguenos ",
            title: <a className="insta-title" href="https://www.instagram.com/crosstrainingemporda/">#crosstrainingemporda</a>
        },
        sectionContact: {
            title1: "Alguna duda?",
            title2: "Dejanos un mensaje",
            name: "Nombre",
            email: "E-mail",
            message: "Tu mensaje aqui...",
            send: "Enviar",
            sending: "Estamos enviando tu mensaje",
            sent: <div className="contact-sent-wrap"><p className="contact-p contact-sent-wrap--first">Gracies por contactar con nosotros ❤</p>
                <p className="contact-p contact-sent-wrap--second">En breve nos pondremos en contacto contigo.</p></div>,
            error: <p>Parece que algo <b>no</b> ha salido bien...</p>,
            tryagain: "volver a probar",
            goback: "atrás",
            legal: "Al hacer click sobre el botón “Enviar” estás confirmando que has leído y aceptado nuestra ",
            downloadtitle: "Si ya te hemos convencido!",
            downloadtitle1: "descárgate el formulario de inscripción"
        },
        footer: {
            follow: "Síguenos:"
        },
        legal: ES_LEGAL,
        privacy: ES_PRIVACY

    },

    CAT: {
        navbar: {
            who: "Qui som?",
            what: "Que fem?",
            schedule: 'Horari',
            price: "Quotes",
            contact: "Contacte",
            home: "Inici",
            legal: "Avís Legal",
            privacy: "Politica de Privacitat"
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
            par1: <p className='who-divisor__paragraph--size'>Som un gimnàs de Crosstraining situat al <b>carrer dels Arboços 4 a Vulpellac.</b></p>,
            par2: <p className='who-divisor__paragraph--size'>T'ajudarem en les nostres <b>classes dirigides</b> a alliberar el teu màxim potencial mitjançant <b>entrenaments intervàl·lics d'alta intensitat</b> (<span className="hiit">HIIT</span>) i funcionals adaptats al teu nivell esportiu. Sempre prestant molta atenció al correcte desenvolupament del moviment.</p>,

            par3: "Sia acabant de començar o portant temps, amb nosaltres sempre t'ho passaràs en gran arribant al teu límit.",

            coach1: {
                name: "- Coach Cristhian -",
                text: "Jo t'ensenyaré a moure pesos alts sense risc"
            },

            coach2: {
                name: "- Coach Gerard -",
                text: "Jo t'ensenyaré a superar les teves debilitats."
            }
        },
        sectionWhat: {
            par1: <p className="what-para">A <b>Crosstraining Empordà</b> t'oferim entrenaments funcionals o HIITS, per a grans i petits, com tambe classes de Jiu Jitsu.</p>,
            par2: <p className="what-para">Els <b>HIIT</b> son entrenaments intervàl·lics d'alta intensitat. És una tecnica d'entrenament ràpida, intensa i que et permet cremar calories com ninguna altre.</p>,
            benefits: <p className="what-text-wrapper--text1">Els beneficis d'entrenar amb nosaltres?</p>,
            benefits1: <p className="what-text-wrapper--text2"><i>guanyaràs en...</i></p>,
            icons: ["Força", "Agilitat", "Flexibilitat", "Velocitat", "Equilibri", "Condició"],
            par3: [<p key={`what-para-3-1`} className="what-para-third">Si tens <b>curiositat</b>,</p>, <p key={`what-para-3-2`} className="what-para-third"> vine a provar una classe.</p>],
            par4: <p className="what-para-fourth">Truca'ns ☎ <span className="what-para-fourth--phone-num">659 53 37 21</span></p>,
            o: <span>o</span>,
            contactLink: "Envia'ns un mail ✉"
        },
        sectionSchedule: {
            daysOfWeek: ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
            daysOfWeekMobile: ["Dl", "Dt", "Dm", "Dj", "Dv", "Ds"]
        },
        sectionPrice: {
            fee: {
                child: "Quota Infantil",
                basic: "Quotes bàsicas",
                ticket: "Bonos"
            },
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
        sectionInsta: {
            pretitle: "segueix-nos ",
            title: <a className="insta-title" href="https://www.instagram.com/crosstrainingemporda/">#crosstrainingemporda</a>
        },
        sectionContact: {
            title1: "Algun dubte?",
            title2: "deixa'ns un missatge",
            name: "Nom",
            email: "E-mail",
            message: "El teu missatge aqui...",
            send: "Enviar",
            sending: "Estem enviant el teu missatge",
            sent: <div className="contact-sent-wrap"><p className="contact-p contact-sent-wrap--first">Gràcies per contactar amb nosaltres ❤</p>
                <p className="contact-p contact-sent-wrap--second">En breu ens posarem en contacte amb tu.</p></div>,
            error: <p>Sembla que algo <b>no</b> ha anat bé...</p>,
            tryagain: "tornar a provar",
            goback: "enrere",
            legal: "Al fer clic sobre el botó “Enviar” estàs confirmant que has llegit i acceptat la nostra ",
            downloadtitle: "Si ja t'hem convençut !",
            downloadtitle1: "descarrega't el nostre formulari d'inscripció"
        },
        footer: {
            follow: "Segueix-nos:"
        },
        legal: CAT_LEGAL,
        privacy: CAT_PRIVACY

    },

    scheduleContent: {
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
        }

    },
    scheduleContentMobile: {
        row1: {
            cell0: "9:30 - 10:30",
            cell1: <p className="ct-mbl">CT</p>,
            cell2: <p className="ct-mbl">CT</p>,
            cell3: <p className="ct-mbl">CT</p>,
            cell4: <p className="ct-mbl">CT</p>,
            cell5: <p className="ct-mbl">CT</p>,
            cell6: <p className="ct-mbl">CT</p>,
        },
        row2: {
            cell7: "10:30 - 11:30",
            cell9: <p className="ct-mbl">CT</p>,
            cell8: <p className="ct-mbl">CT</p>,
            cell10: <p className="ct-mbl">CT</p>,
            cell11: <p className="ct-mbl">CT</p>,
            cell12: <p className="ct-mbl">CT</p>,
            cell13: <p className="ct-mbl">CT</p>,
        },
        row3: {
            cell14: "11:30 - 15:15",
            cell15: <p className="ob-mbl">OB</p>,
            cell16: <p className="ob-mbl">OB</p>,
            cell17: <p className="ob-mbl">OB</p>,
            cell18: <p className="ob-mbl">OB</p>,
            cell19: <p className="ob-mbl">OB</p>,
            cell20: "",
        },
        row4: {
            cell21: "15:15 - 16:15",
            cell22: <p className="ct-mbl">CT</p>,
            cell23: <p className="ct-mbl">CT</p>,
            cell24: <p className="ct-mbl">CT</p>,
            cell25: <p className="ct-mbl">CT</p>,
            cell26: <p className="ct-mbl">CT</p>,
            cell27: "",
        },
        row5: {
            cell28: "16:30 - 17:30",
            cell29: <p className="ct-mbl">CT</p>,
            cell30: <p className="ct-mbl">CT</p>,
            cell31: <p className="ct-mbl">CT</p>,
            cell32: <p className="ct-mbl">CT</p>,
            cell33: <p className="ct-mbl">CT</p>,
            cell34: "",
        },
        row6: {
            cell35: "17:30 - 18:30",
            cell36: <p className="ct-mbl">CT</p>,
            cell37: <div className="cellSplitted"><p className="ct-mbl">CT</p> <p className="jjk-mbl">JJK</p></div>,
            cell38: <p className="ct-mbl">CT</p>,
            cell39: <div className="cellSplitted"><p className="ct-mbl">CT</p> <p className="jjk-mbl">JJK</p></div>,
            cell40: <div className="cellSplitted"><p className="ct-mbl">CT</p> <p className="ctk-mbl">CTK</p></div>,
            cell41: "",
        },
        row7: {
            cell42: "18:30 - 19:30",
            cell43: <p className="ct-mbl">CT</p>,
            cell44: <p className="ct-mbl">CT</p>,
            cell45: <p className="ct-mbl">CT</p>,
            cell46: <p className="ct-mbl">CT</p>,
            cell47: <p className="ct-mbl">CT</p>,
            cell48: "",
        },
        row8: {
            cell49: "19:30 - 20:30",
            cell50: <p className="ct-mbl">CT</p>,
            cell51: <p className="ct-mbl">CT</p>,
            cell52: <p className="ct-mbl">CT</p>,
            cell53: <p className="ct-mbl">CT</p>,
            cell54: <p className="ct-mbl">CT</p>,
            cell55: "",
        },
        row9: {
            cell56: "20:30 - 21:30",
            cell57: <p className="ct-mbl">CT</p>,
            cell58: <div className="cellSplitted"><p className="ct-mbl">CT</p> <p className="jj-mbl">JJ</p></div>,
            cell59: <p className="ct-mbl">CT</p>,
            cell60: <p className="ct-mbl">CT</p>,
            cell61: <div className="cellSplitted"><p className="ct-mbl">CT</p> <p className="jj-mbl">JJ</p></div>,
            cell62: "",
        },

    },

}

export default text