/*
Nota[4.2]: Bienvenido a EMPanadas_DATA. Aquí tendrás información sobre las empanadas que la escuela vende. No, mentira (por las dudas). Aquí hay un array[] que contiene un conjunto de objetos, cada objeto tiene propiedades sobre una empresa que ofrece prácticas profesionalizantes a los alumnos de la EEST2SN.
*/

export const EMP_DATA = [
    {
        // Cada objeto tiene un "id", con este id podemos identificar cada empresa en otro archivos, como INFO_DATA, que seguramente vengas de allí.
        "id": 0,
        "nombre": "Ternium",
        "ubicacion": "Av. Savio 1972",
        // El logo tiene una ubicación de una imagen que se encuentra en la carpeta del archivo. En la carpeta /public, pero no hace falta colocar /public, ya que React importa las imagenes desde /public. Por lo tanto, si quieres mostrar imagenes en React, asegurate que las imagenes estén en la carpeta /public.
        "logo": "imagenes/logos/TERNIUM.webp",
        // Le mandamos una propiedad en inglés para no perder la costumbre
        "title": "Empresa metalúrgica"
    },
    {
        "id": 1,
        "nombre": "Sidersa",
        "ubicacion": "RN9 Km 226,5",   
        "logo": "imagenes/logos/SIDERSA.webp",
        "title" : "Servicios siderometalúrgicos"
    },
    {
        "id": 2,
        "nombre": "ACA",
        "ubicacion": "Dr. Román Subiza 1240",
        "logo": "imagenes/logos/ACA.webp",
        "title": "Sistema cooperativo de soluciones agropecuarias"
    },
    {
        "id": 3,
        "nombre": "Sanatorio UOM",
        "ubicacion":"Bartolomé Mitre 594",
        "logo": "imagenes/logos/UOM.png",
        "title": "Departamento de salud pública"
    },
    {
        "id": 4,
        "nombre": "Hospital San Felipe",
        "ubicacion":"Av. Mariano Moreno 31",
        "title": "Centro de salud pública descentralizado"
        

    },
    {
        "id": 5,
        "nombre": "Municipalidad de San Nicolas",
        "ubicacion":"Pres. Illia 1130",
        "logo": "imagenes/logos/Muni.webp",
        "title": "Municipalidad en San Nicolás de los Arroyos"

    },
    {
        "id": 6,
        "nombre": "Moviport",
        "ubicacion":"Avenida Las Rosas 190",
        "logo": "imagenes/logos/MoviPort.webp",
        "title": "Empresa orientada a proveer soluciones logísticas"
    },
    {
        "id": 7,
        "nombre": "G2K",
        "ubicacion":"León Guruciaga 216",
        "logo": "imagenes/logos/G2K.webp",
        "title":"Servicio de alojamiento web"
    },
    {
        "id": 8,
        "nombre": "ProvSer",
        "ubicacion":"Parque Industrial COMIRSA, Calle 3, N° 1090",
        "logo": "imagenes/logos/Provser.webp",
        "title": "Desarrollos técnicos para la cadena de valor en áreas de movimentación"
    },    
    {
        "id": 9,
        "nombre": "Empresas Constructoras"
    
    },
    {    
        "id": 10,
        "nombre": "Estudios de arquitectura"
    },
    {
        "id": 11,
        "nombre": "Loberaz",
        "ubicacion":"Parque Industrial COMIRSA, Calle 3, n° 1155",
        "logo": "imagenes/logos/LOBERAZ.webp",
        "title": "Construcciones y montajes industriales, livianos y pesados"
    },
    {
        "id": 12,
        "nombre": "ARSUC Metal",
        "ubicacion":"Central Acero Argentino Este 698",
        "logo": "imagenes/logos/ARSUC.webp",
        "title": "Taller de trabajo de metales"
    },
    {
        "id": 13,
        "nombre": "AGUAS",
        "ubicacion":"Av. Illia 1130",
        "logo": "imagenes/logos/AGUAS.webp",
        "title": "Organismo descentralizado de la administración pública municipal"
    },
    {
        "id": 14,
        "nombre": "ZETATEC",
        "ubicacion":"Parque Industrial COMIRSA, Calle 3 Este 1065 bis",
        "logo": "imagenes/logos/ZETATEC.webp",
        "title": "Empresa de construcción"
    },
    {
        "id": 15,
        "nombre": "Transba",
        "ubicacion":"San José 647",
        "logo": "imagenes/logos/TRANSBA.webp",
        "title": "Compañía de servicios públicos de electricidad"
    },
    {
        "id": 16,
        "nombre": "San Sebastian",
        "ubicacion":"Parque Industrial COMIRSA, Calle 3",
        "logo": "imagenes/logos/SS.webp",
        "title": "Empresa de transporte"
    },
    {
        "id": 17,
        "nombre": "Sabecort",
        "ubicacion":"Av. Moreno 18",
        "logo": "imagenes/logos/SABECORT.webp",
        "title": "Empresa dedicada a la venta y colocación de equipos de GNC"
    },
    {
        "id": 18,
        "nombre": "Puerto San Nicolás",
        "ubicacion":"Avenida Román Subiza y Ruta Nacional 188",
        "logo": "imagenes/logos/Puerto.webp",
        "title": "Actividad portuaria"
    },
    {
        "id": 19,
        "nombre": "PTP Group",
        "ubicacion":"Avenida Román Subiza y Ruta Nacional 188(Actividad por subcontratacion)",
        "logo": "imagenes/logos/PTP.webp",
        "title": "Operaciones portuarias, transporte y cargas"
    },
    {
        "id": 20,
        "nombre": "Pamsa",
        "ubicacion":"Dr. Román Subiza 1750",
        "logo": "imagenes/logos/pamsa.webp",
        "title": "Planta química"
    },
    {
        // Criminal esta, fijate si consigues la ubicación y un logo
        "id": 21,
        "nombre": "Red de servicios",
        "title": "Red de servicios"
    },
    {
        "id": 22,
        "nombre": "IAS",
        "ubicacion":"Av. Central 1875",
        "logo": "imagenes/logos/IAS.png",
        "title": "Instituto Argentino de Siderurgia"
    },
    {
        "id": 23,
        "nombre": "LEA",
        "ubicacion":"Colón 334",
        "logo": "imagenes/logos/LEA.png",
        "title": "laboratorio de estudios ambientales UTN"
    }
]
