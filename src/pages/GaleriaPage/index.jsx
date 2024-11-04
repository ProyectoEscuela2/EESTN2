// Generales
import { useState, useEffect } from "react";
// Componentes
import { CarruselTriple, ContenedorCarrusel } from '@/components/carruseles/carrusel.jsx';
import { Seccion, BotonVerMas } from "@/components/seccion/seccion.jsx";
import Collage from "@/components/collage/index.jsx";
// Archivos estáticos
import { IMAGENES } from "@/assets/static/Galerias/imagenes.js";
// Estilos
import './style.css';

export default function GaleriaPage() {
	// Estados
	const [isVerMas, setVerMas] = useState(false);
    const [viewport, setViewport] = useState(window.innerWidth)
	const modificarVerMas = () => setVerMas(!isVerMas);

	// Devuelve el view a la parte superior de la página. Sirve para cuando scrolleamos en otra ruta y cambiamos de página
	useEffect(() => {
        window.scrollTo(0,0)
    },[])

	return <div className="Galeria">
		<h2>Galería</h2>
		{/* Carousel */}
		<div className="Galeria__Carousel">
			<ContenedorCarrusel>
				<CarruselTriple tamañoGrupos={viewport > 900 ? "3" : "1"} imagenesList={IMAGENES} />
			</ContenedorCarrusel>
		</div>

		{/* Sección: Instalaciones */}
		<Seccion
			className={(isVerMas ? "flex-column" : "")}
			titulo="Instalaciones"
			boton={<BotonVerMas onClick={modificarVerMas} isVerMas={isVerMas} />}
		>
			<Collage
				imagenes={IMAGENES.filter(({ especialidad }) => especialidad === "Instalaciones")}
				limitado={isVerMas ? "false" : "true"}
			/>
		</Seccion>


		{/* Imagenes de Especialidades */}
		
		{/* Informática */}
		<section className="Galeria__Section">
			<h3>Informática</h3>
			<Collage
				imagenes={IMAGENES.filter(({ especialidad }) => especialidad === "Informática")}
			/>
		</section>

		{/* Electromecánica */}
		<section className="Galeria__Section">
			<h3>Electromecánica</h3>
			<Collage
				imagenes={IMAGENES.filter(({ especialidad }) => especialidad === "Electromecánica")}
			/>
		</section>

		{/* Química */}
		<section className="Galeria__Section">
			<h3>Química</h3>
			<Collage
				imagenes={IMAGENES.filter(({ especialidad }) => especialidad === "Química")}
			/>
		</section>

		{/* MMO */}
		<section className="Galeria__Section">
			<h3>Construcciones</h3>
			<Collage
				imagenes={IMAGENES.filter(({ especialidad }) => especialidad === "Construcciones")}
			/>
		</section>

		{/* Sección: Eventos */}
		<Seccion invertida
			className={(isVerMas ? "flex-column" : "")}
			titulo="Eventos"
			boton={<BotonVerMas onClick={modificarVerMas} isVerMas={isVerMas} />}
		>
			<Collage
				imagenes={IMAGENES.filter(({ especialidad }) => especialidad === "Eventos")}
				limitado={isVerMas ? "false" : "true"} />
		</Seccion>
	</div>
}