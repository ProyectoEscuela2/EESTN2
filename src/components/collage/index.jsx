import "./collage.css";

export default function Collage({ imagenes, tamañoImagenes = -1 }) {
	return <div className="Collage">
		{imagenes.slice(0, tamañoImagenes).map(({alt, id, url}) => (
			<img key={id} alt={alt} src={url} />
		))}
	</div>
}