/*
Nota[4.1]: Como somos de Info, arrancamos en info. X_ESPECIALIDAD_DATA es un objeto. Un objeto tiene la siguiente estructura:
    
    const objeto = { // Muy importante que abra y cierre con llaves.
        propiedad: 'valor', // propiedad = "propiedad". 'valor': "string", 1, true, null
    }

Por lo cual, dentro de INFO_DATA, al igual que en los objetos de las demás especialidades, definiremos las siguientes propiedades:
    - videoURL. URL de un video de YouTube. Este video explica la especialidad.
    - titulo. Nombre de la especialidad.
    - acercaDeEspecialidad. Es un array [item1, item2]. Aquí va justamente la descripción sobre la especialidad, y si quiere que haya más de un párrafo y no esté todo en un mismo párrafo, se divide en elementos. Ej: ["paragraph1", "paragraph2" ..., "paragraphx"]
    - diseñoCurricularSRC. Enlace del archivo del diseño curricular que se encuentra alojado en Google Drive.
    - practicasInfo. Es un array [item1, item2] en el cual, cada item es un objeto con una única propiedad: "id". Este "id" es una referencia a otro archivo que contiene todas las empresas donde se pueden hacer prácticas profesionalizantes. Para ir a él busca la Nota[4.2] o ve al archivo "./empresas.js"

Eso es lo que te encontrarás aquí y en los demás archivos de la misma naturaleza que este. No hay mucho más para ver aquí. Una vez que haya visto la Nota[4.2], vuelve al archivo index.jsx que se encuentra en la carpeta EspecialidadesPage, dentro de la carpeta pages, o busca Nota[1.5]
*/

export const INFO_DATA = {
    "videoURL": "https://www.youtube.com/embed/dnPapnTgtsc",
    "titulo":"Informática",
    "acercaDeEspecialidad": [ // [Paragraph, Paragraph, ..., Paragraph]
        "La especialidad de Informática dura 4 años. Esta especialidad abarca tanto hardware como software. En cuanto a la primera, se van a adquirir conocimientos en instalación, configuración, mantenimiento y reparación de equipos informáticos y redes, además de electrónica y robótica básica e impresión 3D. En cuanto a Software, se adquirirán conocimientos en avanzados en aplicaciones como Word, Excel y PowerPoint, además de aplicaciones de diseño gráfico como Inkscape o GIMP. También se aprende diversos lenguajes de programación, como JavaScript, PHP, C++ y lenguajes de diseño web como CSS y HTML. También se adquieren conocimientos en uso de base de datos.",
    ],
    "diseñoCurricularSRC": "https://drive.google.com/file/d/1gkqZyE4hsy-GKvTUoPtLF8hfhOeYQa7Y/view",
    "practicasInfo": [
        {
            // Nota[4.1.1] Aquí es donde están los "id"s. Ve arriba de todo, a la Nota[4.1] para comprender que es esto.
            "id": 0
        },
        {
            "id": 1
        },
        {
            "id": 2
        },
        {
            "id": 3
        },
        {
            "id": 4
        },
        {
            "id": 5
        },
        {
            "id": 6
        },
        {
            "id": 7
        },


    ],

}
