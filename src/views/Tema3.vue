<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Verificación y depuración de variables productivas	

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La calidad del análisis depende directamente de la calidad de los datos utilizados, ya que cualquier inconsistencia puede afectar la interpretación de los resultados y conducir a conclusiones que no representen adecuadamente las condiciones del cultivo. Por esta razón, antes de avanzar hacia procesos de análisis más especializados o hacia la generación de productos cartográficos, es necesario asegurar que la información disponible sea confiable y que mantenga una relación coherente con las condiciones en las que fue obtenida. Esta revisión permite aumentar la confianza en los resultados y facilita que la información pueda ser utilizada como soporte para la toma de decisiones técnicas.

    p.mb-0(data-aos="fade-left") La depuración de la información busca identificar y corregir aquellos aspectos que puedan afectar la confiabilidad de los resultados, procurando conservar el significado original de los datos y evitando modificaciones que alteren innecesariamente la información obtenida durante el monitoreo. Todo cambio realizado debe quedar debidamente documentado, de manera que sea posible conocer las modificaciones efectuadas y conservar evidencia del proceso. De esta forma, se garantiza la transparencia del manejo de la información y se fortalece la confiabilidad de los resultados que posteriormente serán utilizados para interpretar el comportamiento de las variables productivas y fitosanitarias.


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Validación y control de calidad de los datos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .bg2.p-lg-5.p-4.mb-4 
          p.mb-0 La validación de los datos consiste en comprobar que la información registrada durante el monitoreo agrícola cumple con las condiciones y criterios establecidos previamente. Este proceso permite confirmar que los datos corresponden a las variables que se desean analizar y que fueron registrados de manera coherente. Una adecuada validación ayuda a detectar situaciones que podrían afectar los resultados posteriores, como información incompleta, valores que no corresponden con los rangos esperados, registros repetidos o diferencias entre los datos registrados y las fuentes originales.
        p.mb-0 La validación puede realizarse de manera manual o mediante herramientas digitales, dependiendo de la cantidad de información disponible. En actividades con pocos registros, el aprendiz puede revisar directamente los formatos de campo y comparar los datos con las observaciones realizadas. Cuando se manejan grandes cantidades de información, pueden utilizarse hojas de cálculo, bases de datos u otros programas que permitan establecer reglas de comprobación y facilitar la identificación de posibles errores.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/2.png')

    p.mb-5(data-aos="fade-left") Entre los principales controles de validación se encuentran la verificación de campos obligatorios, que permite comprobar que no falte información esencial; la revisión de unidades, para asegurar que las mediciones se encuentren expresadas de manera uniforme; y la comprobación de rangos, que permite identificar valores que se encuentran por encima o por debajo de los límites establecidos para una determinada variable.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/3.png')
      .col-lg-9
        .row
          .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/tema3/4.svg')
          .col-lg-7.ps-lg-0(data-aos="fade-left")
            .bg7.mb-0.p-4
              p.mb-0.mx-lg-3 También es importante realizar la identificación de valores faltantes, ya que un dato ausente puede afectar los cálculos y la interpretación posterior. De igual manera, la detección de registros duplicados permite evitar que una misma observación sea contabilizada más de una vez. La revisión de fechas ayuda a comprobar que los registros correspondan al periodo en el que realmente se realizó el monitoreo, mientras que la verificación de códigos permite confirmar que los lotes, puntos de monitoreo, cultivos, variables u otros elementos hayan sido identificados correctamente.

    p.mb-5(data-aos="fade-right") Otro control importante consiste en la comparación con los registros originales. Cuando existen formatos de campo, fotografías, archivos de equipos de medición o registros digitales, estos pueden utilizarse como fuente de consulta para comprobar que la información trasladada a la base de datos conserva los valores originales. Esta comparación resulta especialmente útil cuando los datos fueron digitados manualmente.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 7.
          | Controles de validación
        .tabla-a.tab2
          table
            thead
              tr
                th Control de validación
                th ¿Qué permite comprobar?
                th Ejemplo en el monitoreo agrícola
            tbody
              tr
                td Campos obligatorios
                td Que la información esencial está registrada.
                td Que cada punto tenga fecha, ubicación y variable evaluada.
              tr
                td Revisión de unidades
                td Que las mediciones utilicen unidades uniformes.
                td Registrar todas las áreas en hectáreas o metros cuadrados según el criterio definido.
              tr
                td Comprobación de rangos
                td Que los valores se encuentren dentro de límites razonables o establecidos.
                td Revisar que una medición de humedad no presente un valor imposible para el instrumento utilizado.
              tr
                td Valores faltantes
                td Identificar información que no fue registrada.
                td Detectar puntos donde no se registró la cantidad de individuos observados.
              tr
                td Registros duplicados
                td Evitar que una misma observación aparezca varias veces.
                td Identificar dos registros con el mismo punto, fecha y hora de monitoreo.
              tr
                td Revisión de fechas
                td Comprobar que los datos correspondan al período correcto.
                td Verificar que una observación corresponde a la fecha de la visita de campo.
              tr
                td Verificación de códigos
                td Confirmar la correcta identificación de lotes, puntos o variables.
                td Comprobar que el código del lote coincida con el utilizado en el mapa y los formatos.
              tr
                td Comparación con registros originales
                td Confirmar que la información digitada coincida con la fuente inicial.
                td Comparar la base de datos con el formato diligenciado durante el monitoreo.

    p.mb-5(data-aos="fade-right") La validación no significa modificar automáticamente todos los valores que parecen diferentes. Cuando se identifica una inconsistencia, es necesario revisar su origen y determinar si corresponde a un error de registro, una condición real del cultivo o una situación que requiere confirmación. Por ejemplo, un valor muy alto de presencia de una plaga no debe eliminarse simplemente por considerarse poco común; primero debe verificarse si fue correctamente registrado y si existe evidencia que permita respaldarlo.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/5.png')
      .col-lg-8
        .bg2.p-lg-5.p-4.mb-4 
          p.mb-0 Es recomendable dejar evidencia de las verificaciones realizadas, especialmente cuando se corrige o modifica un registro. Esto permite conocer qué información fue revisada, qué cambio se efectuó y, cuando sea posible, cuál era el valor original. De esta manera se conserva la trazabilidad de los datos y se facilita la revisión posterior del proceso.
        p.mb-0 Finalmente, la validación debe realizarse antes de aplicar procedimientos estadísticos, realizar análisis espaciales, procesar imágenes o elaborar productos derivados de la información. Trabajar con datos previamente revisados permite reducir errores, mejorar la confiabilidad de los resultados y proporcionar una base más sólida para interpretar las condiciones del cultivo y apoyar las decisiones relacionadas con el manejo integrado de plagas, enfermedades y arvenses.


    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Depuración y normalización de datos
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema3/6.png')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-secundario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Depuración y normalización de datos"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
              ).mb-4
                p.mb-0 Te invitamos a escuchar nuestro #[em pódcast] sobre #[b “La depuración y normalización de datos”], donde conocerás la importancia de revisar, organizar y estandarizar la información obtenida durante el monitoreo agrícola para garantizar registros confiables y facilitar su posterior análisis e interpretación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 8.
          | Controles de validación
        .tabla-a.tab2
          table
            thead
              tr
                th Elemento
                th Situación que puede presentarse
                th Criterio de normalización
            tbody
              tr
                td Categorías
                td "Alta", "alta", "ALTA", "Nivel alto"
                td Utilizar una categoría única: "Alta".
              tr
                td Fechas
                td 12/08/2026, 12-08-26, 12 de agosto de 2026
                td Establecer un solo formato de fecha.
              tr
                td Unidades
                td Hectáreas y metros cuadrados
                td Convertir los valores a una unidad común.
              tr
                td Códigos
                td Lote 1, L1, Lote-01
                td Definir un código único para cada lote.
              tr
                td Nombres
                td "Mosca blanca", "mosca blanca"
                td Establecer una forma uniforme de escritura.        

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .bg2.p-lg-5.p-4.mb-4 
          p.mb-0 Una depuración y normalización adecuada permite reducir errores y mejorar la consistencia de la información, facilitando posteriormente la realización de cálculos, comparaciones, gráficos, mapas y otros productos de análisis. También disminuye el riesgo de obtener resultados distorsionados debido a diferencias que no corresponden a cambios reales en las condiciones del cultivo.
        p.mb-4 Estas actividades favorecen además la interoperabilidad, es decir, la posibilidad de utilizar la misma información en diferentes programas, plataformas o herramientas sin tener que modificar constantemente su estructura. Una base de datos organizada y normalizada puede ser utilizada con mayor facilidad en hojas de cálculo, sistemas de información geográfica y otras herramientas destinadas al procesamiento de información agrícola.
        p.mb-0 Es importante conservar evidencia de las modificaciones realizadas durante la depuración. Cuando sea necesario, pueden mantenerse versiones anteriores de los archivos, registrar los cambios efectuados o utilizar campos que permitan identificar la fecha y responsable de la modificación. Esto permite mantener la trazabilidad y conocer cómo evolucionó la información desde el registro inicial hasta la versión utilizada para el análisis.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/7.png')

    p.mb-0(data-aos="fade-right") En síntesis, la depuración permite mejorar los datos identificando y gestionando los errores, mientras que la normalización busca hacer uniforme la forma en que esos datos están representados. Ambos procesos contribuyen a disponer de información más ordenada, consistente y confiable para las actividades posteriores de análisis e interpretación del monitoreo agrícola.


    separador
    #t_3_3.titulo-segundo.mb-5
      h2 3.3 Correlación y análisis de variables productivas y fitosanitarias
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/8.png')
      .col-lg-7
        p.mb-4 La correlación es una herramienta que permite estudiar si existe una relación entre dos o más variables y observar cómo pueden comportarse conjuntamente. En el monitoreo agrícola, puede utilizarse para comparar variables productivas, ambientales y fitosanitarias con el propósito de identificar comportamientos que puedan ser importantes para comprender la situación del cultivo.
        p.mb-0 Por ejemplo, se puede analizar la relación entre la humedad del suelo y la presencia de enfermedades, entre la temperatura y la aparición de determinadas plagas, o entre la cantidad de lluvia y el desarrollo de organismos fitopatógenos. También es posible relacionar variables productivas, como el número de frutos, el rendimiento o el desarrollo de las plantas, con variables fitosanitarias como la incidencia de enfermedades, la presencia de plagas o el nivel de afectación por arvenses.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .bg2.p-lg-5.p-4.mb-4 
          p.mb-0 Para realizar este tipo de análisis es necesario contar con información obtenida de manera organizada y bajo criterios similares. Las variables deben corresponder, en lo posible, al mismo periodo de observación, área o punto de monitoreo. Esto permite realizar comparaciones con mayor facilidad y disminuye el riesgo de relacionar datos que fueron obtenidos en condiciones diferentes.
        p.mb-0 Una forma sencilla de comprender la correlación es observar cómo cambia una variable cuando cambia otra. Si, por ejemplo, en varios puntos del cultivo se observa que al aumentar la humedad también aumenta la presencia de una determinada enfermedad, puede existir una relación entre ambas variables. Por el contrario, si una variable aumenta mientras la otra tiende a disminuir, puede presentarse una relación negativa. Cuando los cambios no muestran un comportamiento claro, la relación puede ser débil o no ser evidente a partir de los datos disponibles.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/9.png')

    p.mb-5(data-aos="fade-left") La correlación puede clasificarse de manera general según la dirección de la relación. Una correlación positiva ocurre cuando dos variables tienden a aumentar o disminuir en el mismo sentido. Una correlación negativa se presenta cuando una variable tiende a aumentar mientras la otra disminuye. Cuando los valores no presentan un patrón definido, se puede considerar que existe una correlación débil o inexistente.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema3/10.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/11.png')
      .col-lg-7
        p.mb-4 Es importante aclarar que encontrar una correlación no significa que una variable sea necesariamente la causa de la otra. Por ejemplo, si se encuentra una relación entre humedad y presencia de una enfermedad, esto no permite afirmar por sí solo que la humedad sea la única responsable de la enfermedad. También pueden intervenir la temperatura, la variedad cultivada, el estado fenológico, las prácticas de manejo, las condiciones del suelo y otros factores.
        p.mb-0 Por esta razón, los resultados de la correlación deben analizarse junto con el conocimiento del cultivo y las condiciones en las que se realizó el monitoreo. El aprendiz debe evitar establecer conclusiones únicamente a partir de un valor estadístico y debe considerar la información disponible para determinar si el comportamiento observado tiene sentido dentro de las condiciones reales del sistema productivo.

    h3.mb-lg-4.mb-5(data-aos="fade-right") a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Herramientas para analizar la relación entre variables

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/12.png')
      .col-lg-9
        .row.mb-4
          .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/tema3/13.svg')
          .col-lg-7.ps-lg-0(data-aos="fade-left")
            .bg8.mb-0.p-4
              p.mb-0.mx-lg-3 El análisis puede apoyarse en diferentes herramientas. Las tablas permiten organizar los valores de las variables y realizar comparaciones sencillas. Los gráficos facilitan la observación de comportamientos que pueden ser difíciles de identificar cuando la información se encuentra solamente en forma de números. Entre ellos se encuentra el gráfico de dispersión, que permite representar pares de valores y observar si existe algún patrón de relación.
        p.mb-0 También pueden utilizarse coeficientes de correlación, que expresan mediante un valor numérico la intensidad y dirección de la relación entre determinadas variables. Sin embargo, para aprendices que están iniciándose en el análisis de información, es importante comprender primero el comportamiento general de los datos antes de interpretar un coeficiente.

    p.mb-5(data-aos="fade-right") Por ejemplo, si durante cinco jornadas de monitoreo se registran simultáneamente la humedad del suelo y la presencia de una enfermedad, los datos pueden organizarse de la siguiente manera:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 9.
          | Ejemplo de relación entre humedad del suelo y presencia de enfermedad
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .tabla-a.tabla-peq.tabla3
          table
            thead
              tr
                th Jornada
                th Humedad del suelo (%)
                th Presencia de enfermedad
            tbody
              tr
                td 1
                td 35
                td Baja
              tr
                td 2
                td 42
                td Baja
              tr
                td 3
                td 50
                td Media
              tr
                td 4
                td 58
                td Alta
              tr
                td 5
                td 65
                td Alta
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/14.svg')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        p.mb-4 En este ejemplo se observa que, a medida que aumenta la humedad del suelo, también aumenta el nivel observado de la enfermedad. Este comportamiento puede indicar una posible relación entre ambas variables, pero sería necesario contar con más información y considerar otros factores antes de establecer una conclusión técnica.
        p.mb-0 La correlación también puede apoyar la identificación de zonas o condiciones que requieren mayor atención durante el monitoreo. Cuando determinados factores aparecen asociados repetidamente con una mayor afectación del cultivo, esta información puede utilizarse como elemento de apoyo para orientar nuevas observaciones, fortalecer el seguimiento y mejorar la planificación de las actividades de manejo.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/15.png')

    h3.mb-5(data-aos="fade-left") b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Importancia para el manejo integrado

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/tema3/16.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg1.mb-0.p-4.p-lg-4
          img.img-t.mb-4.mx-lg-4.mt-lg-3(src='@/assets/curso/tema3/17.svg', alt='')
          p.mb-4.mx-lg-4.mb-lg-4 El análisis conjunto de variables productivas y fitosanitarias permite pasar de una observación aislada a una visión más completa del comportamiento del cultivo. La información puede ayudar a reconocer situaciones que requieren seguimiento, identificar posibles factores asociados con la aparición o aumento de problemas fitosanitarios y aportar elementos para definir acciones de manejo.
          p.mb-0.mx-lg-4.mb-lg-4 Sin embargo, los resultados deben utilizarse como apoyo para la toma de decisiones y no como única fuente de decisión. Es necesario relacionarlos con los niveles de afectación, las características del cultivo, las condiciones ambientales, los antecedentes del lote y los demás criterios técnicos establecidos para el manejo integrado de plagas, enfermedades y arvenses.

    p.mb-0(data-aos="fade-right") De esta manera, la correlación contribuye a transformar los datos obtenidos durante el monitoreo en información útil para comprender el comportamiento del sistema productivo, orientar nuevas observaciones y sustentar técnicamente las acciones de manejo.


    separador
    #t_3_4.titulo-segundo.mb-5
      h2 3.4 Interpretación de resultados para la toma de decisiones

    p.mb-5(data-aos="fade-left") La interpretación de resultados es la etapa en la que la información obtenida mediante el procesamiento y análisis de los datos se convierte en conocimiento útil para comprender la situación del cultivo y orientar las decisiones de manejo. No consiste solamente en observar números, gráficos o mapas, sino en explicar qué significan los resultados en relación con las condiciones reales del cultivo y con los objetivos establecidos para el monitoreo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema3/18.png')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema3/sub.svg')")
      h3.mb-0 ¿Cómo realizar la interpretación de resultados?

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema3/19.svg')
          .col-lg-10
            p.mb-0 Para realizar una adecuada interpretación es necesario comparar los resultados con criterios técnicos, antecedentes del cultivo, registros de monitoreos anteriores y demás información disponible. Esta comparación permite determinar si una situación observada es normal, si representa un cambio importante o si requiere una revisión más detallada.
        p.mb-0 Por ejemplo, un aumento en la presencia de una plaga puede tener mayor importancia cuando se mantiene durante varios monitoreos consecutivos o cuando coincide con condiciones favorables para su desarrollo.  La interpretación también debe considerar que los resultados pueden presentar diferencias entre lugares y momentos. Una variable puede mostrar valores bajos en una zona del lote y valores elevados en otra. De igual manera, una situación puede cambiar con el paso de los días o semanas. Por esta razón, es importante analizar la información teniendo en cuenta tanto su #[b distribución espacial] como su #[b comportamiento a través del tiempo.]
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/20.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/21.png')
      .col-lg-9
        TabsA.color-primario.mb-0
          .tarjeta.color-a.p-4(titulo="Aspectos que pueden identificarse")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 Entre los principales aspectos que pueden identificarse mediante la interpretación se encuentran:
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Las tendencias. 
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Los cambios en el comportamiento de las variables. 
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Las zonas con mayor afectación. 
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Las situaciones que requieren seguimiento. 
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Las posibles relaciones entre variables. 
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Las necesidades de ajuste en las actividades de manejo. 
          .tarjeta.color-a.p-4(titulo="Tendencias")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 Una tendencia corresponde a un comportamiento que se mantiene o se repite durante un periodo determinado. Por ejemplo, si durante varios monitoreos consecutivos aumenta progresivamente la presencia de una plaga, puede existir una tendencia de incremento que debe ser analizada con mayor atención.
                p.mb-0 En cambio, si los registros muestran una disminución continua, puede ser necesario revisar qué condiciones o acciones están asociadas con ese comportamiento.
          .tarjeta.color-a.p-4(titulo="Cambios en las variables")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 La interpretación permite también reconocer cambios en las variables monitoreadas. Estos cambios pueden estar relacionados con condiciones climáticas, características del suelo, estado fenológico del cultivo, prácticas de manejo u otros factores.
                p.mb-0 Identificar estos cambios ayuda a comprender mejor la dinámica del cultivo y a determinar si es necesario ampliar el monitoreo o revisar alguna situación particular.
          .tarjeta.color-a.p-4(titulo="Zonas con mayor afectación")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 Otro elemento importante es la identificación de zonas con mayor afectación. Cuando los datos se encuentran asociados a coordenadas o puntos específicos, pueden representarse mediante mapas para observar dónde se concentra una determinada situación.
                p.mb-0 Por ejemplo, un mapa puede mostrar que la presencia de una plaga es mayor en los bordes del lote o en determinados sectores. Esta información puede ser útil para orientar las siguientes actividades de monitoreo y manejo.
          .tarjeta.color-a.p-4(titulo="Situaciones que requieren seguimiento")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 La interpretación también permite identificar situaciones que requieren seguimiento. No todos los resultados requieren una intervención inmediata. En algunos casos, la información puede indicar que es necesario realizar nuevas observaciones, aumentar temporalmente la frecuencia del monitoreo o recopilar información adicional antes de tomar una decisión.
                p.mb-0 Esto permite evitar acciones innecesarias y favorece un manejo basado en evidencia.
          .tarjeta.color-a.p-4(titulo="Relación con umbrales y criterios técnicos")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 Es importante relacionar los resultados con los umbrales y criterios técnicos establecidos para el cultivo cuando estos se encuentren disponibles. La comparación con dichos criterios permite determinar la importancia de una determinada situación y establecer si se requiere continuar observando, realizar una acción de manejo o evaluar otras alternativas.
                p.mb-0 El resultado debe analizarse siempre considerando las características particulares del cultivo y las condiciones del sistema productivo.

    .tarjeta.color-acento-botones.p-4.p-lg-5.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-lg-5.col-md-7.col-8.mb-4.mb-lg-0
          img.img-t.img-a(src='@/assets/curso/tema3/22.svg')
        .col-lg-7
          h3.mb-2 Ejemplo de interpretación
          .enca.mb-4
          p.mb-4 Por ejemplo, encontrar 20 individuos de una plaga en un punto de monitoreo constituye un dato que, por sí solo, no permite determinar qué acción debe realizarse.
          p.mb-4 Para interpretarlo correctamente puede ser necesario conocer:
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.lista-ul__vineta
              p.mb-0 La cantidad de puntos evaluados. 
            li.d-flex.mb-0
              i.lista-ul__vineta
              p.mb-0 La distribución de la plaga. 
            li.d-flex.mb-0
              i.lista-ul__vineta
              p.mb-0 La etapa de desarrollo del cultivo. 
            li.d-flex.mb-0
              i.lista-ul__vineta
              p.mb-0 Los registros anteriores. 
            li.d-flex.mb-0
              i.lista-ul__vineta
              p.mb-0 Los criterios técnicos establecidos para esa situación.

    h3.mb-4(data-aos="fade-left") a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	Relación entre los resultados y las decisiones
  
    p.mb-5(data-aos="fade-right") La toma de decisiones debe seguir una secuencia lógica:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-11
        .row.justify-content-center.align-items-center.mb-0
          .col-lg
            .bg11.p-2
              h3.mb-0.text-center Datos obtenidos
          .col-lg
            .bg12.p-2
              h3.mb-0.text-center Procesamiento 
          .col-lg
            .bg13.p-2
              h3.mb-0.text-center Resultados
          .col-lg
            .bg14.p-2
              h3.mb-0.text-center Interpretación
          .col-lg
            .bg15.p-2
              h3.mb-0.text-center Decisión
          .col-lg
            .bg16.p-2
              h3.mb-0.text-center Seguimiento
    
    p.mb-5(data-aos="fade-right") Esta secuencia permite evitar decisiones basadas únicamente en observaciones aisladas. Los datos proporcionan la información inicial; el procesamiento permite organizarlos y obtener resultados; la interpretación explica su significado; y finalmente, la información interpretada sirve como fundamento para seleccionar las acciones que correspondan.

    .titulo-acciones.mb-5(data-aos="fade-left")
      h4.mb-2 Acciones derivadas de los resultados
      .barra-dots.d-flex.align-items-center
        span.dot
        span.dot
        .barra
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.mb-lg-0.mb-4
        p.mb-4 Las decisiones pueden estar relacionadas con diferentes acciones, como:
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.lista-ul__vineta
            p.mb-0 Mantener el monitoreo.  
          li.d-flex.mb-2
            i.lista-ul__vineta
            p.mb-0 Aumentar la frecuencia de las evaluaciones. 
          li.d-flex.mb-2
            i.lista-ul__vineta
            p.mb-0 Realizar una inspección adicional. 
          li.d-flex.mb-2
            i.lista-ul__vineta
            p.mb-0 Revisar una zona específica del lote. 
          li.d-flex.mb-2
            i.lista-ul__vineta
            p.mb-0 Modificar alguna práctica de manejo.
          li.d-flex.mb-0
            i.lista-ul__vineta
            p.mb-0 Implementar una alternativa de control de acuerdo con los criterios técnicos establecidos. 
      .col-lg-6
        img(src='@/assets/curso/tema3/23.svg')
    
    p.mb-5(data-aos="fade-left") Sin embargo, no todos los resultados deben conducir inmediatamente a una acción de control. Si la información no es suficiente, puede ser más apropiado continuar recopilando datos. Esta consideración es especialmente importante dentro del manejo integrado de plagas, enfermedades y arvenses, donde se busca utilizar diferentes estrategias de manera racional y evitar intervenciones innecesarias.

    .tarjeta.color-secun.p-4.p-lg-5.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-lg-5.col-md-7.col-8.mb-4.mb-lg-0
          img.img-t.img-a(src='@/assets/curso/tema3/24.svg')
        .col-lg-7
          h3.mb-2 Ejemplo práctico
          .enca.mb-4
          p.mb-4 Supongamos que en un lote se realiza el monitoreo de una plaga durante cuatro semanas. Los registros muestran que la población pasó de niveles bajos a niveles medios y posteriormente presentó un incremento en determinados sectores del cultivo.
          p.mb-4 El resultado permite observar un aumento de la población y una concentración espacial en algunas zonas. Al comparar esta información con los registros anteriores y los criterios técnicos establecidos, se puede determinar si la situación requiere un seguimiento más frecuente o si existen condiciones que justifican una acción de manejo.
          p.mb-0 En este caso, la decisión no se basa solamente en el último registro, sino en:
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.lista-ul__vineta
              p.mb-0 La evolución de la población.
            li.d-flex.mb-0
              i.lista-ul__vineta
              p.mb-0 Su ubicación dentro del lote. 
            li.d-flex.mb-0
              i.lista-ul__vineta
              p.mb-0 Las condiciones del cultivo.  
            li.d-flex.mb-0
              i.lista-ul__vineta
              p.mb-0 Los criterios técnicos aplicables.

    h3.mb-lg-4.mb-5(data-aos="fade-left") b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Recomendaciones para una adecuada interpretación

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6
        p.mb-4 Para interpretar correctamente los resultados del monitoreo se recomienda:
        ul.lista-ul.mb-0
          li.d-flex.mb-1
            i.lista-ul__vineta
            p.mb-0 Revisar la información disponible antes de tomar una decisión. 
          li.d-flex.mb-1
            i.lista-ul__vineta
            p.mb-0 Comparar los resultados con registros anteriores. 
          li.d-flex.mb-1
            i.lista-ul__vineta
            p.mb-0 Considerar la ubicación de los datos dentro del lote. 
          li.d-flex.mb-1
            i.lista-ul__vineta
            p.mb-0 Analizar los cambios ocurridos durante el periodo de monitoreo.
          li.d-flex.mb-1
            i.lista-ul__vineta
            p.mb-0 Relacionar las variables cuando exista información suficiente. 
          li.d-flex.mb-1
            i.lista-ul__vineta
            p.mb-0 Consultar los criterios técnicos establecidos para el cultivo. 
          li.d-flex.mb-1
            i.lista-ul__vineta
            p.mb-0 Evitar conclusiones basadas en un único dato. 
          li.d-flex.mb-1
            i.lista-ul__vineta
            p.mb-0 Diferenciar los hechos observados de las posibles explicaciones.
          li.d-flex.mb-1
            i.lista-ul__vineta
            p.mb-0 Registrar las decisiones tomadas y sus fundamentos.
          li.d-flex.mb-0
            i.lista-ul__vineta
            p.mb-0 Realizar seguimiento para comprobar los resultados de las acciones.
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema3/25.svg')
    
    p.mb-0(data-aos="fade-left") #[b Nota:] la interpretación permite que los resultados del monitoreo trasciendan el registro de información y se conviertan en elementos útiles para decidir. Una interpretación adecuada debe ser clara, objetiva y sustentada en los datos disponibles, considerando las condiciones espaciales y temporales del cultivo. De esta manera, el monitoreo se convierte en un proceso continuo que permite observar, analizar, decidir, evaluar y mejorar las estrategias de manejo integrado de plagas, enfermedades y arvenses.

        
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
