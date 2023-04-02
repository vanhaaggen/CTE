import React from 'react';
import ES_LEGAL from './legals/ES_legal';
import CAT_LEGAL from './legals/CAT_legal';
import ES_PRIVACY from './legals/ES_privacy';
import CAT_PRIVACY from './legals/CAT_privacy';

const text = {
  navBar: {
    acronym: 'CTE',
    brand1: 'Crosstraining',
    brand2: 'Empordà',
  },

  EN: {
    navbar: {
      who: 'Who we are',
      what: 'What we do',
      schedule: 'Schedule',
      price: 'Rates',
      contact: 'Contact',
      home: 'Home',
      legal: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      news: 'News',
    },
    header: (
      <p className="quote">
        BE YOUR
        <br />
        BETTER
        <br />
        VERSION
      </p>
    ),
    quote: 'He Conquers Who Conquers Himself ',
    sectionNews: {
      text: '',
      url: 'https://youtu.be/CzMxdxKCikY',
    },
    stripeText: [
      <p className="stripeText">
        We call the gym <span className="stripeText___box1">BOX</span>
      </p>,
      <p className="stripeText">
        We call the trainings <span className="stripeText___box2">WODs</span>
      </p>,
      <p className="stripeText">
        We call the subscribers{' '}
        <span className="stripeText___box3">Family</span>
      </p>,
      <p className="stripeText">
        We call the suffering a{' '}
        <span className="stripeText___box4">Joyful</span> experience
      </p>,
    ],
    sectionWho: {
      par1: (
        <p className="who-divisor__paragraph--size">
          We are a Crosstraining gym located <span className="fix">on</span>{' '}
          <b>Calle dels Arboços 4 in Vulpellac.</b>
        </p>
      ),

      par2: (
        <p className="who-divisor__paragraph--size">
          We will help you with our classes to <b>unlock</b> your full potential
          through <b>high intensity interval</b> (HIIT) and functional training
          adapted to your sports level. Always paying close attention to the
          correct implementation of the movements.
        </p>
      ),

      par3: "Whether you're just starting or been around for a while, with us you will always have a great time reaching your limit.",

      coach1: {
        name: '- Coach Cristhian -',
        text: 'I will teach you how to move big loads with little risk.',
      },

      coach2: {
        name: '- Coach Gerard -',
        text: 'I will teach you to overcome your weaknesess',
      },
    },
    sectionWhat: {
      par1: (
        <p className="what-para">
          At <b>Crosstraining Empordà</b> we offer functional training or HIITs
          for adults and children.
        </p>
      ),
      par2: (
        <p className="what-para">
          <b>HIITs</b> are high intensity interval training sessions. It is a
          fast, intense training technique that allows you to burn calories like
          no other
        </p>
      ),
      benefits: (
        <p className="what-text-wrapper--text1">
          Benefits for training with us?
        </p>
      ),
      benefits1: (
        <p className="what-text-wrapper--text2">
          <i>You will gain...</i>
        </p>
      ),
      icons: [
        'Strength',
        'Agility',
        'Flexibility',
        'Speed',
        'Balance',
        'Condition',
      ],
      par3: [
        <p key={`what-para-3-1`} className="what-para-third">
          If you're <b>curious</b>,
        </p>,
        <p key={`what-para-3-2`} className="what-para-third">
          come and try a class
        </p>,
      ],
      par4: (
        <p className="what-para-fourth">
          Call us ☎{' '}
          <span className="what-para-fourth--phone-num">659 53 37 21</span>
        </p>
      ),
      o: <span>or</span>,
      contactLink: 'Send us an email ✉',
    },
    sectionSchedule: {
      daysOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      daysOfWeekMobile: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      covidMssg: '*Activities canceled under COVID restrictions',
    },
    sectionPrice: {
      fee: {
        child: 'Morning fee',
        basic: 'Basic fee',
        ticket: 'Drop ins',
      },
      child: {
        content1: {
          text: '9 session per month',
          price: '45€',
        },
        content2: {
          text: '13 session per month AM',
          price: '50€',
        },
        content3: {
          text: 'Unlimited AM',
          price: '57€',
        },
      },
      basic: {
        content1: {
          text: '9 session per month',
          price: '48€',
        },

        content2: {
          text: '13 session per month',
          price: '55€',
        },

        content3: {
          text: '17 session per month',
          price: '62€',
        },
        content4: {
          text: 'Unlimited',
          price: '69€',
        },
        content5: {
          text: 'Unlimited Open Box',
          price: '60€',
        },
      },
      bond: {
        content1: {
          text: '1 session',
          price: '8€',
        },
        content2: {
          text: '5 sessions',
          price: '35€',
        },
        content3: {
          text: '10 sessions',
          price: '60€',
        },
      },
      offer: {
        text: 'Students, retirees, new members, family members',
        discount: '-5%',
      },
      info: {
        text: 'Enrolment',
        price: '20€',
        vat: 'VAT included in all fees',
      },
    },
    sectionContact: {
      title1: 'Any doubt?',
      title2: 'Leave us a message',
      name: 'Name',
      email: 'E-mail',
      message: 'Your message here...',
      send: 'Submit',
      sending: 'We are sending your message',
      sent: (
        <div className="contact-sent-wrap">
          <p className="contact-p contact-sent-wrap--first">
            Thanks for contacting us ❤
          </p>
          <p className="contact-p contact-sent-wrap--second">
            We will contact you shortly.
          </p>
        </div>
      ),
      error: (
        <p>
          Seems that something has gone <b>wrong</b>...
        </p>
      ),
      tryagain: 'try again',
      goback: 'go back',
      legal:
        'By clicking on the “Submit” button you are confirming that you have read and accepted our ',
      downloadtitle: "If we've already convinced you!",
      downloadtitle1: 'download our registration form',
    },
    sectionInsta: {
      pretitle: 'follow us ',
      title: (
        <a
          className="insta-title"
          href="https://www.instagram.com/crosstrainingemporda/"
        >
          #crosstrainingemporda
        </a>
      ),
    },
    footer: {
      follow: 'follow us:',
    },
  },

  ES: {
    navbar: {
      who: 'Quien somos?',
      what: 'Que hacemos?',
      schedule: 'Horario',
      price: 'Cuotas',
      contact: 'Contacto',
      home: 'Volver',
      legal: 'Aviso Legal',
      privacy: 'Política de Privacidad',
      news: 'Novedades',
    },
    header: (
      <p className="quote">
        SE TU
        <br />
        MEJOR
        <br />
        VERSIÓN
      </p>
    ),
    quote: 'Conquista el que se vence a si mismo',
    sectionNews: {
      text: '',
      url: 'https://youtu.be/CzMxdxKCikY',
    },
    stripeText: [
      <p className="stripeText">
        Al gimnasio lo llamamos <span className="stripeText____box1">BOX</span>
      </p>,
      <p className="stripeText">
        A los entrenamientos los llamamos{' '}
        <span className="stripeText____box2">WODs</span>
      </p>,
      <p className="stripeText">
        A los abonados los llamamos{' '}
        <span className="stripeText____box3">Familia</span>
      </p>,
      <p className="stripeText">
        A los entrenadores los llamamos{' '}
        <span className="stripeText____box4">Coaches</span>
      </p>,
    ],
    sectionWho: {
      par1: (
        <p className="who-divisor__paragraph--size">
          Somos un gimnasio de <span className="fix">Crosstraining</span>{' '}
          situado en la <b>calle dels Arboços 4 de Vulpellac.</b>
        </p>
      ),
      par2: (
        <p className="who-divisor__paragraph--size">
          Te ayudaremos con nuestras <b>clases dirigidas</b> a liberar tu máximo
          potencial mediante <b>entrenos intervalicos de alta intensidad</b>{' '}
          (HIIT) y funcionales adaptados a tu nivel deportivo. Siempre prestando
          mucha atención a la correcta implementación de los movimientos.
        </p>
      ),

      par3: 'Sea acabando de empezar o llevando ya un tiempo, con nosotros siempre te lo pasaras a lo grande llegando a tu limite.',

      coach1: {
        name: '- Coach Cristhian - ',
        text: 'Yo te enseñaré a mover pesos altos sin riesgo.',
      },

      coach2: {
        name: '- Coach Gerard -',
        text: 'Yo te enseñaré a superar tus debilidades.',
      },
    },
    sectionWhat: {
      par1: (
        <p className="what-para">
          En <b>Crosstraining Empordà</b> te ofrecemos entrenos funcionales o
          HIITs para grandes y pequeños.
        </p>
      ),
      par2: (
        <p className="what-para">
          Los <b>HIIT</b> son entrenamientos intervalicos de alta intensidad. Es
          una técnica de entreno rápida, intensa y que et permite quemar
          calorías como ninguna otra.
        </p>
      ),
      benefits: (
        <p className="what-text-wrapper--text1">
          Los beneficios de entrenear con nosotros?
        </p>
      ),
      benefits1: (
        <p className="what-text-wrapper--text2">
          <i>ganarás en...</i>
        </p>
      ),
      icons: [
        'Fuerza',
        'Agilidad',
        'Flexibilidad',
        'Velocidad',
        'Equilibrio',
        'Condición',
      ],
      par3: [
        <p key={`what-para-3-1`} className="what-para-third">
          Si tienes <b>curiosidad</b>,
        </p>,
        <p key={`what-para-3-2`} className="what-para-third">
          ven a probar una clase.
        </p>,
      ],
      par4: (
        <p className="what-para-fourth">
          Llamanos ☎{' '}
          <span className="what-para-fourth--phone-num">659 53 37 21</span>
        </p>
      ),
      o: <span>o</span>,
      contactLink: 'Envianos un mail ✉',
    },
    sectionSchedule: {
      daysOfWeek: [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ],
      daysOfWeekMobile: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      covidMssg: '*Actividades canceladas según restricciones COVID',
    },
    sectionPrice: {
      fee: {
        child: 'Cuotas de mañanas',
        basic: 'Cuotas básicas',
        ticket: 'Drop ins',
      },
      child: {
        content1: {
          text: '9 sesiones al mes',
          price: '45€',
        },
        content2: {
          text: '13 sesiones al mes',
          price: '50€',
        },
        content3: {
          text: 'Unlimited AM',
          price: '57€',
        },
      },
      basic: {
        content1: {
          text: '9 sesiones al mes',
          price: '48€',
        },

        content2: {
          text: '13 sesiones al mes',
          price: '55€',
        },

        content3: {
          text: '17 sesiones al mes',
          price: '62€',
        },
        content4: {
          text: 'Ilimitado',
          price: '69€',
        },
        content5: {
          text: 'Ilimitado Open Box',
          price: '60€',
        },
      },
      bond: {
        content1: {
          text: '1 sesión',
          price: '8€',
        },
        content2: {
          text: '5 sesiones',
          price: '35€',
        },
        content3: {
          text: '10 sesiones',
          price: '60€',
        },
      },
      offer: {
        text: 'Estudiantes, jubilados, nuevos socios, familiares de socios ',
        discount: '-5%',
      },
      info: {
        text: 'Matricula ',
        price: '20€',
        vat: 'IVA incluido en todas las cuotas',
      },
    },
    sectionInsta: {
      pretitle: 'síguenos ',
      title: (
        <a
          className="insta-title"
          href="https://www.instagram.com/crosstrainingemporda/"
        >
          #crosstrainingemporda
        </a>
      ),
    },
    sectionContact: {
      title1: 'Alguna duda?',
      title2: 'Dejanos un mensaje',
      name: 'Nombre',
      email: 'E-mail',
      message: 'Tu mensaje aqui...',
      send: 'Enviar',
      sending: 'Estamos enviando tu mensaje',
      sent: (
        <div className="contact-sent-wrap">
          <p className="contact-p contact-sent-wrap--first">
            Gracies por contactar con nosotros ❤
          </p>
          <p className="contact-p contact-sent-wrap--second">
            En breve nos pondremos en contacto contigo.
          </p>
        </div>
      ),
      error: (
        <p>
          Parece que algo <b>no</b> ha salido bien...
        </p>
      ),
      tryagain: 'volver a probar',
      goback: 'atrás',
      legal:
        'Al hacer click sobre el botón “Enviar” estás confirmando que has leído y aceptado nuestra ',
      downloadtitle: 'Si ya te hemos convencido!',
      downloadtitle1: 'descárgate el formulario de inscripción',
    },
    footer: {
      follow: 'Síguenos:',
    },
    legal: ES_LEGAL,
    privacy: ES_PRIVACY,
  },

  CAT: {
    navbar: {
      who: 'Qui som?',
      what: 'Que fem?',
      schedule: 'Horari',
      price: 'Quotes',
      contact: 'Contacte',
      home: 'Inici',
      legal: 'Avís Legal',
      privacy: 'Politica de Privacitat',
      news: 'Novetats',
    },
    header: (
      <p className="quote">
        SIGUES
        <br />
        LA TEVA
        <br />
        MILLOR
        <br />
        VERSIÓ
      </p>
    ),
    quote: 'Conquereix el que es venç a si mateix',
    sectionNews: {
      text: '',
      url: 'https://youtu.be/CzMxdxKCikY',
    },
    stripeText: [
      <p className="stripeText">
        Al gimnàs en diem <span className="stripeText___box1">BOX</span>
      </p>,
      <p className="stripeText">
        Als entrenaments els anomenem{' '}
        <span className="stripeText___box2">WOD</span>
      </p>,
      <p className="stripeText">
        Als abonats els anomenem{' '}
        <span className="stripeText___box3">Familia</span>
      </p>,
      <p className="stripeText">
        Als entrenadors els anomenem{' '}
        <span className="stripeText___box4">Coaches</span>
      </p>,
    ],
    sectionWho: {
      par1: (
        <p className="who-divisor__paragraph--size">
          Som un gimnàs de Crosstraining <span className="fix">situat</span> al{' '}
          <b>carrer dels Arboços 4 a Vulpellac.</b>
        </p>
      ),
      par2: (
        <p className="who-divisor__paragraph--size">
          T'ajudarem en les nostres <b>classes dirigides</b> a alliberar el teu
          màxim potencial mitjançant{' '}
          <b>entrenaments intervàl·lics d'alta intensitat</b> (
          <span className="hiit">HIIT</span>) i funcionals adaptats al teu
          nivell esportiu. Sempre prestant molta atenció al correcte
          desenvolupament del moviment.
        </p>
      ),

      par3: "Sia acabant de començar o portant temps, amb nosaltres sempre t'ho passaràs en gran arribant al teu límit.",

      coach1: {
        name: '- Coach Cristhian -',
        text: "Jo t'ensenyaré a moure pesos alts sense risc",
      },

      coach2: {
        name: '- Coach Gerard -',
        text: "Jo t'ensenyaré a superar les teves debilitats.",
      },
    },
    sectionWhat: {
      par1: (
        <p className="what-para">
          A <b>Crosstraining Empordà</b> t'oferim entrenaments funcionals o
          HIITS, per a grans i petits.
        </p>
      ),
      par2: (
        <p className="what-para">
          Els <b>HIIT</b> son entrenaments intervàl·lics d'alta intensitat. És
          una tecnica d'entrenament ràpida, intensa i que et permet cremar
          calories com ninguna altre.
        </p>
      ),
      benefits: (
        <p className="what-text-wrapper--text1">
          Els beneficis d'entrenar amb nosaltres?
        </p>
      ),
      benefits1: (
        <p className="what-text-wrapper--text2">
          <i>guanyaràs en...</i>
        </p>
      ),
      icons: [
        'Força',
        'Agilitat',
        'Flexibilitat',
        'Velocitat',
        'Equilibri',
        'Condició',
      ],
      par3: [
        <p key={`what-para-3-1`} className="what-para-third">
          Si tens <b>curiositat</b>,
        </p>,
        <p key={`what-para-3-2`} className="what-para-third">
          {' '}
          vine a provar una classe.
        </p>,
      ],
      par4: (
        <p className="what-para-fourth">
          Truca'ns ☎{' '}
          <span className="what-para-fourth--phone-num">659 53 37 21</span>
        </p>
      ),
      o: <span>o</span>,
      contactLink: "Envia'ns un mail ✉",
    },
    sectionSchedule: {
      daysOfWeek: [
        'Dilluns',
        'Dimarts',
        'Dimecres',
        'Dijous',
        'Divendres',
        'Dissabte',
      ],
      daysOfWeekMobile: ['Dl', 'Dt', 'Dm', 'Dj', 'Dv', 'Ds'],
      covidMssg: '*Activitats cancel·lades segons restriccions COVID',
    },
    sectionPrice: {
      fee: {
        child: 'Quotes de matins',
        basic: 'Quotes bàsiques',
        ticket: 'Drop ins',
      },
      child: {
        content1: {
          text: '9 sessions al mes',
          price: '45€',
        },
        content2: {
          text: '13 sessions al mes',
          price: '50€',
        },
        content3: {
          text: 'Il·limitat',
          price: '57€',
        },
      },
      basic: {
        content1: {
          text: '9 sessions al mes',
          price: '48€',
        },

        content2: {
          text: '13 sessions al mes',
          price: '55€',
        },

        content3: {
          text: '17 sessions al mes',
          price: '62€',
        },
        content4: {
          text: 'Il·limitat',
          price: '69€',
        },
        content5: {
          text: 'Il·limitat Open Box',
          price: '60€',
        },
      },
      bond: {
        content1: {
          text: '1 sessió',
          price: '8€',
        },
        content2: {
          text: '5 sessions',
          price: '35€',
        },
        content3: {
          text: '10 sessions',
          price: '60€',
        },
      },
      offer: {
        text: 'Estudiants, jubilats, nous socis, familiars de socis ',
        discount: '-5%',
      },
      info: {
        text: 'Matricula ',
        price: '20€',
        vat: 'IVA inclós en totes les quotes',
      },
    },
    sectionInsta: {
      pretitle: 'segueix-nos ',
      title: (
        <a
          className="insta-title"
          href="https://www.instagram.com/crosstrainingemporda/"
        >
          #crosstrainingemporda
        </a>
      ),
    },
    sectionContact: {
      title1: 'Algun dubte?',
      title2: "deixa'ns un missatge",
      name: 'Nom',
      email: 'E-mail',
      message: 'El teu missatge aqui...',
      send: 'Enviar',
      sending: 'Estem enviant el teu missatge',
      sent: (
        <div className="contact-sent-wrap">
          <p className="contact-p contact-sent-wrap--first">
            Gràcies per contactar amb nosaltres ❤
          </p>
          <p className="contact-p contact-sent-wrap--second">
            En breu ens posarem en contacte amb tu.
          </p>
        </div>
      ),
      error: (
        <p>
          Sembla que algo <b>no</b> ha anat bé...
        </p>
      ),
      tryagain: 'tornar a provar',
      goback: 'enrere',
      legal:
        'Al fer clic sobre el botó “Enviar” estàs confirmant que has llegit i acceptat la nostra ',
      downloadtitle: "Si ja t'hem convençut !",
      downloadtitle1: "descarrega't el nostre formulari d'inscripció",
    },
    footer: {
      follow: 'Segueix-nos:',
    },
    legal: CAT_LEGAL,
    privacy: CAT_PRIVACY,
  },
  /*classNames:
    - jjk = Jiu-Jitsu Kids
    - jj = Jiu-Jitsu
    - ctk = CrossTraining Kids
    */
  scheduleContent: {
    row1: {
      cell0: '9:30 - 10:30',
      cell1: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell2: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell3: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell4: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell5: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell6: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
    },
    row2: {
      cell7: '10:30 - 11:30',
      cell9: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell8: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell10: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell11: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell12: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell13: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
    },
    row3: {
      cell14: '11:30 - 15:15',
      cell15: <p className="ob">OPEN BOX</p>,
      cell16: <p className="ob">OPEN BOX</p>,
      cell17: <p className="ob">OPEN BOX</p>,
      cell18: <p className="ob">OPEN BOX</p>,
      cell19: <p className="ob">OPEN BOX</p>,
      cell20: '',
    },
    row4: {
      cell21: '15:15 - 16:15',
      cell22: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell23: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell24: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell25: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell26: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell27: '',
    },
    row5: {
      cell28: '16:30 - 17:30',
      cell29: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell30: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell31: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell32: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell33: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell34: '',
    },
    row6: {
      cell35: '17:30 - 18:30',
      cell36: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell37: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell38: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell39: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell40: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell41: '',
    },
    row7: {
      cell42: '18:30 - 19:30',
      cell43: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell44: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell45: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell46: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell47: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell48: '',
    },
    row8: {
      cell49: '19:30 - 20:30',
      cell50: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell51: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell52: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell53: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell54: (
        <div className="cellSplitted">
          <p className="ct">CROSSTRAINING</p> <p className="ob">OPEN BOX</p>
        </div>
      ),
      cell55: '',
    },
    row9: {
      cell56: '20:30 - 21:30',
      cell57: '',
      cell58: '',
      cell59: '',
      cell60: '',
      cell61: '',
      cell62: '',
    },
  },
  /*classNames:
    - jjk-mbl = Jiu-Jitsu Kids
    - jj-mbl = Jiu-Jitsu
    - ctk-mbl = CrossTraining Kids
    */
  scheduleContentMobile: {
    row1: {
      cell0: '9:30 - 10:30',
      cell1: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell2: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell3: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell4: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell5: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell6: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
    },
    row2: {
      cell7: '10:30 - 11:30',
      cell9: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell8: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell10: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell11: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell12: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell13: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
    },
    row3: {
      cell14: '11:30 - 15:15',
      cell15: <p className="ob-mbl">OB</p>,
      cell16: <p className="ob-mbl">OB</p>,
      cell17: <p className="ob-mbl">OB</p>,
      cell18: <p className="ob-mbl">OB</p>,
      cell19: <p className="ob-mbl">OB</p>,
      cell20: '',
    },
    row4: {
      cell21: '15:15 - 16:15',
      cell23: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell24: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell25: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell22: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell26: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell27: '',
    },
    row5: {
      cell28: '16:30 - 17:30',
      cell30: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell31: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell32: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell29: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell33: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell34: '',
    },
    row6: {
      cell35: '17:30 - 18:30',
      cell36: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell37: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell38: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell39: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell40: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell41: '',
    },
    row7: {
      cell42: '18:30 - 19:30',
      cell43: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell44: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell45: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell46: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell47: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell48: '',
    },
    row8: {
      cell49: '19:30 - 20:30',
      cell50: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell51: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell52: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell53: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell54: (
        <div className="cellSplitted">
          <p className="ct-mbl">CT</p> <p className="ob-mbl">OB</p>
        </div>
      ),
      cell55: '',
    },
    row9: {
      cell56: '20:30 - 21:30',
      cell57: '',
      cell58: '',
      cell59: '',
      cell60: '',
      cell61: '',
      cell62: '',
    },
  },
};

export default text;
