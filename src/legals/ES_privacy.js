import React from 'react'

const privacy = {
    titles: {
        data: "1. DATOS DEL RESPONSABLE DEL TRATAMIENTO",
        normativa: "1.1. Normativa aplicable",
        finalidad: "2. FINALIDAD DEL TRATAMIENTO DE LOS DATOS PERSONALES",
        plazo: "2.1. Plazo de Conservación de sus datos",
        legitim: "3. LEGITIMACIÓN Y DATOS RECABADOS",
        consentdata: "3.1. Consentimiento para tratar sus datos",
        category: "3.2. Categorías de datos",
        medidas: "4. MEDIDAS DE SEGURIDAD",
        cesion: "5. CESIÓN DE DATOS",
        derechos: "6. DERECHOS DE USUARIO",
        como: "6.1. ¿Cómo ejercitar mis derechos?",
        consent: "7. CONSENTIMIENTO PARA ENVIO DE COMUNICACIONES ELECTRONICAS"
    },
    data: "Los datos del responsable son los mismos que aparecen en el",

    normativa: {
        p1: <p>Nuestra Política de Privacidad se ha diseñado de acuerdo con el <b>Reglamento General de Protección de Datos de la UE 2016/679 del Parlamento Europeo</b> y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE (Reglamento general de protección de datos), y la Ley Orgánica 3/2018 del 5 de diciembre, de Protección de Datos de Carácter Personal y Garantía de los Derechos Digitales.</p>,
        p3: <p>Al facilitarnos sus datos, Usted declara haber leído y conocer la presente Política de Privacidad, prestando su consentimiento inequívoco y expreso al tratamiento de sus datos personales de acuerdo a las finalidades y términos aquí expresados.</p>,
        p3: <p>La Empresa podrá modificar la presente Política de Privacidad para adaptarla a las novedades legislativas, jurisprudenciales o de interpretación de la Agencia Española de Protección de Datos. Estas condiciones de privacidad podrán ser complementadas por el Aviso Legal, Política de Cookies y las Condiciones Generales que, en su caso, se recojan para determinados productos o servicios, si dicho acceso supone alguna especialidad en materia de protección de datos de carácter personal. </p>
    },

    finalidad: {
        p1: <p>El tratamiento que realizamos de sus datos personales responde a las siguientes finalidades:</p>,
        p2: <ul>
            <li className="legals-li">Proporcionarle información relacionada con los productos y servicios que ofrece nuestra empresa y que detallan en este web site.</li>
            <li className="legals-li">Realizar la contratación de nuestros servicios mediante la aceptación del correspondiente presupuesto / pedido y/o la firma de un contrato mercantil.</li>
            <li className="legals-li">Enviarle por correo electrónico y/o postal las noticias y novedades acerca de nuestra entidad, así como las actualizaciones de nuestro catálogo de productos y servicios.</li>
        </ul>
    },
    plazo: <p>Conservaremos sus datos personales desde que nos dé su consentimiento hasta que lo revoque o bien solicite la limitación del tratamiento. En tales casos, mantendremos sus datos de manera bloqueada durante los plazos legalmente exigidos. </p>,

    legitim: <p>La legitimación para el tratamiento de sus datos es el consentimiento expreso otorgado mediante un acto positivo y afirmativo (rellenar el formulario correspondiente y marcar la casilla de aceptación de esta política) en el momento de facilitarnos sus datos personales. </p>,

    consentdata: <p>Al rellenar los formularios, marcar la casilla “Acepto la Política de Privacidad” y hacer clic para enviar los datos, o al remitir correos electrónicos a la Empresa a través de las cuentas habilitadas al efecto, el Usuario manifiesta haber leído y aceptado expresamente la presente política de privacidad, y otorga su consentimiento inequívoco y expreso al tratamiento de sus datos personales conforme a las finalidades indicadas. </p>,

    category: <p>Los datos que se recaban se refieren a la categoría de datos identificativos, como pueden ser: Nombre y Apellidos, Teléfono, Dirección Postal, Empresa, Correo electrónico, así como la dirección IP desde donde accede al formulario de recogida de datos.</p>,

    medidas: <p>Dentro de nuestro compromiso por garantizar la seguridad y confidencialidad de sus datos de carácter personal, le informamos que se han adoptado las medidas de índole técnica y organizativas necesarias para garantizar la seguridad de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que estén expuestos, según el Art. 32 del RGPD EU 679/2016.</p>,

    cesion: <p>No se prevén cesiones de datos ni transferencias internacionales de sus datos, a excepción de las autorizadas por la legislación fiscal, mercantil y de telecomunicaciones así como en aquellos casos en los que una autoridad judicial nos lo requiera.</p>,

    derechos: {
        p1: <p>Cualquier interesado tiene derecho a obtener confirmación sobre si estamos tratando datos personales que le conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sea necesario para los fines que fueron recogidos. En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones. Por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. El Responsable del fichero dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.</p>,

        p2: <p>De acuerdo con la legislación vigente tiene los siguientes derechos: derecho a solicitar el acceso a sus datos personales, derecho a solicitar su rectificación o supresión, derecho a solicitar la limitación de su tratamiento, derecho a oponerse al tratamiento, derecho a la portabilidad de los datos y así mismo, a revocar el consentimiento otorgado.</p>

    },

    como: <p>Para ejercer sus derechos, debe dirigirse al responsable, solicitando el correspondiente formulario para el ejercicio del derecho elegido. Opcionalmente, puede acudir a la Autoridad de Control competente para obtener información adicional acerca de sus derechos. Los datos de contacto para el ejercicio de sus derechos son el teléfono <b>659 53 37 21</b> y el correo electrónico: <b>info@crosstrainingemporda.com</b> Recuerde acompañar una copia de un documento que nos permita identificarle.</p>,

    consent: <p>Así mismo, y de acuerdo con lo establecido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, completando el formulario de recogida de datos y marcando la correspondiente casilla “Acepto” está otorgando el consentimiento expreso para enviarle a su dirección de correo electrónico, teléfono, fax u otro medio electrónico en envío de información acerca de la Empresa.</p>


}

export default privacy