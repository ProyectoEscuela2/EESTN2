/*
Nota[3.1]: Para continuar, veremos un componente que contiene algo de lógica, para que comprendas mejor el funcionamiento de los componentes.
*/

// Importamos useState y useEffect para trabajar con estados y efectos en React
import { useState, useEffect } from "react";
// Importamos el componente Imagen para renderizarlo en un renderizado de listas
import Imagen from "../Imagen";
import "./collage.css";

// Este componente necesita dos argumentos, imagenes que es una lista (array) con la información de las imagenes y limitado, que es un valor boleano (limita la cantidad de imagenes a mostrar)
// Antes de continuar, este componente es renderizado en la sección de Galeria, te recomiendo verlo en la página web antes de continuar
export default function Collage({ imagenes, limitado }) {
	// En el estado lista, se guardará toda la información de las imagenes, de más está decir que será en una lista.
	const [lista, setLista] = useState([]);

	// Al useEffect vamos a usarlo por primera vez cuando se monte el componente, y luego cada vez que cambie el valor de limitado. Esto es, para cuando el usuario haga click en el botón ver más, para expandir las imagenes o contraerlas. Para eso lo usamos, para que cambie la cantidad de imagenes que se muestren.
	useEffect(function() {
		// _lista es una variable temporal, por eso lo indicamos en su nombre con un guión bajo al inicio. Eso indica que solamente se usará en esta función y que será temporal. Es una convención que los programadores usan, tu le puedes poner el nombre que quieras, ya que no cambiará nada.

		// Si limitado es true, de toda las imagenes que tengamos, solamente mostrará cinco, si limitado no es true, mostrará todas las imagenes. Eso es lo que estamos haciendo con el operador terneario
		let _lista = (limitado == "true") ? imagenes.slice(0,5) : imagenes;
		// Almacenamos la lista de imagenes, sea acortada o completa, en la variable _lista, para luego actualizar el estado "lista", con la función "setLista" que el useState de React nos proporciona para cambiar el estado.
		setLista(_lista);	
	}, [limitado]) // La dependencia de este useEffect es "limitado", por lo cual siempre que el valor de esta variable cambie, el valor se verá afectado.
	
	// Renderizado condicional
	// En caso de que no haya imagenes disponibles, mostramos un mensaje, y al ejecutar return, la función termina acá, y no se ejecuta lo de abajo.
	if (imagenes.length < 1) {
		/* dato: para poner estilos en linea como aquí abajo, en react debemos pasarle un objeto con propiedades escritas en camelCase y los valores deben estar entre comillas. Ejemplo:

			const estilos = {
				fontSize: "16rem", // fontSize, no font-size
				fontStyle: "italic" // fontStyle, no font-style
			}
			
			<Component style={estilos} />
		*/
		return <i style={{color: "#bbb"}}>No hay imagenes disponibles</i>
	}

	// En caso de que si haya imagenes, renderizamos una lista, que es algo propio de React.
	return <div className={"Collage" + ((limitado == "true") ? " limitado" : "")}>
		{
		// Lo que hacemos es recorrer toda la lista con el método map. En los argumentos de la función flecha destructuramos las propiedades que vamos a usar de la imagen (({alt, id, url})) y nota que no usamos llaves{} para englobar lo que la función flecha va a ejecutar, sino que usamos paréntesis(). Usamos () para que la función flecha renderice directamente el componente que le estamos pasando
		lista.map(({alt, id, url}) => (
			// Nota también que aparece un atributo llamado key. Es muy importante que en las listas renderizadas, le proporciones a React este parámetro para que pueda identificarlas. Te recomiendo ver la guía de React con respecto a listas renderizadas para comprender mejor su funcionamiento.
			<Imagen key={id} alt={alt} url={url} />
		))
		}
	</div>
}

// Te recomiendo ir a la Nota[4.100], que por ahora será la última.