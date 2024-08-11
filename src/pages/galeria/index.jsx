import { CarruselTriple } from '../../components/carruseles/carrusel.jsx';
import './galeria.css';

export default function Galeria() {
	return <div className={`Galeria`}>
		<h2>Galeria!</h2>
		{/* Carousel */}
		<div className="Galeria__Carousel">
			<CarruselTriple />
		</div>
	</div>
}