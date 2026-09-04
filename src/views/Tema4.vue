<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Formulación de propuestas de mejora y documentación técnica

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema4/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 La información obtenida durante el monitoreo agrícola adquiere mayor utilidad cuando puede convertirse en acciones concretas para mejorar el manejo del cultivo y el proceso de gestión de la información. Esta unidad orienta al aprendiz en la utilización de los resultados obtenidos durante las etapas de captura, organización, procesamiento y análisis, con el propósito de formular propuestas sustentadas en evidencias y documentar de manera clara las actividades realizadas.
    
    p.mb-0(data-aos="fade-right") La formulación de propuestas de mejora requiere comprender que el monitoreo no termina con la obtención de datos o la elaboración de gráficos y mapas. Los resultados deben contribuir a identificar situaciones que requieren atención, establecer prioridades y definir acciones que permitan responder a las condiciones observadas en el sistema productivo. Por esta razón, las propuestas deben estar relacionadas con la información disponible y considerar las características particulares del cultivo, las condiciones del entorno y los recursos existentes.


    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Elaboración del plan de manejo integrado a partir del análisis de información

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/2.png')
      .col-lg-8
        .bg2.p-lg-5.p-4.mb-4 
          p.mb-0 El plan de manejo integrado es un instrumento que permite organizar y orientar las acciones destinadas al manejo de plagas, enfermedades y arvenses presentes en el cultivo. Su elaboración parte de la información obtenida durante el monitoreo y de los resultados derivados de su procesamiento y análisis.
        p.mb-4 El plan debe permitir pasar de la identificación de una situación a la definición de qué se debe hacer, cómo se realizará, cuándo se realizará y cómo se comprobará su resultado. Para ello, es necesario relacionar los hallazgos del monitoreo con las características del cultivo y con las alternativas de manejo técnicamente disponibles.
        p.mb-0 Antes de formular las acciones, es necesario establecer un diagnóstico de la situación, en el cual se describan las principales condiciones encontradas. Este diagnóstico puede considerar la presencia y distribución de organismos, niveles de afectación, comportamiento de las variables monitoreadas, condiciones ambientales relacionadas y antecedentes disponibles del cultivo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 10.
          | Estructura del plan de manejo integrado
        .tabla-a.tab1
          table
            thead
              tr
                th Elemento
                th Descripción
            tbody
              tr
                td Diagnóstico de la situación
                td Describe las condiciones encontradas en el cultivo a partir de la información disponible.
              tr
                td Variables analizadas
                td Identifica las variables utilizadas para comprender la situación encontrada.
              tr
                td Problemas identificados
                td Señala las situaciones que requieren atención o intervención.
              tr
                td Objetivos de manejo
                td Define qué se espera lograr mediante las acciones propuestas.
              tr
                td Alternativas de intervención
                td Presenta las opciones técnicamente disponibles para atender los problemas identificados.
              tr
                td Actividades
                td Detalla las acciones que deben realizarse.
              tr
                td Responsables
                td Define quién estará encargado de ejecutar o supervisar las actividades.
              tr
                td Recursos
                td Identifica los equipos, materiales, herramientas y demás recursos necesarios.
              tr
                td Cronograma
                td Establece cuándo se desarrollarán las actividades.
              tr
                td Indicadores de seguimiento
                td Permite comprobar posteriormente si las acciones alcanzaron los resultados esperados.

    p.mb-0(data-aos="fade-left") El plan debe mantener una relación lógica entre el problema identificado, la información analizada, la acción propuesta y el resultado esperado. No se trata solamente de enumerar actividades, sino de justificar técnicamente por qué son necesarias y cómo responden a las condiciones observadas durante el monitoreo.
    p.mb-0 Además, el plan debe considerar las características del sistema productivo y las alternativas disponibles para el manejo integrado, procurando que las decisiones se fundamenten en información confiable y en procedimientos técnicos aplicables.


    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Formulación de propuestas de mejora para la gestión de datos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema4/3.png')
      .col-lg-9
        p.mb-4 Las propuestas de mejora tienen como finalidad fortalecer los procesos relacionados con la captura, organización, procesamiento, análisis y utilización de la información agrícola. Estas propuestas surgen cuando el análisis del proceso permite identificar situaciones que pueden mejorarse o que están dificultando la obtención de información confiable y útil.
        .row
          .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/tema4/4.svg')
          .col-lg-7.ps-lg-0(data-aos="fade-left")
            .bg9.mb-0.p-4
              p.mb-0.mx-lg-3 Por ejemplo, una propuesta puede formularse cuando se observa que los registros presentan errores frecuentes, que los formatos utilizados son difíciles de diligenciar, que existe información que no se encuentra organizada adecuadamente o que se presentan dificultades para consultar datos históricos.  Una propuesta de mejora debe partir de una situación real y comprobable. Por esta razón, es importante describir claramente qué ocurre, presentar la evidencia disponible y establecer una acción que permita solucionar o disminuir el problema.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 11.
          | Elementos para la formulación de propuestas de mejora
        .tabla-a.tab1
          table
            thead
              tr
                th Elemento
                th Descripción
            tbody
              tr
                td Situación identificada
                td Explica qué problema o dificultad se encontró.
              tr
                td Evidencia del problema
                td Presenta los datos, registros u observaciones que demuestran la situación.
              tr
                td Causa o causas posibles
                td Busca explicar por qué puede estar ocurriendo el problema.
              tr
                td Acción de mejora
                td Define qué se propone realizar para solucionar o disminuir la situación.
              tr
                td Recursos requeridos
                td Identifica los elementos necesarios para implementar la mejora.
              tr
                td Responsable
                td Determina quién realizará o coordinará la acción.
              tr
                td Tiempo de implementación
                td Establece el período previsto para desarrollar la mejora.
              tr
                td Indicador de seguimiento
                td Permite comprobar si la acción está produciendo cambios.
              tr
                td Resultado esperado
                td Describe qué se espera obtener después de aplicar la mejora.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-7
        p.mb-4 Una propuesta adecuada debe ser realista, clara, medible y relacionada con la situación encontrada. También debe considerar los recursos disponibles y las condiciones en las que se desarrolla el monitoreo.
        p.mb-4 Por ejemplo, si se identifica que los registros de campo presentan información incompleta, una posible propuesta podría consistir en ajustar el formato de captura, establecer campos obligatorios y capacitar a las personas responsables de diligenciarlo. Posteriormente, mediante un indicador, podría verificarse si disminuyó la cantidad de registros incompletos.
        p.mb-0 De esta manera, la formulación de propuestas permite transformar las dificultades identificadas durante el proceso en acciones concretas de mejoramiento.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/5.png')


    separador
    #t_4_3.titulo-segundo.mb-5
      h2 4.3 Documentación técnica y aplicación de manuales de operación
    
    p.mb-5(data-aos="fade-left") La documentación técnica permite conservar evidencia organizada de las actividades realizadas, la información obtenida, los procedimientos aplicados y los resultados alcanzados durante el proceso de monitoreo. Una adecuada documentación facilita consultar nuevamente la información y comprender cómo se desarrolló cada etapa. Dependiendo de las características del proceso, pueden generarse diferentes productos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.mb-lg-0.mb-4
        .row
          .col-lg-6.col-md-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Informes técnicos. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Fichas de registro. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Bases de datos. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Mapas. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Tablas.
          .col-lg-6.col-md-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Gráficos. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Reportes de análisis. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Planes de manejo.
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Propuestas de mejora. 
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Registros de seguimiento.
      .col-lg-6
        img(src='@/assets/curso/tema4/6.svg')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/7.png')
      .col-lg-8
        .bg2.p-lg-5.p-4.mb-4 
          p.mb-3 Cada documento debe presentar información clara y organizada. Además, debe permitir establecer una relación entre la información utilizada, el procedimiento realizado y el resultado obtenido.
          p.mb-0 Los manuales de operación son documentos que proporcionan instrucciones para utilizar correctamente determinados equipos, programas, herramientas o procedimientos. Su consulta es especialmente importante cuando se trabaja con equipos tecnológicos utilizados para la captura o procesamiento de información.
        p.mb-3 Por ejemplo, antes de utilizar un equipo de captura de datos, un receptor GPS/GNSS o un dispositivo de medición, el aprendiz debe consultar las instrucciones correspondientes para conocer su configuración, funcionamiento, condiciones de uso y recomendaciones del fabricante.
        p.mb-0 La aplicación de los manuales permite reducir errores derivados del uso incorrecto de los equipos y contribuye a que las actividades se desarrollen de acuerdo con las especificaciones establecidas.

    p.mb-0(data-aos="fade-right") La documentación técnica debe caracterizarse por ser clara, organizada, verificable, actualizada y coherente con la información utilizada. Cuando sea necesario realizar modificaciones, estas deben quedar registradas para conservar la trazabilidad del proceso.


    separador
    #t_4_4.titulo-segundo.mb-5
      h2 4.4 Presentación de resultados y seguimiento de las acciones de mejora

    p.mb-5(data-aos="fade-left") La etapa final del proceso permite organizar y comunicar los principales hallazgos del monitoreo, así como valorar las acciones implementadas a partir de la información analizada. Su desarrollo facilita reconocer los avances alcanzados, identificar aspectos que requieren atención y establecer elementos para dar continuidad al proceso de mejoramiento del manejo integrado del cultivo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema4/8.png')

    strong.tig(data-aos="fade-left") a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    | La presentación de resultados permite comunicar de manera clara los principales hallazgos obtenidos durante el procesamiento y análisis de la información. Para ello pueden utilizarse diferentes recursos, dependiendo del tipo y cantidad de datos disponibles. Los resultados pueden presentarse mediante:

    .row.justify-content-center.align-items-center.mb-5.mt-5(data-aos="fade-right")
      .col-lg-6.mb-lg-0.mb-4
        .row
          .col-lg-6.col-md-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Informes. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Tablas. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Bases de datos. 
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Fichas técnicas. 
          .col-lg-6.col-md-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Gráficos. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Mapas. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Presentaciones digitales. 
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Reportes de monitoreo. 
      .col-lg-6
        img(src='@/assets/curso/tema4/6.svg')

    p.mb-5(data-aos="fade-right") Una presentación adecuada debe permitir que otras personas comprendan qué se observó, qué información se analizó, qué resultados se obtuvieron y qué significado tienen esos resultados.

    .titulo-acciones.mb-5(data-aos="fade-left")
      h4.mb-2 Es importante diferenciar tres conceptos:
      .barra-dots.d-flex.align-items-center
        span.dot
        span.dot
        .barra
    
    p.mb-5(data-aos="fade-right") Para presentar correctamente la información obtenida durante un proceso de monitoreo agrícola es importante diferenciar entre dato, resultado e interpretación. Aunque estos tres conceptos están relacionados, cada uno cumple una función diferente. El dato corresponde a la información que se obtiene directamente durante la observación o medición; el resultado surge después de organizar o procesar esos datos; y la interpretación permite explicar qué significa el resultado en relación con las condiciones observadas en el cultivo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderB.slib(:datos="datosSlyder").bg10.p-lg-5.p-4

    p.mb-5(data-aos="fade-right") En el manejo integrado de plagas, enfermedades y arvenses, estos tres elementos se relacionan de manera consecutiva. Primero se obtienen los datos durante el monitoreo, posteriormente se organizan y procesan para obtener resultados y finalmente se interpretan para comprender la situación del cultivo y apoyar la toma de decisiones. Mantener esta diferencia permite presentar la información de manera clara y evita confundir un valor registrado con una conclusión técnica.

    .tarjeta.color-acento-coo.p-4.p-lg-5.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-lg-5.col-md-7.col-8.mb-4.mb-lg-0
          img.img-t.img-a(src='@/assets/curso/tema4/12.svg')
        .col-lg-7
          p.mb-0 Por ejemplo, durante un monitoreo se registran 5, 8, 10, 12 y 15 individuos de una plaga en cinco puntos diferentes. Estos valores corresponden a los datos obtenidos en campo. Al procesarlos se puede determinar que el promedio es de 10 individuos por punto, lo cual constituye el resultado. Finalmente, al comparar los puntos se puede observar que la mayor cantidad de individuos se concentra en determinados sectores del lote; esta explicación corresponde a la interpretación y puede servir como apoyo para definir las acciones posteriores de manejo.
    
    p.mb-5(data-aos="fade-right") De esta manera, la correcta diferenciación entre dato, resultado e interpretación permite que la información del monitoreo sea comunicada de forma ordenada, comprensible y técnicamente sustentada.

    p.mb-5(data-aos="fade-left") #[b Nota:] la presentación de resultados debe evitar conclusiones que no estén respaldadas por la información disponible. El aprendiz debe aprender a diferenciar entre lo que realmente muestran los datos y las posibles explicaciones que requieren una revisión adicional.

    h3.mb-4(data-aos="fade-right") b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Seguimiento de las acciones de mejora
    
    p.mb-4(data-aos="fade-left") El seguimiento permite comprobar si las acciones propuestas fueron realmente implementadas y si produjeron los resultados esperados. Para realizarlo es necesario establecer previamente qué se va a revisar, quién será responsable, cuándo se realizará la revisión y qué indicador permitirá comprobar el avance.
    p.mb-5(data-aos="fade-right") Por ejemplo, si se propone mejorar la calidad de los registros de monitoreo, el seguimiento puede comparar la cantidad de registros incompletos antes y después de implementar la acción de mejora. De esta manera, se puede determinar si la propuesta produjo un cambio positivo. El seguimiento puede incluir:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0  Definición del indicador. 
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Establecimiento de una situación inicial. 
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Implementación de la acción de mejora. 
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0  Recolección de nueva información. 
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Comparación de los resultados. 
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Identificación de avances o dificultades. 
          li.d-flex.mb-0
            i.fas.fa-check
            p.mb-0 Definición de nuevas acciones cuando sean necesarias.
      .col-lg-7
        img(src='@/assets/curso/tema4/13.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/tema4/14.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg1.mb-0.p-4.p-lg-4
          img.img-t.mb-4.mx-lg-4.mt-lg-4(src='@/assets/curso/tema4/15.svg', alt='')
          p.mb-4.mx-lg-4 El seguimiento convierte el monitoreo en un proceso continuo de aprendizaje y mejoramiento, en el cual la información obtenida permite evaluar las acciones realizadas y generar nuevas decisiones. De esta manera, el aprendiz desarrolla la capacidad de utilizar los datos no solamente para describir lo que ocurre en el cultivo, sino también para proponer mejoras, documentarlas, evaluar sus resultados y contribuir al manejo integrado de plagas, enfermedades y arvenses.
          p.mb-0.mx-lg-4.mb-lg-3 Este componente permitió fortalecer las capacidades necesarias para gestionar, procesar, verificar y analizar la información obtenida durante el monitoreo agrícola, reconociendo la importancia de contar con datos organizados, confiables y útiles para la toma de decisiones. El aprendiz desarrolló conocimientos relacionados con la captura y organización de información, el uso de herramientas estadísticas, geográficas y digitales, así como la validación, depuración e interpretación de variables productivas y fitosanitarias.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 3.
          | Proceso de gestión, análisis y mejoramiento de la información
        img(src='@/assets/curso/tema4/16.svg', alt='')
    
    p.mb-0(data-aos="fade-left") Asimismo, se fortalecieron las competencias para formular planes de manejo, proponer acciones de mejora y documentar los resultados del proceso de monitoreo, utilizando la información analizada como soporte para las decisiones técnicas. De esta manera, el componente contribuye al desarrollo de un proceso de monitoreo continuo, en el que los datos se transforman en información útil para mejorar el manejo integrado de plagas, enfermedades y arvenses, optimizar los recursos y favorecer la productividad y sostenibilidad de los sistemas agrícolas.
    

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: '• Dato:',
        texto:
          'Un dato es la información que se obtiene directamente durante una actividad de monitoreo. Puede provenir de una observación, un conteo, una medición realizada con un equipo o un registro efectuado en campo. Por ejemplo, si durante la revisión de un punto del cultivo se encuentran 15 individuos de una plaga, este valor constituye un dato. En esta etapa no se está explicando todavía qué significa la cantidad encontrada; simplemente se está registrando lo observado. Para que el dato sea útil, debe conservar información que permita conocer dónde, cuándo y bajo qué condiciones fue obtenido.',
        imagen: '@/assets/curso/tema4/9.png',
      },
      {
        titulo: '• Resultado:',
        texto:
          'El resultado es la información que se obtiene después de organizar, comparar o procesar los datos recopilados. Permite resumir un conjunto de observaciones y facilita su análisis. Por ejemplo, si se realizan varios puntos de monitoreo y se obtiene un promedio de 10 individuos de una plaga por punto, este valor corresponde a un resultado. Los resultados pueden expresarse mediante promedios, porcentajes, totales, gráficos, tablas, mapas u otras formas de representación, dependiendo del tipo de información analizada.',
        imagen: '@/assets/curso/tema4/10.png',
      },
      {
        titulo: '• Interpretación:',
        texto:
          'La interpretación consiste en explicar de manera sencilla qué significa un resultado teniendo en cuenta las condiciones del cultivo y el objetivo del monitoreo. Por ejemplo, si el análisis muestra que algunos puntos presentan una mayor cantidad de individuos de una plaga que otros, la interpretación puede indicar que la presencia de la plaga se encuentra concentrada en determinadas zonas del lote. La interpretación debe estar sustentada en la información disponible y evitar conclusiones que no puedan ser respaldadas por los datos.',
        imagen: '@/assets/curso/tema4/11.png',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
