# Comparecencias Querétaro

Aplicación React + Vite + Three.js, estática y lista para Git/Vercel. No requiere claves, base de datos ni servidor. Año configurado: **2026** (`YEAR` en `src/data.js`). Catálogo de titulares y nueve metas aportados por el solicitante; no se presentan como información oficial verificada. Las áreas del menú son una agrupación editorial.

## Ejecutar

Node.js 22.12+ (se recomienda Node 24 LTS).

```bash
npm ci
npm run dev
```

`npm test` verifica lectura y parseo; `npm run build` genera `dist/`; `npm run preview` sirve el resultado de producción.

## Agregar comparecencias

Coloca **archivos UTF-8** con siglas en MAYÚSCULAS, sin el año:

- `public/resumen/SEGOB.txt`: resumen ejecutivo; texto libre, párrafos separados por una línea vacía.
- `public/pregyresp/SEGOB.txt`: conversación con el formato siguiente.
- Repite para cada sigla: SEGOB, SECFIN, SECPLAN, CONT, SEDESU, SEDEA, SDUOP, SEDESOQ, SEDEQ, SESEQ, SSC, SECTUR, SECULT, ST, SEJUVE, AMEQ, SEMUJERES, CEA.
- **Contraloría usa `CONT.txt`, no `SECONT.txt`.** Renombra, por ejemplo, `SECFIN2025.txt` a `SECFIN.txt` solamente si corresponde al periodo que vas a publicar. No mezcles comparecencias de diferentes años.

```text
Pregunta [Homero Barrera Mcdonald]: ¿Cuál es la pregunta?
Puede ocupar varias líneas.

Respuesta [Eric Gudiño Torres]: Aquí va la respuesta completa.
Puede tener varios párrafos.

Pregunta: Otra pregunta sin autor identificado.
Respuesta: Su respuesta.
```

También acepta `P:` y `R:`. No uses esas etiquetas al principio de líneas que no deban iniciar un mensaje nuevo. Los nombres entre corchetes son opcionales; si coinciden con `DIPUTADOS`, aparece la foto disponible. El texto sin etiquetas se conserva como transcripción; no se inventan preguntas ni se ejecuta HTML. Los archivos ausentes/vacíos muestran «pendiente», los errores permiten reintentar. Cada pestaña se carga independientemente.

No se incluyen textos reales ni diálogos simulados con afirmaciones de gobierno. En `examples/` hay muestras **ficticias**, fuera de `public/`, para probar el formato sin publicarlas por accidente.

## Fotografías, logo y catálogo

- Agrega el logo real en **`public/documentos/logoQHE.png`**. Three.js lo carga mediante `TextureLoader` y `SpriteMaterial`. Sin el archivo, se ve una marca tipográfica de respaldo; no es un logo oficial.
- Edita `preparationImages` en `src/data.js`: usa URLs directas (sin sintaxis Markdown) o rutas locales como `/retratos/CONT.png` y coloca la foto en `public/retratos/CONT.png`.
- Se conservan las tres URLs de titulares y las tres de diputados facilitadas. Las otras fotos quedan sin URL hasta recibirlas. Si una foto falla o falta, aparecen iniciales. Las imágenes remotas dependen de la disponibilidad de su sitio; para mayor fiabilidad, usa copias locales autorizadas.
- Amplía `DIPUTADOS`, `SECRETARIAS` y `METAS` en `src/data.js`. Las siglas de cada meta están en el **quinto elemento, índice 4**. Solo se incluyen las nueve metas proporcionadas, sin inventar el resto.
- El mapa usa Three.js y botones HTML proyectados en coordenadas 3D: admite teclado, enfoque, hover y toque. La vista de tarjetas ofrece una alternativa. Hay pausa, reducción de movimiento y respaldo sin WebGL.

## Publicar con Git y Vercel

1. Descomprime el proyecto. Abre **esta carpeta** en VS Code y ejecuta `npm ci`, `npm test` y `npm run build`.
2. En Control de código fuente, inicializa el repositorio y publica en GitHub. Se incluyen `.gitignore` y `package-lock.json`. **No subas `node_modules`, `dist`, `.env`, `.vercel` ni este ZIP.**
3. En Vercel, importa el repositorio. Selecciona **Vite**, comando **`npm run build`**, salida **`dist`**, versión Node **24.x**. Si subiste la carpeta dentro de otra, selecciona `comparecencias-qro` como Root Directory.
4. Despliega. Los cambios posteriores a los TXT, imágenes o código se publican al hacer commit y push a la rama configurada.

`vercel.json` fija framework y salida. No hay rutas SPA que requieran reescrituras: las vistas detalladas son modales. Así los TXT inexistentes devuelven 404 y no el HTML de inicio. La compilación separa Three.js y carga la escena bajo demanda. El proyecto no incluye credenciales ni una publicación vinculada a una cuenta.

## Organización

```text
src/
  App.jsx                 Interfaz, directorio y selección
  data.js                 Año, catálogo, imágenes y metas
  content.js              Lectura y parser seguro de TXT
  components/Orbit.jsx    Escena Three.js y botones interactivos
  components/Detail.jsx   Modal, resumen, conversación y metas
  components/Portrait.jsx Imágenes con respaldo de iniciales
public/
  resumen/                SIGLA.txt
  pregyresp/              SIGLA.txt
  documentos/             logoQHE.png
  retratos/               Fotografías locales opcionales
examples/                 TXT ficticios de referencia (no publicados)
```
