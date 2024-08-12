export default function Imagen({ alt, url }) {
    const mostrarImagen = () => {
        window.open(url, '_blank');
    };

    return (
        <img
            alt={alt}
            src={url}
            onClick={mostrarImagen}
            style={{ cursor: 'pointer' }}
        />
    );
}
