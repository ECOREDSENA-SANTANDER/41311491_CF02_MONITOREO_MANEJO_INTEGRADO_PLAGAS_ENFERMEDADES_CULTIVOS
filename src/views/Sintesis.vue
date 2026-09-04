<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") La gestión de la información permite transformar los datos obtenidos durante el monitoreo agrícola en información útil para la toma de decisiones. Para ello, se organizan, verifican, depuran y analizan los registros, considerando variables productivas, ambientales y fitosanitarias. El uso de herramientas estadísticas, Sistemas de Información Geográfica (SIG) y tecnologías digitales facilita la representación e interpretación de los datos mediante tablas, gráficos y mapas. A partir de los resultados, se pueden formular propuestas de manejo integrado, establecer acciones de mejora y realizar su seguimiento. Finalmente, la documentación técnica garantiza la trazabilidad de los procedimientos, resultados y acciones implementadas, contribuyendo a una gestión eficiente de la información y al manejo integrado de plagas, enfermedades y arvenses.
    

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses se organiza en cuatro unidades principales. La primera, Gestión y captura de información para el monitoreo agrícola, aborda la captura, estructuración, calidad, organización, almacenamiento y respaldo de la información. La segunda, Herramientas para el procesamiento y análisis de información, comprende la estadística descriptiva, geoestadística, Sistemas de Información Geográfica (SIG) y procesamiento digital de imágenes. La tercera, Verificación y depuración de variables productivas, incluye la validación, depuración, normalización y análisis de variables productivas y fitosanitarias, así como la interpretación de resultados. Finalmente, la cuarta, Formulación de propuestas de mejora y documentación técnica, contempla el plan de manejo integrado, las propuestas de mejora, la documentación técnica, la presentación de resultados y el seguimiento de las acciones implementadas.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
