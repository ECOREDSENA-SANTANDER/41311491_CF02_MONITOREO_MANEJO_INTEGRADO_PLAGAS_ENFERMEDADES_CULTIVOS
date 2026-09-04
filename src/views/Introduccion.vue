<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.pe-lg-0.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/intro/1.png')
      .col-lg-7.ps-lg-0(data-aos="fade-left")
        .bg1.mb-0.p-4.p-lg-4
          img.img-t.mb-4.mx-lg-4.mt-lg-3(src='@/assets/curso/intro/2.svg', alt='')
          p.mb-0.mx-lg-4.mb-lg-3 La gestión de la información obtenida durante el monitoreo agrícola constituye una etapa fundamental para transformar los datos registrados en información útil para el manejo integrado de plagas, enfermedades y arvenses. Este proceso comprende la organización de registros, formatos de captura y bases de datos, así como la aplicación de procedimientos para garantizar la trazabilidad, integridad y disponibilidad de la información. La adecuada estructuración y almacenamiento de los datos, junto con el manejo de metadatos, la verificación de la calidad de los registros, la organización de archivos y la realización de copias de respaldo, facilita su consulta, procesamiento y análisis. Asimismo, la validación, depuración y normalización permiten identificar y corregir registros incompletos, duplicados o inconsistentes, fortaleciendo la confiabilidad de las bases de datos y reduciendo posibles errores en la interpretación de los resultados.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .bg2.p-lg-5.p-4.mb-4 
          p.mb-4 El procesamiento y análisis de la información mediante estadística descriptiva, geoestadística, Sistemas de Información Geográfica (SIG) y herramientas de procesamiento digital de imágenes permite identificar tendencias, patrones, relaciones y comportamientos espaciales de las variables productivas y fitosanitarias.
          p.mb-0 La correlación entre estas variables contribuye a reconocer situaciones relevantes para el manejo del cultivo y sustenta la toma de decisiones basada en criterios técnicos. A partir de los resultados obtenidos, el aprendiz estará en capacidad de establecer prioridades, formular propuestas de mejora, elaborar planes de manejo integrado, documentar técnicamente los procesos y realizar seguimiento a las acciones implementadas. 
        p.mb-0 La presentación de los resultados mediante informes, tablas, gráficos, mapas y otros productos facilita la comunicación de los hallazgos y favorece la evaluación de las estrategias aplicadas, promoviendo una gestión de la información agrícola orientada al análisis, la toma de decisiones y el mejoramiento continuo.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/intro/3.png')

    .row.justify-content-center.align-items-center(data-aos="fade-left")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
