export default {
  global: {
    Name: 'Gestión, análisis y mejoramiento de la información para el manejo integrado de plagas, enfermedades y arvenses',
    Description:
      'El componente desarrolla competencias para gestionar, capturar, procesar, verificar y analizar información agrícola, mediante registros, bases de datos, herramientas estadísticas, SIG y procesamiento de imágenes. Asimismo, fortalece la depuración de datos, la toma de decisiones, la formulación de propuestas de mejora y la documentación técnica del monitoreo de plagas, enfermedades y arvenses.',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión y captura de información para el monitoreo agrícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Registros y formatos para la captura de información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estructuración de bases de datos para el monitoreo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Metadatos y calidad de la información',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Organización, almacenamiento y respaldo de archivos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas para el procesamiento y análisis de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Estadística descriptiva aplicada a los datos del monitoreo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Geoestadística aplicada al análisis de datos agrícolas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Sistemas de Información Geográfica (SIG) para el análisis de información',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Procesamiento digital de imágenes aplicado al análisis de datos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Verificación y depuración de variables productivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Validación y control de calidad de los datos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Depuración y normalización de datos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Correlación y análisis de variables productivas y fitosanitarias',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Interpretación de resultados para la toma de decisiones',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Formulación de propuestas de mejora y documentación técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Elaboración del plan de manejo integrado a partir del análisis de información',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Formulación de propuestas de mejora para la gestión de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Documentación técnica y aplicación de manuales de operación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Presentación de resultados y seguimiento de las acciones de mejora',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'Proceso de revisar, organizar y estudiar la información obtenida durante el monitoreo para identificar comportamientos, relaciones o situaciones que apoyen la toma de decisiones.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Conjunto organizado de información que permite almacenar, consultar, actualizar y analizar los datos obtenidos durante el monitoreo agrícola.',
    },
    {
      termino: 'Calidad de datos',
      significado:
        'Grado en que la información es correcta, completa, consistente, actualizada y útil para los objetivos del monitoreo.',
    },
    {
      termino: 'Correlación',
      significado:
        'Relación que permite analizar si dos variables presentan cambios asociados entre sí, sin afirmar necesariamente que una sea la causa de la otra.',
    },
    {
      termino: 'Dato',
      significado:
        'Información obtenida mediante una observación, medición, conteo o registro realizado durante el monitoreo.',
    },
    {
      termino: 'Depuración',
      significado:
        'Proceso mediante el cual se identifican y corrigen errores, inconsistencias o problemas que pueden afectar la confiabilidad de los datos.',
    },
    {
      termino: 'Geoestadística',
      significado:
        'Conjunto de métodos utilizados para analizar información que presenta una distribución espacial dentro de un área determinada.',
    },
    {
      termino: 'Georreferenciación',
      significado:
        'Proceso de relacionar un dato con una ubicación específica mediante coordenadas o referencias espaciales.',
    },
    {
      termino: 'Metadato',
      significado:
        'Información que describe las características de un dato, como su origen, fecha, ubicación, método de obtención o unidad de medida.',
    },
    {
      termino: 'Normalización',
      significado:
        'Organización y ajuste de los datos para que utilicen criterios, formatos o unidades uniformes y puedan ser comparados correctamente.',
    },
    {
      termino: 'Procesamiento de imágenes',
      significado:
        'Aplicación de herramientas digitales para mejorar, organizar o analizar información contenida en imágenes obtenidas durante el monitoreo.',
    },
    {
      termino: 'Registro',
      significado:
        'Información organizada que reúne los datos correspondientes a una observación o actividad específica de monitoreo.',
    },
    {
      termino: 'Sistema de Información Geográfica (SIG)',
      significado:
        'Herramienta tecnológica que permite organizar, visualizar, consultar y analizar información relacionada con una ubicación geográfica.',
    },
    {
      termino: 'Variable',
      significado:
        'Característica que puede observarse o medirse en un cultivo y cuyos valores pueden cambiar, como presencia de plagas, incidencia de enfermedades o rendimiento.',
    },
    {
      termino: 'Verificación',
      significado:
        'Proceso de revisar la información para comprobar que los datos registrados corresponden a las condiciones observadas y cumplen los criterios establecidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gisbert Juárez, M. (2021). *Estadística descriptiva*. Probabilidad y Estadística.',
      link: '',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi [IGAC]. (s. f.). *Guía gestión de metadatos*.',
      link: '',
    },
    {
      referencia:
        'QuestionPro. (s. f.). *Estadística descriptiva: Qué es, objetivo, tipos y ejemplos*.',
      link: '',
    },
    {
      referencia:
        'Santos, C. (2025, 4 de agosto). *La gestión de metadatos y su relación con el control de calidad*. Transformación Digital.',
      link: '',
    },
    {
      referencia:
        'Unidad de Planificación Rural Agropecuaria [UPRA]. (s. f.). *Monitoreo de cultivos*. Gobierno de Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
