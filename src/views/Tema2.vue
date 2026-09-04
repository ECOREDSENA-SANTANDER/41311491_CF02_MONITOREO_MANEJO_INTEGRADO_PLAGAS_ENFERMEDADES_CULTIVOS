<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas para el procesamiento y análisis de información

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 Una vez organizada la información, es necesario utilizar herramientas que permitan transformarla en resultados comprensibles. El procesamiento consiste en preparar los datos para su análisis, mientras que el análisis busca identificar comportamientos, relaciones, tendencias, patrones y diferencias que puedan aportar información para la gestión del cultivo.
            br
            br
            p.mb-0 Las herramientas estadísticas, geoestadísticas, los Sistemas de Información Geográfica y los programas de procesamiento digital de imágenes permiten analizar información desde diferentes perspectivas.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Estadística descriptiva aplicada a los datos del monitoreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema2/2.png')
      .col-lg-9
        p.mb-4 La estadística descriptiva es un conjunto de herramientas que permite organizar, resumir y entender los datos obtenidos durante el monitoreo de un cultivo. En lugar de revisar cada dato por separado, estas herramientas ayudan a encontrar valores que permitan conocer de manera sencilla qué está ocurriendo en el cultivo. 
        .row
          .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/tema2/3.svg')
          .col-lg-7.ps-lg-0(data-aos="fade-left")
            .bg4.mb-0.p-4
              p.mb-0.mx-lg-3 Por ejemplo, si durante el monitoreo se cuenta el número de individuos de una plaga en diferentes puntos de un lote, se pueden obtener muchos datos. La estadística descriptiva permite resumirlos mediante valores y gráficos para conocer cuál es la cantidad promedio, cuál es el valor más frecuente, qué tan diferentes son los resultados entre los puntos evaluados y dónde se presentan los valores más altos o bajos.

    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema2/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-3 Video: Estadística descriptiva, gráficas e informes estadísticos
              p.mb-0 Se presenta una descripción de la estadística descriptiva y la importancia que tiene en este momento para la toma de decisiones. 
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=3O9lDdzv6DQ" target="_blank")
                span Abrir video
                i.fas.fa-file-video
    
    h3.mb-5 a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Medidas de tendencia central

    p.mb-5(data-aos="fade-right") Las medidas de tendencia central permiten encontrar un valor que represente, de manera general, el comportamiento de un grupo de datos. Las principales son la media, mediana y moda.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1.
          | Medidas de tendencia central 
        .bg5.p-lg-5.p-4
          img.img-t.img-a(src='@/assets/curso/tema2/4.svg', alt='Presenta tres curvas de distribución que muestran la posición relativa de la media, la mediana y la moda según la forma de la distribución. La primera corresponde a una distribución asimétrica negativa, con la cola hacia la izquierda; la segunda, a una distribución simétrica, donde media, mediana y moda coinciden; y la tercera, a una distribución asimétrica positiva, con la cola hacia la derecha.')
          
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Medidas de tendencia central
        .tabla-a.tab2
          table
            thead
              tr
                th Herramienta
                th Definición
                th Ejemplo en el monitoreo agrícola
            tbody
              tr
                td Media
                td Es el promedio de todos los valores. Se obtiene sumando los datos y dividiendo el resultado entre la cantidad de datos.
                td Si se cuentan plagas en cinco puntos del cultivo, la media permite conocer aproximadamente cuántas plagas se encontraron por punto.
              tr
                td Mediana
                td Es el valor que queda en la mitad cuando los datos se organizan de menor a mayor.
                td Permite conocer un valor central cuando algunos puntos presentan cantidades de plagas muy altas o muy bajas.
              tr
                td Moda
                td Es el valor que aparece más veces dentro de un grupo de datos.
                td Permite identificar la cantidad de individuos de una plaga que se repite con mayor frecuencia durante el monitoreo.
    
    h3.mb-5 b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Medidas de dispersión
    
    p.mb-5(data-aos="fade-left") Las medidas de dispersión permiten saber qué tan parecidos o diferentes son los datos entre sí. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema2/5.png')
    
    p.mb-5(data-aos="fade-left") Esto es importante porque dos lotes pueden tener el mismo promedio, pero presentar una distribución muy diferente.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Medidas de dispersión
        .tabla-a.tab2
          table
            thead
              tr
                th Herramienta
                th Definición
                th ¿Para qué sirve en el monitoreo?
            tbody
              tr
                td Rango
                td Es la diferencia entre el valor más alto y el más bajo.
                td Permite conocer rápidamente qué tan amplia es la diferencia entre los resultados obtenidos en los puntos monitoreados.
              tr
                td Varianza
                td Indica cuánto se separan los datos respecto al promedio.
                td Ayuda a conocer si los datos presentan mucha o poca variación.
              tr
                td Desviación estándar
                td Indica, de una manera más fácil de interpretar, qué tan alejados están los datos del promedio.
                td Permite identificar si los resultados de los diferentes puntos del cultivo son parecidos o presentan grandes diferencias.
    
    p.mb-5(data-aos="fade-left") Por ejemplo, si en diferentes puntos de un lote se encuentra una cantidad de plagas muy similar, la variación será baja. Si en algunos puntos se encuentran pocas plagas y en otros se encuentran muchas, la variación será mayor. Esta información puede ser útil para identificar si el problema fitosanitario está distribuido de manera uniforme o si se concentra en determinadas zonas.

    h3.mb-5(data-aos="fade-right") c)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tablas
    
    p.mb-5(data-aos="fade-left") Las tablas son una forma de organizar los datos en filas y columnas para facilitar su lectura y comparación. Son especialmente útiles cuando se tiene una cantidad considerable de información.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Ejemplo de organización de datos en una tabla
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6
        .tabla-a.tabla-peq.tabla1
          table
            thead
              tr
                th Punto de monitoreo
                th Número de plagas
            tbody
              tr
                td Punto 1
                td 3
              tr
                td Punto 2
                td 5
              tr
                td Punto 3
                td 2
              tr
                td Punto 4
                td 8
              tr
                td Punto 5
                td 4
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema2/6.svg')

    p.mb-5(data-aos="fade-right") Una tabla permite observar rápidamente qué puntos presentan valores bajos o altos y facilita posteriormente el cálculo de promedios y otras medidas estadísticas.

    h3.mb-5 d)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gráficos
    
    p.mb-5(data-aos="fade-right") Los gráficos permiten representar los datos mediante elementos visuales, como barras, líneas o puntos. Su principal ventaja es que facilitan la comprensión de la información sin necesidad de revisar todos los números.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 2.
          | Tipos de gráficos
        .bg6.p-lg-5.p-4
          img.img-t.img-a(src='@/assets/curso/tema2/7.svg', alt='Presenta seis formas de representar información estadística: gráfico de barras, histograma, diagrama de dispersión, gráfico lineal, diagrama de caja y gráfico circular. Cada uno permite comparar cantidades, analizar distribuciones, identificar relaciones, observar tendencias, representar variabilidad o mostrar proporciones. La imagen facilita reconocer sus principales características y aplicaciones.')
    
    p.mb-5 Entre los gráficos que pueden utilizarse se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        TabsC.color-primario
          .p-lg-5.p-4.fd3(titulo="Gráfico de barras")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.mb-lg-0.mb-4
                img.img-a.img-t(src='@/assets/curso/tema2/8.svg')
              .col-lg-5
                p.mb-0 Permite comparar cantidades entre diferentes puntos, lotes, cultivos o categorías. Por ejemplo, puede utilizarse para comparar la cantidad de individuos de una plaga encontrada en diferentes puntos de monitoreo.
          .p-lg-5.p-4.fd3(titulo="Gráfico de líneas")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.mb-lg-0.mb-4
                img.img-a.img-t(src='@/assets/curso/tema2/9.svg')
              .col-lg-5
                p.mb-0 Permite observar cómo cambia una variable a través del tiempo. Es útil para identificar aumentos, disminuciones o comportamientos que se mantienen durante varias jornadas de monitoreo.
          .p-lg-5.p-4.fd3(titulo="Histograma")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.mb-lg-0.mb-4
                img.img-a.img-t(src='@/assets/curso/tema2/10.svg')
              .col-lg-5
                p.mb-0 Permite observar cómo se distribuyen los valores de una variable. Por ejemplo, puede mostrar cómo se agrupan las mediciones de altura de las plantas o la cantidad de individuos de una plaga encontrados en diferentes puntos.
          .p-lg-5.p-4.fd3(titulo="Diagrama de dispersión")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.mb-lg-0.mb-4
                img.img-a.img-t(src='@/assets/curso/tema2/11.svg')
              .col-lg-5
                p.mb-0 Permite observar si existe una posible relación entre dos variables. Por ejemplo, puede utilizarse para comparar la humedad del suelo con la presencia de una enfermedad.
          .p-lg-5.p-4.fd3(titulo="Diagrama de caja")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.mb-lg-0.mb-4
                img.img-a.img-t(src='@/assets/curso/tema2/12.svg')
              .col-lg-5
                p.mb-0 Permite resumir y visualizar cómo están distribuidos un conjunto de datos. Muestra valores importantes como el valor central, la variación de los datos y los valores que pueden ser muy diferentes del resto. En el monitoreo agrícola puede utilizarse, por ejemplo, para comparar la cantidad de individuos de una plaga encontrada en diferentes lotes o para observar la variación de una variable productiva. Su principal utilidad es facilitar la identificación de diferencias entre grupos y reconocer valores que pueden requerir una revisión.
          .p-lg-5.p-4.fd3(titulo="Diagrama circular")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.mb-lg-0.mb-4
                img.img-a.img-t(src='@/assets/curso/tema2/13.svg')
              .col-lg-5
                p.mb-0 Permite representar cómo se distribuye un total entre diferentes categorías. Cada parte del círculo representa una proporción del total, por lo que resulta útil cuando se desea mostrar porcentajes. Por ejemplo, puede utilizarse para representar la proporción de puntos de monitoreo clasificados con afectación baja, media o alta, o la participación porcentual de diferentes problemas fitosanitarios identificados en un lote.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 6.
          | Cuándo utilizar cada gráfico
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .tabla-a.tabla-peq.tabla2
          table
            thead
              tr
                th Gráfico
                th ¿Para qué sirve principalmente?
            tbody
              tr
                td Barras
                td Comparar categorías o cantidades.
              tr
                td Líneas
                td Observar cambios a través del tiempo.
              tr
                td Histograma
                td Conocer cómo se distribuyen los valores.
              tr
                td Dispersión
                td Explorar la relación entre dos variables.
              tr
                td Caja
                td Observar la distribución, variación y posibles valores atípicos.
              tr
                td Circular
                td Mostrar proporciones o porcentajes de un total.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/14.svg')

    p.mb-5 #[b Nota:] no existe un gráfico que sea adecuado para todos los casos. La elección depende del tipo de información disponible y de lo que se desea comunicar.

    h3.mb-5(data-aos="fade-right") e)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ¿Por qué es importante la estadística descriptiva en el monitoreo?
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-7
        p.mb-0 La estadística descriptiva permite convertir una gran cantidad de datos en información más fácil de comprender. Su aplicación ayuda a resumir los resultados, comparar diferentes puntos del cultivo, identificar valores altos y bajos, reconocer cambios en el tiempo y detectar diferencias entre zonas.
        p.mb-3 En el manejo integrado de plagas, enfermedades y arvenses, estos resultados pueden servir como apoyo para determinar dónde se presenta una mayor afectación, qué variables muestran cambios importantes y qué situaciones requieren una revisión más detallada.
        p.mb-0 #[b Nota:] es importante recordar que la estadística no reemplaza la observación del cultivo ni el conocimiento técnico. Sus resultados deben analizarse junto con las condiciones del cultivo, los registros de campo y los demás datos disponibles para obtener conclusiones adecuadas.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/15.png')


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Geoestadística aplicada al análisis de datos agrícolas
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/16.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema2/17.svg')
          .col-lg-10
            p.mb-0 La geoestadística permite analizar variables considerando su distribución espacial. A diferencia de un análisis que únicamente considera los valores registrados, incorpora la ubicación donde cada dato fue obtenido.
        p.mb-4 Esta herramienta resulta útil para estudiar la distribución espacial de variables agrícolas, identificar zonas con comportamientos similares y reconocer patrones de concentración o dispersión.
        p.mb-0 Entre los conceptos relacionados con la geoestadística se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-lg-0.mb-4
        .row
          .col-lg-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Variabilidad espacial. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Autocorrelación espacial. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Distancia. 
              li.d-flex.mb-2.mb-lg-0
                i.fas.fa-check
                p.mb-0 Dependencia espacial. 
          .col-lg-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Semivariograma.  
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Interpolación. 
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Predicción espacial. 
      .col-lg-6
        img(src='@/assets/curso/tema2/18.svg')

    p.mb-4(data-aos="fade-right") La interpolación permite estimar valores en lugares donde no se realizaron mediciones directas, utilizando información disponible de puntos cercanos y métodos matemáticos apropiados.

    p.mb-0 En el monitoreo agrícola, estos procedimientos pueden apoyar la elaboración de representaciones espaciales de variables como incidencia de plagas, presencia de enfermedades, distribución de arvenses o características productivas.


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Sistemas de Información Geográfica (SIG) para el análisis de información
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5(data-aos="fade-right")
      .col-lg-7
        p.mb-4 Los Sistemas de Información Geográfica permiten almacenar, organizar, consultar, analizar y representar información asociada a una ubicación geográfica.
        p.mb-4 La información puede organizarse mediante capas que representan diferentes elementos del territorio o del cultivo. Por ejemplo, una capa puede contener los límites del lote, otra los puntos de monitoreo y otra los registros asociados a una determinada variable.
        p.mb-0 Entre las operaciones que pueden realizarse se encuentran:
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/19.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.mb-lg-0.mb-4
        .row
          .col-lg-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Visualización de datos. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Consulta de atributos. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Integración de capas. 
              li.d-flex.mb-2.mb-lg-0
                i.fas.fa-check
                p.mb-0 Clasificación de información.
          .col-lg-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Generación de mapas temáticos.  
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Análisis espacial. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Comparación de información.
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Representación de patrones.
      .col-lg-6
        img(src='@/assets/curso/tema2/20.svg')

    p.mb-0(data-aos="fade-right") Los mapas temáticos permiten comunicar visualmente los resultados y facilitar la identificación de zonas que requieren atención.


    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Procesamiento digital de imágenes aplicado al análisis de datos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/21.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema2/22.svg')
          .col-lg-10
            p.mb-0 El procesamiento digital de imágenes comprende técnicas utilizadas para transformar, mejorar, clasificar e interpretar imágenes digitales con el propósito de obtener información útil.
        p.mb-4 En agricultura, las imágenes pueden proceder de diferentes fuentes, incluyendo cámaras convencionales, sensores especializados, plataformas aéreas o sistemas satelitales.
        p.mb-0 El procesamiento puede incluir operaciones como:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.mb-lg-0.mb-4
        .row
          .col-lg-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Organización de imágenes. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Conversión de formatos. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Corrección. 
              li.d-flex.mb-2.mb-lg-0
                i.fas.fa-check
                p.mb-0 Mejora de contraste. 
          .col-lg-6
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Clasificación. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Extracción de información. 
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Generación de índices. 
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Comparación temporal. 
      .col-lg-6
        img(src='@/assets/curso/tema2/23.svg')

    p.mb-4(data-aos="fade-left") Estas herramientas pueden contribuir a identificar diferencias en el comportamiento del cultivo y complementar la información obtenida mediante observaciones directas.

    p.mb-0(data-aos="fade-right") Es importante considerar que las imágenes constituyen una fuente de información que debe ser interpretada conjuntamente con otros datos del monitoreo para evitar conclusiones basadas exclusivamente en información visual.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
