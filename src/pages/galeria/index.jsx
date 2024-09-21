import { useState, useEffect } from "react";
import { CarruselTriple } from '../../components/carruseles/carrusel.jsx';
import { Seccion, BotonVerMas } from "../../components/seccion/seccion.jsx";
import Collage from "../../components/collage";
import { IMAGENES } from "../../assets/static/Galerias/imagenes.js";
import './galeria.css';

export default function Galeria() {
	const [isVerMas, setVerMas] = useState(false);
    const [viewport, setViewport] = useState(window.innerWidth)
	const modificarVerMas = () => setVerMas(!isVerMas);


	useEffect(() => {

        window.scrollTo(0,0)

    },[])

	return <div className={`Galeria`}>
		<h2>Galería</h2>
		{/* Carousel */}
		<div className="Galeria__Carousel">
			<CarruselTriple tamañoGrupos={viewport > 900 ? "3" : "1"} imagenesList={IMAGENES} />
		</div>

		{/* Sección: Instalaciones */}
		<Seccion
			className={(isVerMas ? "flex-column" : "")}
			titulo="Instalaciones"
			boton={<BotonVerMas onClick={modificarVerMas} isVerMas={isVerMas} />}
		>
			<Collage
				imagenes={IMAGENES.filter(({ especialidad }) => especialidad === "Instalaciones")}
				limitado={isVerMas ? "false" : "true"} />
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