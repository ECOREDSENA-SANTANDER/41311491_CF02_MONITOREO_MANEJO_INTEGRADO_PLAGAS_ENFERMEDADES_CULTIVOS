<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión y captura de información para el monitoreo agrícola
    
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La gestión de la información constituye una etapa fundamental dentro del monitoreo agrícola, debido a que los datos obtenidos durante las actividades de campo deben registrarse, organizarse, almacenarse y conservarse de manera estructurada para facilitar su posterior procesamiento y análisis. Una información adecuadamente gestionada permite mantener la trazabilidad de los registros, reducir errores, facilitar las consultas y generar información útil para apoyar las decisiones relacionadas con el manejo integrado de plagas, enfermedades y arvenses.

    p.mb-0(data-aos="fade-left") La gestión de información comprende diferentes actividades que se desarrollan desde el momento en que se obtiene un dato hasta su almacenamiento y utilización. Entre ellas se encuentran el diligenciamiento de formatos, la organización de bases de datos, la incorporación de información descriptiva mediante metadatos, la clasificación de archivos, la realización de copias de seguridad y el establecimiento de mecanismos que permitan recuperar la información cuando sea necesario.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Registros y formatos para la captura de información

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .bg2.p-lg-5.p-4.mb-4 
          p.mb-0 Los registros constituyen herramientas destinadas a documentar de manera ordenada la información obtenida durante las actividades de monitoreo. Su finalidad es conservar evidencia de las observaciones, mediciones y condiciones bajo las cuales fueron obtenidos los datos. Un registro correctamente diligenciado facilita posteriormente la revisión, comparación y análisis de la información.
        p.mb-0 Los formatos de captura pueden ser físicos o digitales y deben diseñarse de acuerdo con las variables que serán registradas. En el manejo integrado de plagas, enfermedades y arvenses pueden incluir información relacionada con la identificación del lote o área evaluada, fecha y hora de observación, estado del cultivo, variable evaluada, resultado de la medición, unidad de medida, observaciones y responsable de la captura.
        p.mb-0 Un formato debe presentar una estructura clara y evitar campos innecesarios que puedan dificultar su diligenciamiento. Los campos deben utilizar nombres comprensibles y, cuando sea necesario, establecer opciones predeterminadas para facilitar la uniformidad de los registros.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/2.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Elementos básicos de un formato de captura
        .tabla-a.tab1
          table
            thead
              tr
                th Elemento
                th Descripción
            tbody
              tr
                td Identificación
                td Código o nombre que permite identificar el lote, parcela o punto de monitoreo.
              tr
                td Fecha y hora
                td Momento en que se realiza la captura de información.
              tr
                td Variable
                td Característica que está siendo observada o medida.
              tr
                td Unidad de medida
                td Unidad utilizada para expresar el resultado.
              tr
                td Resultado
                td Valor obtenido durante la observación o medición.
              tr
                td Ubicación
                td Información espacial asociada al registro cuando corresponda.
              tr
                td Observaciones
                td Información adicional relevante para interpretar el dato.
              tr
                td Responsable
                td Persona encargada de realizar el registro.

    p.mb-0(data-aos="fade-right") La estandarización de los formatos permite que diferentes jornadas de monitoreo generen información comparable. Por esta razón, es importante mantener criterios uniformes para nombres de variables, unidades de medida, códigos, fechas y categorías.


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Estructuración de bases de datos para el monitoreo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/3.png')
      .col-lg-9
        .row.mb-4
          .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/tema1/4.svg')
          .col-lg-7.ps-lg-0(data-aos="fade-left")
            .bg44.mb-0.p-4
              p.mb-0.mx-lg-3 Una base de datos es un conjunto organizado de información que permite almacenar, consultar, actualizar y relacionar registros de manera sistemática. En el monitoreo agrícola, las bases de datos facilitan el manejo de grandes cantidades de información obtenida en diferentes fechas, lotes, puntos de observación y condiciones productivas.
        p.mb-0 La estructuración de una base de datos comienza con la identificación de la información que será almacenada. Cada registro debe contener los campos necesarios para describir el dato y permitir su posterior análisis. Por ejemplo, una base de datos puede incluir código del lote, fecha, punto de monitoreo, variable evaluada, valor observado, unidad de medida y observaciones.

    p.mb-5(data-aos="fade-right") Es importante diferenciar entre campo, registro y base de datos, ya que estos elementos cumplen funciones diferentes dentro de la organización de la información obtenida durante el monitoreo agrícola. Un campo corresponde a una característica específica que se desea almacenar y puede representar, por ejemplo, la fecha del monitoreo, el código del lote, la variable evaluada, el valor obtenido, la unidad de medida o la ubicación del punto de observación. Los campos permiten estructurar la información y establecer qué datos deben ser registrados en cada evaluación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema1/5.svg')
          .col-lg-10
            p.mb-0 Un registro, por su parte, corresponde al conjunto de valores asociados con una observación específica. Por ejemplo, un registro puede contener el código de un lote, la fecha de evaluación, el punto de monitoreo, la variable observada y el valor obtenido durante la medición. Cada nuevo punto evaluado o cada nueva jornada de monitoreo puede generar un registro adicional, permitiendo construir un historial de información.
        p.mb-0 La base de datos integra y organiza múltiples registros relacionados mediante una estructura definida. Puede contener información correspondiente a diferentes lotes, fechas, puntos de monitoreo y variables productivas o fitosanitarias. Su adecuada estructuración facilita realizar consultas, ordenar información, comparar resultados, identificar tendencias y aplicar herramientas estadísticas o geográficas.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/6.png')

    p.mb-5(data-aos="fade-right") Por ejemplo, en un monitoreo de plagas, los campos podrían ser: lote, fecha, punto de monitoreo, especie de plaga, número de individuos y observaciones. Cada conjunto de valores registrado durante una evaluación constituye un registro, mientras que el conjunto organizado de todos estos registros conforma la base de datos. Esta diferenciación permite mantener una estructura ordenada y facilita posteriormente la validación, depuración, procesamiento y análisis de la información.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/7.png')
    
    p.mb-5(data-aos="fade-right") Una base de datos utilizada para gestionar información del monitoreo agrícola debe cumplir una serie de características que permitan garantizar la organización, confiabilidad, disponibilidad y utilidad de los datos. Estas condiciones facilitan el almacenamiento y consulta de la información, así como su posterior validación, procesamiento, análisis y utilización en la toma de decisiones.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Características de una base de datos adecuada para el monitoreo agrícola
        .tabla-a.tab2
          table
            thead
              tr
                th Característica
                th Descripción
                th Aplicación en el monitoreo agrícola
            tbody
              tr
                td Organizada
                td La información debe estructurarse de manera lógica, utilizando campos, registros, categorías y criterios de clasificación claramente definidos.
                td Facilita la consulta de registros relacionados con lotes, fechas, variables, puntos de monitoreo y resultados obtenidos.
              tr
                td Consistente
                td Los datos deben registrarse utilizando criterios uniformes, evitando diferentes formas de representar una misma información.
                td Permite utilizar los mismos nombres de variables, unidades de medida, códigos y formatos durante las diferentes jornadas de monitoreo.
              tr
                td Completa
                td Debe contener la información necesaria para describir adecuadamente cada observación, evitando campos esenciales vacíos o registros incompletos.
                td Permite disponer de datos suficientes para analizar las variables productivas y fitoosanitarias sin perder información relevante.
              tr
                td Actualizable
                td La estructura debe permitir incorporar nuevos registros y modificar información cuando se identifiquen errores o cambios debidamente justificados.
                td Facilita la incorporación de nuevos monitoreos y la actualización del historial de información del cultivo.
              tr
                td Trazable
                td Los datos deben permitir identificar su origen, fecha, ubicación, responsable y condiciones de captura.
                td Facilita conocer cuándo, dónde, cómo y por quién fue obtenida una determinada información.
              tr
                td Interoperable
                td La información debe estructurarse de manera que pueda ser intercambiada entre diferentes programas y herramientas tecnológicas.
                td Permite transferir datos hacia hojas de cálculo, bases de datos, SIG u otros programas utilizados para su procesamiento y análisis.
              tr
                td Segura
                td Debe contar con mecanismos que reduzcan el riesgo de pérdida, alteración, eliminación o acceso no autorizado a la información.
                td Protege los registros del monitoreo y garantiza su disponibilidad para consultas y análisis posteriores.
              tr
                td Accesible
                td La información debe poder ser localizada y consultada por los usuarios autorizados cuando sea necesaria.
                td Facilita la revisión de datos históricos y el seguimiento de las variables monitoreadas.
              tr
                td Precisa
                td Los datos deben representar de la manera más fiel posible las condiciones observadas o medidas durante el monitoreo.
                td Reduce errores en los análisis y evita que información incorrecta conduzca a interpretaciones inadecuadas.
              tr
                td Verificable
                td Los registros deben poder ser revisados y contrastados con las fuentes originales o evidencias disponibles.
                td Permite comprobar los datos mediante formatos de campo, fotografías, registros de equipos u otras evidencias.
              tr
                td Escalable
                td La estructura debe permitir aumentar progresivamente el volumen de información sin perder su organización.
                td Facilita incorporar nuevos lotes, jornadas de monitoreo, variables y períodos de evaluación.
              tr
                td Respaldada
                td Deben existir copias de seguridad que permitan recuperar la información ante pérdidas o daños.
                td Reduce el riesgo de perder bases de datos construidas durante períodos prolongados de monitoreo.
    

    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Metadatos y calidad de la información

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/8.png')
      .col-lg-7
        p.mb-4 Los metadatos son datos que describen otros datos y permiten conocer aspectos relacionados con su origen, características, estructura, fecha de generación, método de captura, unidad de medida, responsable y condiciones de utilización.
        p.mb-4 En el monitoreo agrícola, los metadatos permiten conocer qué información fue obtenida, cuándo, dónde, cómo, con qué instrumento y bajo qué condiciones. Esta información es especialmente importante cuando los datos deben ser comparados, compartidos o utilizados posteriormente.
        p.mb-0 Por ejemplo, un registro que indique una determinada humedad del suelo adquiere mayor utilidad cuando se conoce la fecha de medición, ubicación, unidad utilizada, instrumento empleado y condiciones bajo las cuales se realizó la medición.

    p.mb-4(data-aos="fade-left") Elementos que pueden formar parte de los metadatos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.mb-lg-0.mb-4
        .row
          .col-lg-6.col-md-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Nombre del conjunto de datos. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Descripción. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Fecha de captura.
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Ubicación. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Fuente. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Responsable.
              li.d-flex.mb-2.mb-lg-0.mb-md-0
                i.fas.fa-check
                p.mb-0 Método de captura. 
          .col-lg-6.col-md-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Equipo utilizado. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Unidad de medida.
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Sistema de referencia espacial, cuando corresponda. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Formato del archivo. 
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Fecha de actualización.
      .col-lg-6
        img(src='@/assets/curso/tema1/9.svg')

    p.mb-0(data-aos="fade-left") La calidad de la información se relaciona con el grado en que los datos cumplen las condiciones necesarias para ser utilizados de manera confiable. Entre los aspectos que permiten valorar la calidad se encuentran la exactitud, completitud, consistencia, actualidad, coherencia y trazabilidad.


    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4 Organización, almacenamiento y respaldo de archivos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .bg2.p-lg-5.p-4.mb-4 
          p.mb-4 La organización de archivos permite conservar la información de manera estructurada y facilitar su localización. En proyectos de monitoreo agrícola pueden generarse diferentes tipos de archivos, como hojas de cálculo, fotografías, mapas, registros digitales, documentos, bases de datos y archivos provenientes de equipos de captura.
          p.mb-0 Una adecuada organización debe establecer criterios para nombrar archivos y carpetas. Por ejemplo, pueden utilizarse códigos relacionados con el cultivo, lote, fecha y tipo de información. Esto evita nombres ambiguos y facilita la recuperación de los documentos.
        p.mb-0 El almacenamiento puede realizarse en dispositivos locales, servidores, sistemas institucionales o plataformas de almacenamiento digital, dependiendo de los recursos disponibles y las políticas aplicables.
        p.mb-0 Los respaldos o copias de seguridad son fundamentales para prevenir la pérdida de información ocasionada por fallas de equipos, daños de archivos, eliminación accidental o situaciones que comprometan el almacenamiento original.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/10.png')
    
    p.mb-4 Una estrategia básica de respaldo puede considerar:

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-8
        PasosA.color-primario.mb-0(tipo="l")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              h4 Mantener una copia de trabajo.
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/11.svg')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/12.svg')
            .col-lg-8.text-start
              h4 Generar periódicamente una copia de seguridad.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              h4 Conservar la copia en una ubicación diferente. 
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/13.svg')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/14.svg')
            .col-lg-8.text-start
              h4 Verificar que los archivos puedan abrirse correctamente. 
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              h4 Mantener un sistema organizado de versiones. 
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/15.svg')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
