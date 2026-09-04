<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Prueba de conocimientos de gestión y análisis de la información para el monitoreo agrícola.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos adquiridos por el aprendiz sobre la gestión, organización, procesamiento, verificación, análisis e interpretación de la información obtenida durante el monitoreo agrícola, así como su capacidad para formular propuestas de mejora, documentar resultados y realizar seguimiento a las acciones implementadas en el manejo integrado de plagas, enfermedades y arvenses.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Durante un monitoreo agrícola se registran datos sobre presencia de plagas, ubicación, fecha y estado del cultivo. ¿Cuál es la principal finalidad de organizar esta información en registros y formatos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar la captura ordenada y posterior consulta de la información obtenida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar las observaciones realizadas directamente en el cultivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir la cantidad de variables que deben ser evaluadas durante el monitoreo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar que la información sea utilizada en herramientas de análisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 2,
          texto:
            'En una base de datos para monitoreo agrícola, un registro representa principalmente:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El nombre general de todas las variables utilizadas durante el monitoreo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El conjunto de programas utilizados para analizar la información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una observación completa relacionada con una unidad, punto o evento monitoreado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una conclusión obtenida después de interpretar los resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 3,
          texto:
            'Un técnico desea comparar información obtenida en diferentes fechas de monitoreo. ¿Qué característica de la base de datos facilita principalmente esta actividad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que todos los registros contengan únicamente información numérica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que los datos estén organizados bajo criterios uniformes y puedan actualizarse.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que cada jornada de monitoreo utilice un formato completamente diferente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que los registros anteriores sean reemplazados por los datos más recientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 4,
          texto:
            'Durante el almacenamiento de información de monitoreo, se realiza una copia adicional de los archivos en otro dispositivo. Esta acción corresponde principalmente a:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normalización de los datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Correlación de resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Validación de variables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Respaldo de la información.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 5,
          texto:
            'En un registro aparece que una medición fue realizada el 15 de junio, pero el archivo asociado indica que corresponde al 20 de junio. ¿Qué aspecto de la información debe revisarse principalmente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La representación gráfica de los datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La consistencia y trazabilidad de la información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El método utilizado para calcular el promedio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La simbología empleada para elaborar mapas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 6,
          texto:
            'En un conjunto de datos de monitoreo se tienen los valores 5, 7, 8, 10 y 20 individuos de una plaga. ¿Cuál herramienta permite obtener un valor que represente el comportamiento promedio de estos datos?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La media aritmética.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La frecuencia acumulada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La desviación estándar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El rango de ubicación espacial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 7,
          texto:
            'Un aprendiz desea conocer qué tan separados están los valores de una variable respecto a su comportamiento general. ¿Qué medida estadística resulta especialmente útil para este propósito?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La media.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La moda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La desviación estándar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El porcentaje acumulado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 8,
          texto:
            'En un lote agrícola se quiere conocer si la presencia de una plaga presenta diferentes niveles según la ubicación de los puntos monitoreados. ¿Qué herramienta resulta especialmente útil para analizar esta distribución espacial?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un análisis geoestadístico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una tabla de frecuencias sin ubicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un cálculo de promedio general del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un registro descriptivo sin coordenadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 9,
          texto:
            'Un Sistema de Información Geográfica (SIG) puede ser utilizado durante el monitoreo agrícola principalmente para:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir completamente la toma de datos en campo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Representar, organizar y analizar información relacionada con su ubicación espacial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Determinar automáticamente todas las causas de una plaga.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de validar los datos obtenidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 10,
          texto:
            'Durante el monitoreo se utilizan imágenes digitales del cultivo para identificar diferencias en la cobertura vegetal. ¿Cuál es una utilidad del procesamiento digital de imágenes?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Transformar automáticamente cualquier observación en una recomendación de manejo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar la extracción y análisis de información contenida en las imágenes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplazar todos los registros realizados mediante observación directa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar la necesidad de conocer las características del cultivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 11,
          texto:
            'Antes de utilizar una base de datos para realizar un análisis, se encuentra que algunos registros tienen valores que no corresponden con la variable evaluada. ¿Qué acción es más apropiada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar los registros y determinar el tratamiento adecuado de los datos inconsistentes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Utilizar todos los registros y corregir las conclusiones posteriormente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar toda la base de datos y comenzar nuevamente el monitoreo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir los valores diferentes por el promedio general sin revisar su origen.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 12,
          texto:
            'La depuración de datos dentro del monitoreo agrícola tiene como propósito principal:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir las variables utilizadas sin considerar los objetivos del monitoreo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Modificar los resultados para que coincidan con las expectativas del productor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumentar artificialmente el número de registros disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar y corregir problemas que puedan afectar la confiabilidad del análisis.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 13,
          texto:
            'Dos registros utilizan diferentes formas para expresar la misma unidad de medida, lo que dificulta su comparación. ¿Qué proceso puede ayudar a solucionar esta situación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normalización de los datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Georreferenciación del lote.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Interpretación de resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaboración del plan de manejo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 14,
          texto:
            'En un cultivo se analiza si el aumento de una variable productiva coincide con cambios en la presencia de una plaga. ¿Qué tipo de análisis puede ayudar a estudiar esta relación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis de correlación entre variables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Respaldo de archivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clasificación de documentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organización de carpetas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 15,
          texto:
            'Los resultados del monitoreo muestran una concentración de plagas en determinados sectores del lote. Antes de establecer una acción de manejo, ¿qué debería hacer el aprendiz?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aplicar una medida de control en todo el lote sin realizar otra consideración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Interpretar los resultados teniendo en cuenta las condiciones del cultivo y los criterios técnicos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Descartar los puntos con mayor presencia para obtener un promedio más uniforme.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir los resultados por información obtenida en otro cultivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 16,
          texto:
            'A partir de los resultados del monitoreo se identifican problemas recurrentes en la sanidad del cultivo. ¿Cuál es una acción coherente con el manejo integrado?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elaborar un plan de manejo que considere los problemas identificados, objetivos, actividades y seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aplicar inmediatamente cualquier producto disponible sin analizar la información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Suspender el monitoreo para evitar modificar los resultados obtenidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar únicamente los problemas que presenten mayor importancia económica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 17,
          texto:
            'Se detecta que durante varios monitoreos los formatos presentan campos incompletos y esto dificulta el análisis posterior. ¿Cuál propuesta representa una acción de mejora adecuada?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener los formatos actuales y completar los campos faltantes al finalizar el año.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Diseñar o ajustar el formato, identificar la causa del problema y establecer un mecanismo para verificar su diligenciamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar los registros incompletos sin analizar por qué se presentaron.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar todos los datos faltantes por valores estimados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la principal finalidad de un manual de operación relacionado con un equipo o <em>software</em> utilizado en el monitoreo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proporcionar orientaciones para utilizar el equipo o herramienta de acuerdo con sus especificaciones y procedimientos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir la información obtenida directamente durante las actividades de campo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir por sí solo las decisiones de manejo que deben tomarse en el cultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la necesidad de realizar mantenimiento o verificación del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 19,
          texto:
            'Un informe presenta los datos registrados, los resultados obtenidos y una explicación de su significado. ¿Por qué es importante diferenciar estos tres elementos?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque únicamente los datos originales pueden utilizarse para tomar decisiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque los resultados deben presentarse sin relacionarlos con las condiciones del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque la interpretación reemplaza la necesidad de conservar los datos originales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque permite distinguir entre la información observada, los productos del procesamiento y las conclusiones sustentadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
        {
          id: 20,
          texto:
            'Después de implementar una propuesta de mejora en el proceso de monitoreo, se revisan los resultados obtenidos y se comparan con la situación inicial. Esta actividad corresponde principalmente a:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Captura inicial de información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estructuración de la base de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Seguimiento y evaluación de la acción de mejora.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Clasificación inicial de las variables productivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
