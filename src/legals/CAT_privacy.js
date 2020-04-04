import React from 'react'

const privacy = {
    titles: {
        data: "1. DADES DEL RESPONSABLE DEL TRACTAMENT",
        normativa: "1.1. Normativa aplicable",
        finalidad: "2. FINALITAT DEL TRACTAMENT DE LES DADES PERSONALS",
        plazo: "2.1. Termini de Conservació de les seves dades",
        legitim: "3. LEGITIMACIÓ I DADES RECOLLIDES",
        consentdata: "3.1. Consentiment per tractar les seves dades",
        category: "3.2. Categories de dades",
        medidas: "4. MESURES DE SEGURETAT",
        cesion: "5. CESSIÓ DE DADES",
        derechos: "6. DRETS D'USUARI",
        como: "6.1. Com exercitar els meus drets?",
        consent: "7. CONSENTIMENT PER ENVIAMENT DE COMUNICACIONS ELECTRÒNIQUES"
    },
    data: "Les dades del responsable són les mateixes que apareixen en l'",

    normativa: {
        p1: <p>La nostra Política de Privacitat s'ha dissenyat d'acord amb el <b> Reglament General de Protecció de Dades de la UE 2016/679 de Parlament Europeu </b> i de el Consell, de 27 d'abril de 2016, relatiu a la protecció de les persones físiques pel que fa a el tractament de dades personals ia la lliure circulació d'aquestes dades i pel qual es deroga la Directiva 95/46 / CE (Reglament general de protecció de dades), i la Llei Orgànica 3/2018 de el 5 de desembre, de protecció de dades de caràcter personal i Garantia dels Drets Digitals.</p>,
        p2: <p>A l'facilitar-nos les seves dades, vostè declara haver llegit i conèixer la present Política de Privadesa, prestant el seu consentiment inequívoc i exprés a el tractament de les seves dades personals d'acord a les finalitats i termes aquí expressats.</p>,
        p3: <p>L'Empresa podrà modificar la present Política de Privacitat per adaptar-la a les novetats legislatives, jurisprudencials o d'interpretació de l'Agència Espanyola de Protecció de Dades. Aquestes condicions de privacitat podran ser complementades per l'Avís Legal, Política de Cookies i les condicions generals que, si escau, es recullin per a determinats productes o serveis, si aquest accés suposa alguna especialitat en matèria de protecció de dades de caràcter personal. </p>
    },

    finalidad: {
        p1: <p>El tractament que realitzem de les seves dades personals respon a les següents finalitats:</p>,
        p2: <ul>
            <li className="legals-li">- Proporcionar-li informació relacionada amb els productes i serveis que ofereix la nostra empresa i que detallen en aquest lloc web.</li>
            <li className="legals-li">- Realitzar la contractació dels nostres serveis mitjançant l'acceptació de l'corresponent pressupost / comanda i / o la signatura d'un contracte mercantil.</li>
            <li className="legals-li">- Envia per correu electrònic i / o postal les notícies i novetats sobre la nostra entitat, així com les actualitzacions del nostre catàleg de productes i serveis.</li>
        </ul>
    },
    plazo: <p>Conservarem les seves dades personals des que ens doni el seu consentiment fins que ho revoqui o bé sol·liciti la limitació de l'tractament. En aquests casos, mantindrem les seves dades de manera bloquejada durant els terminis legalment exigits. </p>,

    legitim: <p>La legitimació per al tractament de les seves dades és el consentiment exprés atorgat mitjançant un acte positiu i afirmatiu (omplir el formulari corresponent i marcar la casella d'acceptació d'aquesta política) en el moment de facilitar les seves dades personals.</p>,

    consentdata: <p>A l'omplir els formularis, marcar la casella "Accepto la Política de Privadesa" i fer clic per enviar les dades, o a l'remetre correus electrònics a l'Empresa a través dels comptes habilitades a l'efecte, l'Usuari manifesta haver llegit i acceptat expressament la present política de privacitat, i atorga el seu consentiment inequívoc i exprés a el tractament de les seves dades personals conforme a les finalitats indicades.</p>,

    category: <p>Les dades que es recullen es refereixen a la categoria de dades identificatives, com poden ser: Nom i cognoms, Telèfon, Adreça Postal, Empresa, Correu electrònic, així com l'adreça IP des d'on s'accedeix a l'formulari de recollida de dades.</p>,

    medidas: <p>Dins del nostre compromís per garantir la seguretat i confidencialitat de les seves dades de caràcter personal, l'informem que s'han adoptat les mesures d'índole tècnica i organitzatives necessàries per garantir la seguretat de les dades de caràcter personal i evitar la seva alteració, pèrdua, tractament o accés no autoritzat, tenint en compte l'estat de la tecnologia, la naturalesa de les dades emmagatzemades i els riscos a què estiguin exposats, segons l'Art. 32 de l'RGPD EU 679/2016.</p>,

    cesion: <p>No es preveuen cessions de dades ni transferències internacionals de les seves dades, a excepció de les autoritzades per la legislació fiscal, mercantil i de telecomunicacions així com en aquells casos en què una autoritat judicial ens ho requereixi.</p>,

    derechos: {
        p1: <p>Qualsevol interessat té dret a obtenir confirmació sobre si estem tractant dades personals que li concerneixin, o no. Les persones interessades tenen dret a accedir a les seves dades personals, així com a sol·licitar la rectificació de les dades inexactes o, si escau, sol·licitar la seva supressió quan, entre d'altres motius, les dades ja no sigui necessari per als fins que van ser recollides. En determinades circumstàncies, els interessats podran sol·licitar la limitació de l'tractament de les seves dades, en aquest cas únicament els conservarem per a l'exercici o la defensa de reclamacions. Per motius relacionats amb la seva situació particular, els interessats podran oposar-se a el tractament de les seves dades. El responsable de l'arxiu deixarà de tractar les dades, excepte per motius legítims imperiosos, o l'exercici o la defensa de possibles reclamacions.</p>,

        p2: <p>D'acord amb la legislació vigent té els següents drets: dret a sol·licitar l'accés a les seves dades personals, dret a sol·licitar la seva rectificació o supressió, dret a sol·licitar la limitació del seu tractament, dret a oposar-se a el tractament, dret a la portabilitat dels dades i així mateix, a revocar el consentiment atorgat.</p>

    },

    como: <p>Per exercir els seus drets, ha de dirigir-se a l'responsable, sol·licitant el corresponent formulari per a l'exercici de el dret triat. Opcionalment, pot acudir a l'Autoritat de Control competent per obtenir informació addicional sobre els seus drets. Les dades de contacte per a l'exercici dels seus drets són el telèfon <b> 659 53 37 21 </b> i el correu electrònic: <b> info@crosstrainingemporda.com </b> Recordeu acompanyar una còpia d'un document que ens permeti identificar-lo.</p>,

    consent: <p>Així mateix, i d'acord amb el que estableix la Llei 34/2002, de 11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic, completant el formulari de recollida de dades i marcant la corresponent casella "Accepto" està atorgant el consentiment exprés per enviar-li a la seva adreça de correu electrònic, telèfon, fax o un altre mitjà electrònic a enviament d'informació sobre l'empresa.</p>
}

export default privacy