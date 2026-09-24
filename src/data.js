export const YEAR = 2026;
// Catálogo proporcionado por el responsable del proyecto; no implica validación oficial.
const catalog = [
  ["SEGOB", "Gobierno", "Eric Gudiño Torres", 6],
  ["SECFIN", "Finanzas", "Gustavo Leal Maya", 6],
  ["SECPLAN", "Planeación y Participación Ciudadana", "Luis Antonio Rangel", 6],
  ["CONT", "Contraloría", "Oscar García González", 6],
  ["SEDESU", "Desarrollo Sustentable", "Marco Antonio del Prete Tercero", 3],
  ["SEDEA", "Desarrollo Agropecuario", "Rosendo Anaya Aguilar", 3],
  ["SDUOP", "Desarrollo Urbano y Obras Públicas", "Pío X Salgado Tovar", 4],
  ["SEDESOQ", "Desarrollo Social", "Luis Bernardo Nava Guerrero", 1],
  ["SEDEQ", "Educación", "Martha Elena Soto Obregon", 2],
  ["SESEQ", "Salud", "Martina Pérez Rendon", 1],
  ["SSC", "Seguridad Ciudadana", "Iován Elías Pérez", 5],
  ["SECTUR", "Turismo", "Adriana Vega Vázquez Mellado", 3],
  ["SECULT", "Cultura", "Ana Paola López Birlain", 2],
  ["ST", "Trabajo", "Liliana San Martín Castillo", 3],
  ["SEJUVE", "Juventud", "Virginia Hernadez", 2],
  ["AMEQ", "Agencia de Movilidad", "Gerardo Cuanalo Santos", 4],
  ["SEMUJERES", "Mujeres", "Sonia Rocha Acosta", 1],
  ["CEA", "Comisión Estatal de Aguas", "Luis Vega Ricoy", 4],
];
export const SECRETARIAS = catalog.map(([id, name, holder, axis]) => ({
  id,
  name,
  holder,
  axis,
}));
export const preparationImages = {
  SEGOB:'https://www.queretaro.gob.mx/documents/20121/305368/segob2025.png',
  SECFIN:'https://www.queretaro.gob.mx/documents/20121/305368/sFinanzas.png',
  SECPLAN:'https://www.queretaro.gob.mx/documents/20121/305368/sPlaneacion.png',
  CONT:'https://www.queretaro.gob.mx/documents/20121/305368/contralor.png',
  SEDESU:'https://www.queretaro.gob.mx/documents/20121/305368/sSedesu.png',
  SEDEA:'https://www.queretaro.gob.mx/documents/20121/305368/sSedea.png',
  SDUOP:'https://www.queretaro.gob.mx/documents/20121/305368/sduop1.png',
  SEDESOQ:'https://www.queretaro.gob.mx/documents/20121/305368/SEDESOQ.jpg',
  SEDEQ:'https://www.queretaro.gob.mx/documents/20121/305368/sEducacion.png',
  SESEQ:'https://www.queretaro.gob.mx/documents/20121/305368/sSalud.png',
  SSC:'https://www.queretaro.gob.mx/documents/20121/305368/sSeguridad.png',
  SECTUR:'https://www.queretaro.gob.mx/documents/20121/305368/sTurismo.png',
  SECULT:'https://www.queretaro.gob.mx/documents/20121/305368/CULTURA1.png',
  ST:'https://www.queretaro.gob.mx/documents/20121/305368/sTrabajo.png',
  SEJUVE:'https://www.queretaro.gob.mx/documents/20121/305368/sJuventud.png',
  AMEQ:'https://www.queretaro.gob.mx/documents/20121/305368/aMovilidad.png',
  SEMUJERES:'https://www.queretaro.gob.mx/documents/20121/305368/sriaMujer.png',
  CEA:'https://www.queretaro.gob.mx/documents/20121/305368/vCEA.png'
};

export const DIPUTADOS = [
  {
    name: 'Homero Barrera Mcdonald',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/HBM.png',
  },
  {
    name: 'María Blanca Flor Benítez Estrada',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/MBFBE.png',
  },
  {
    name: 'Teresita Calzada Rovirosa',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/TCR.png',
  },
  {
    name: 'Claudia Díaz Gayou',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/CDG.png',
  },
  {
    name: 'Perla Patricia Flores Suárez',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/PPFS.png',
  },
  {
    name: 'Arturo Maximiliano García Pérez',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/AMGP.png',
  },
  {
    name: 'Ulises Gómez de la Rosa',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/UGR.png',
  },
  {
    name: 'María Georgina Guzmán Álvarez',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/MGGA.png',
  },
  {
    name: 'Edgar Inzunza Ballesteros',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/EIB.png',
  },
  {
    name: 'María Eugenia Margarito Vázquez',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/MEMV.png',
  },
  {
    name: 'Sully Yanira Mauricio Sixtos',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/SYMS.png',
  },
  {
    name: 'Adriana Elisa Meza Argaluza',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/AEMA.png',
  },
  {
    name: 'Paul Ospital Carrera',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/POC.png',
  },
  {
    name: 'Sinuhé Arturo Piedragil Ortiz',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/SAPO.png',
  },
  {
    name: 'Eric Silva Hernández',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/ESH.png',
  },
  {
    name: 'Laura Andrea Tovar Saavedra',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/LATS.png',
  },
  {
    name: 'Rosalba Vázquez Munguía',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/RVM.png',
  },
  {
    name: 'Luis Gerardo Ángeles Herrera',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/LGAH.png',
  },
  {
    name: 'Mauricio Cárdenas Palacios',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/MCP.png',
  },
  {
    name: 'Enrique Antonio Correa Sada',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/EACS.png',
  },
  {
    name: 'Alejandrina Verónica Galicia Castañón',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/AVGC.png',
  },
  {
    name: 'Juliana Rosario Hernández Quintanar',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/JRHQ.png',
  },
  {
    name: 'María Leonor Mejía Barraza',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/MLMB.png',
  },
  {
    name: 'Guillermo Vega Guerrero',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/GVG.png',
  },
  {
    name: 'Luis Antonio Zapata Guerrero',
    photo: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/LAZG.png',
  },
];
// [eje, título, descripción, objetivo, dependencias, ODS]. Dependencias: índice 4.
export const METAS = [
  [
		1,
		"Acceso a la salud",
		"Llegar a los primeros cinco lugares en acceso a la salud. Línea base: 9º lugar.",
		"Mejorar",
		"SESEQ SEDESOQ",
		"3 10"
	],
	[
		1,
		"Sobrepeso y obesidad",
		"Mantener el primer lugar nacional en menor prevalencia de sobrepeso y obesidad.",
		"Mantener",
		"SESEQ SEDEQ",
		"3 2"
	],
	[
		1,
		"Alimentación nutritiva",
		"Estar en los primeros diez lugares en Alimentación Nutritiva y de Calidad. Línea base: 11º lugar.",
		"Mejorar",
		"SESEQ SEDEA SEDESOQ",
		"2 3"
	],
	[
		1,
		"Pobreza extrema",
		"Reducir en 50% la pobreza extrema. Línea base: 2.9% de la población.",
		"Mejorar",
		"SEDESOQ ST SEMUJERES",
		"1 10"
	],
	[
		1,
		"Progreso social",
		"Mantenerse en los primeros tres lugares del Índice de Progreso Social. Línea base: 2º lugar.",
		"Mantener",
		"SEDESOQ SECPLAN",
		"1 3 10"
	],
	[
		1,
		"Calidad de vivienda",
		"Pasar a los primeros 10 lugares en Calidad y Espacios de Vivienda. Línea base: 11º lugar.",
		"Mejorar",
		"SEDESOQ SDUOP",
		"1 11"
	],
	[
		1,
		"Servicios en la vivienda",
		"Pasar a los primeros 10 lugares en Servicios Básicos en la Vivienda. Línea base: 15º lugar.",
		"Remontar",
		"SEDESOQ SDUOP",
		"6 11"
	],
	[
		2,
		"Escolaridad promedio",
		"Incrementar el grado de escolaridad promedio de 10.5 a 11, hasta el 5º semestre de preparatoria concluida.",
		"Mejorar",
		"SEDEQ",
		"4"
	],
	[
		2,
		"Analfabetismo",
		"Reducir el analfabetismo general de 3.5% a menos del 2% de la población.",
		"Mejorar",
		"SEDEQ SEDESOQ",
		"4 10"
	],
	[
		2,
		"Cobertura de primaria",
		"Posicionarse en los primeros 5 lugares nacionales en cobertura de primaria. Línea base: 4º lugar.",
		"Mantener",
		"SEDEQ",
		"4"
	],
	[
		2,
		"Cobertura de secundaria",
		"Posicionarse en los primeros 5 lugares nacionales en cobertura de secundaria. Línea base: 4º lugar.",
		"Mantener",
		"SEDEQ",
		"4"
	],
	[
		2,
		"Cobertura media superior",
		"Posicionarse en los primeros 15 lugares en cobertura de educación media superior. Línea base: 23º lugar.",
		"Remontar",
		"SEDEQ SEJUVE",
		"4 10"
	],
	[
		2,
		"Permanencia en primaria",
		"Pasar a los primeros 15 lugares entre entidades con menor abandono en primaria. Línea base: 20º lugar.",
		"Remontar",
		"SEDEQ SEDESOQ",
		"4"
	],
	[
		2,
		"Permanencia en secundaria",
		"Pasar a los primeros 15 lugares entre entidades con menor abandono en secundaria. Línea base: 22º lugar.",
		"Remontar",
		"SEDEQ SEJUVE",
		"4"
	],
	[
		2,
		"Permanencia media superior",
		"Pasar a los primeros 20 lugares entre entidades con menor abandono en educación media superior. Línea base: 29º lugar.",
		"Remontar",
		"SEDEQ SEJUVE",
		"4"
	],
	[
		2,
		"Abandono escolar",
		"Reducir el abandono escolar en 1% en secundaria y educación media superior con respecto al año anterior.",
		"Mejorar",
		"SEDEQ SEJUVE",
		"4"
	],
	[
		2,
		"Bachilleratos tecnológicos",
		"Incrementar la matriculación en 1% anual. Línea base: 27,592 estudiantes; meta: 29,582 en el ciclo 2027–2028.",
		"Mantener",
		"SEDEQ",
		"4 9"
	],
	[
		2,
		"Educación superior flexible",
		"Incrementar la matrícula de programas híbridos, mixtos y no escolarizados en 1% anual. Línea base: 9,411; meta: 10,109 en 2027–2028.",
		"Mantener",
		"SEDEQ",
		"4 10"
	],
	[
		2,
		"Ciencia y tecnología",
		"Incrementar la matrícula superior en áreas científicas y tecnológicas en 1% anual. Línea base: 30,912; meta: 33,142 en 2027–2028.",
		"Mantener",
		"SEDEQ SEDESU",
		"4 9"
	],
	[
		2,
		"Museos por habitante",
		"Pasar al 3er lugar en museos por cada 100,000 habitantes. Línea base: 6º lugar.",
		"Mejorar",
		"SECULT",
		"4 11"
	],
	[
		2,
		"Centros culturales",
		"Pasar del 6º al 3er lugar en centros culturales y casas de cultura por cada 100 mil habitantes.",
		"Mejorar",
		"SECULT",
		"4 11"
	],
	[
		2,
		"Actividades culturales",
		"Aumentar en 15% el promedio de actividades culturales por cada 10,000 habitantes. Línea base: tasa de 0.08.",
		"Mantener",
		"SECULT",
		"4 11"
	],
	[
		2,
		"Visitantes a museos",
		"Colocarse dentro de los 10 primeros estados en visitantes a museos. Línea base: 11º lugar.",
		"Mejorar",
		"SECULT SECTUR",
		"8 11"
	],
	[
		2,
		"Cultura en los municipios",
		"Lograr que 20% de las actividades culturales se realicen fuera del municipio capital. Línea base: 1.45%.",
		"Mejorar",
		"SECULT",
		"10 11"
	],
	[
		2,
		"Selecciones nacionales",
		"Pasar del 8º al 5º lugar en aportación de deportistas a selecciones nacionales en el ciclo olímpico.",
		"Mejorar",
		"SEDEQ SEJUVE",
		"3 4"
	],
	[
		2,
		"Espacios deportivos",
		"Ubicarse entre los 10 primeros estados en espacios deportivos por cada 100 mil habitantes. Línea base: 11º lugar.",
		"Mejorar",
		"SEDEQ SDUOP",
		"3 11"
	],
	[
		2,
		"Deporte gratuito",
		"Aumentar las actividades deportivas gratuitas en municipios en 10% anual. Línea base: 272 en 2021; meta: 484 en 2027.",
		"Remontar",
		"SEDEQ SEJUVE",
		"3 10"
	],
	[
		2,
		"Juegos Nacionales",
		"Mantenerse entre los primeros 5 lugares en medallas totales en Juegos Nacionales CONADE. Línea base: 5º lugar.",
		"Mantener",
		"SEDEQ",
		"3 4"
	],
	[
		2,
		"Deporte paralímpico",
		"Mantenerse entre los primeros 5 lugares en medallas totales en Juegos Nacionales paralímpicos. Línea base: 4º lugar.",
		"Mantener",
		"SEDEQ",
		"3 10"
	],
	[
		3,
		"PIB no petrolero",
		"Permanecer en los primeros 15 lugares en participación del PIB no petrolero. Línea base: 15º lugar.",
		"Mantener",
		"SEDESU SECFIN",
		"8"
	],
	[
		3,
		"PIB per cápita",
		"Mantener al estado en los primeros 5 lugares en PIB per cápita. Línea base: 5º lugar.",
		"Mantener",
		"SEDESU SECFIN",
		"8"
	],
	[
		3,
		"Atracción de inversión",
		"Aumentar la tasa de incremento anual de proyectos de atracción de inversión de 7.7% a 10%.",
		"Mejorar",
		"SEDESU",
		"8 9"
	],
	[
		3,
		"Economía estable",
		"Estar entre los primeros 15 lugares en Economía Estable del Índice de Competitividad Estatal del IMCO y por encima de la media. Línea base: 16º lugar.",
		"Mejorar",
		"SEDESU SECFIN",
		"8"
	],
	[
		3,
		"Formalidad laboral",
		"Estar entre los primeros 5 lugares en formalidad de la Población Económicamente Activa. Línea base: 8º lugar.",
		"Mejorar",
		"ST SEDESU",
		"8"
	],
	[
		3,
		"Empleos formales",
		"Mantenerse en los primeros 3 lugares en crecimiento anual de creación de empleos formales. Línea base: 3er lugar.",
		"Mantener",
		"ST SEDESU",
		"8"
	],
	[
		3,
		"Economía regional",
		"Lograr que las regiones fuera del área metropolitana participen en al menos 20% del PIB estatal. Línea base: 18.7%.",
		"Remontar",
		"SEDESU SEDEA SECTUR",
		"8 10"
	],
	[
		3,
		"Empleo juvenil",
		"Mantenerse entre los 5 estados con menor porcentaje de Juventud Económicamente No Activa (Disponible).",
		"Mejorar",
		"SEJUVE ST",
		"8 10"
	],
	[
		3,
		"Paridad salarial",
		"Estar en los primeros 17 lugares en paridad salarial. Línea base: 21º lugar.",
		"Remontar",
		"ST SEMUJERES",
		"5 8 10"
	],
	[
		3,
		"Producción primaria",
		"Incrementar la tasa de cambio sexenal del valor de producción del sector primario de 48.6% a 50%.",
		"Remontar",
		"SEDEA",
		"2 8"
	],
	[
		3,
		"Llegada de turistas",
		"Estar entre los primeros 5 lugares en llegada de turistas en estados sin costa.",
		"Mejorar",
		"SECTUR",
		"8 12"
	],
	[
		4,
		"Transporte público",
		"Pasar al menos al décimo lugar en calificación de transporte público. Línea base: 20º lugar.",
		"Remontar",
		"AMEQ SDUOP",
		"11 13"
	],
	[
		4,
		"Carga aérea",
		"Mantenerse en las primeras cuatro posiciones en movimiento de carga aérea. Línea base: 4º lugar.",
		"Mantener",
		"SEDESU SDUOP",
		"9"
	],
	[
		4,
		"Infraestructura vial",
		"Mantenerse entre los primeros cinco lugares en calificación de calles, avenidas, carreteras y caminos sin cuota. Línea base: 5º lugar.",
		"Mantener",
		"SDUOP",
		"9 11"
	],
	[
		4,
		"Superficie protegida",
		"Aumentar en 7,000 hectáreas la superficie protegida. Línea base: 434,928 hectáreas.",
		"Mantener",
		"SEDESU SEDEA",
		"13 15"
	],
	[
		4,
		"Emisiones de CO₂",
		"Reducir la tasa de crecimiento de emisiones de CO₂ tendencial en 8% para 2027.",
		"Mejorar",
		"SEDESU AMEQ",
		"7 13"
	],
	[
		4,
		"Infraestructura educativa",
		"Llegar al décimo lugar en calificación de instalaciones y mobiliario educativo en educación básica. Línea base: 14º lugar.",
		"Mantener",
		"SEDEQ SDUOP",
		"4 9"
	],
	[
		4,
		"Agua dentro del hogar",
		"Alcanzar y mantenerse en el lugar 10 en viviendas con agua entubada dentro del hogar. Línea base: 13º lugar.",
		"Remontar",
		"SDUOP SEDESOQ",
		"6 11"
	],
	[
		4,
		"Viviendas con drenaje",
		"Mantenerse en el lugar 10 en viviendas que cuentan con drenaje. Línea base: 10º lugar.",
		"Mantener",
		"SDUOP SEDESOQ",
		"6 11"
	],
	[
		4,
		"Hogares con Internet",
		"Alcanzar y mantenerse en el quinto lugar en porcentaje de hogares con Internet. Línea base: 6º lugar.",
		"Mantener",
		"SDUOP SEDESU",
		"9 10"
	],
	[
		4,
		"Calidad de servicios de agua",
		"Mantenerse en los primeros tres lugares en calificación de agua potable, drenaje y alcantarillado. Línea base: 3º lugar.",
		"Mantener",
		"SDUOP",
		"6"
	],
	[
		4,
		"Calentadores solares",
		"Alcanzar el quinto lugar en uso de calentadores solares en viviendas. Línea base: 7º lugar.",
		"Mejorar",
		"SEDESU SEDESOQ",
		"7 13"
	],
	[
		4,
		"Capacidad eléctrica",
		"Aumentar en 50% la capacidad del sistema de transmisión y distribución de energía eléctrica del estado.",
		"Mejorar",
		"SEDESU SDUOP",
		"7 9"
	],
	[
		4,
		"Aguas residuales",
		"Alcanzar el lugar 15 en tratamiento de aguas residuales. Línea base: 24º lugar.",
		"Remontar",
		"SDUOP SEDESU",
		"6 12"
	],
	[
		5,
		"Policía profesional",
		"Contar con una de las mejores policías del país, profesional y certificada.",
		"Mejorar",
		"SSC",
		"16"
	],
	[
		5,
		"Seguridad tecnológica",
		"Blindaje del estado con mejora de sistemas tecnológicos en materia de seguridad.",
		"Mantener",
		"SSC",
		"9 16"
	],
	[
		5,
		"Policía de proximidad",
		"Implementar el modelo de Policía de Proximidad Queretano en todos los municipios.",
		"Mejorar",
		"SSC SEGOB",
		"16"
	],
	[
		5,
		"Derechos fundamentales",
		"Mantenerse en los primeros tres lugares del factor Derechos Fundamentales del Índice del Estado de Derecho. Línea base: 2º lugar.",
		"Mantener",
		"SEGOB SEMUJERES",
		"10 16"
	],
	[
		5,
		"Cumplimiento regulatorio",
		"Mantenerse en los primeros tres lugares del factor Cumplimiento Regulatorio del Índice del Estado de Derecho. Línea base: 2º lugar.",
		"Mantener",
		"SEGOB CONT",
		"16"
	],
	[
		6,
		"Gobierno abierto",
		"Pasar del lugar 29 a los primeros 15 lugares en el Índice de Gobierno Abierto.",
		"Remontar",
		"CONT SEGOB SECPLAN",
		"16 17"
	],
	[
		6,
		"Trámites sin corrupción",
		"Pasar del lugar 10 a los primeros 5 en usuarios que experimentaron algún acto de corrupción en al menos un trámite.",
		"Remontar",
		"CONT SEGOB",
		"16"
	],
	[
		6,
		"Mejora regulatoria",
		"Pasar del 4º al 1er lugar en el indicador subnacional de Mejora Regulatoria, según el Observatorio Nacional de Mejora Regulatoria.",
		"Mejorar",
		"SEDESU CONT",
		"8 16"
	],
	[
		6,
		"Gobernanza digital",
		"Entrar a los primeros 5 lugares del Índice de Gobernanza Digital. Línea base: 29º lugar.",
		"Remontar",
		"SECPLAN SEGOB",
		"9 16"
	],
	[
		6,
		"Tiempo regulatorio",
		"Pasar del 25º a los primeros 10 lugares en tiempo requerido para cumplir con el marco regulatorio.",
		"Remontar",
		"SEDESU CONT",
		"8 16"
	],
	[
		6,
		"Presupuesto por resultados",
		"Pasar del lugar 23 a los primeros 10 en el Informe de Diagnóstico PbR SED.",
		"Remontar",
		"SECFIN SECPLAN CONT",
		"16 17"
	],
	[
		6,
		"Balance presupuestario",
		"Mantener un balance presupuestario sostenible.",
		"Mantener",
		"SECFIN",
		"16"
	],
];
export const getMetas = (id) =>
  METAS.filter((meta) => meta[4].split(/\s+/).includes(id));
export const COLORS = [
  "",
  "#65ddcd",
  "#d4a0ed",
  "#6caaf1",
  "#f2bd75",
  "#f0859a",
  "#94a1c8",
];
// Agrupación editorial para navegación, no clasificación oficial del PED.
export const GROUPS = [
  "Todas las dependencias",
  "Bienestar y salud",
  "Educación y cultura",
  "Economía y desarrollo",
  "Territorio y movilidad",
  "Seguridad",
  "Gobierno y gestión",
];
