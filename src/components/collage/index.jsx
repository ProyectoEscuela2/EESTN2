import { useState, useEffect } from "react";
import "./collage.css";

export default function Collage({ imagenes, limitado }) {
	const [lista, setLista] = useState([]);

	useEffect(function() {
		let _lista = (limitado == "true") ? imagenes.slice(0,5) : imagenes;
		setLista(_lista);	
	}, [limitado])
	
	if (imagenes.length < 1) {
		return <i style={{color: "#bbb"}}>No hay imagenes disponibles</i>
	}

	return <div className={"Collage" + ((limitado == "true") ? " limitado" : "")}>
		{lista.map(({alt, id, url}) => (
			<img key={id} alt={alt} src={url} />
		))}
	</div>
}