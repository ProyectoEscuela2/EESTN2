/*
Nota[1.0]: ¡Bienvenido! Aun estás aquí. Te felicito. Presiona Alt + Z si no ves la parte que está acá (Justo acá, este parentesis) A menos que tengas un televisor más largo que las vías del tren.
En esta sección aprenderemos:
    - Un poco sobre componentes.
    - Outlets
    - Algo sobre contexto.
*/

// Generales (Importamos a los protagonistas: Context y Outlet)
import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
// Componentes (Estos componentes se verán en todas las páginas)
import { Navbarr } from '@/components/navbar/navbar.jsx'
import { Footer } from '@/components/footer/footer.jsx'
import Redes from '@/components/redes/redes.jsx';

/*
Nota[1.1]: Para profundizar más en contexto ve a la documentación oficial de React. Aun así, intentaré darte un poco de entendimiento. Quiero que veas a la constante espContexto como una variable que almacena un valor y no se limita solamente a este archivo, sino que podemos utilizarlos en otros archivos.
*/
// Contexto
export const espContexto = createContext(0); // Para iniciar le damos un valor de "0" ya que aun no queremos colocar nada.

// RootPage Componente (Muy importante, los componentes de React deben iniciar su nombre con mayúscula)
function RootPage() {
    /*
    Nota[1.2]: useState es un estado. También es un concepto de React y te recomiendo que veas la documentación oficial. Quiero que lo veas como una variable que puede modificar su contenido y actualizar el componente de React.
    Si te fijas, del useState extraemos dos valores, eso se llama destructuración. Ejemplos:
        const {foo, bar} = {foo: "Juan", bar: "Pedro"}
        const [oop, qqa] = ["Santiago", "Mateo"]
    Aquí, useState nos proporciona dos variables:
        const [estado, función_que_cambia_el_estado] = useState(value)
    Por lo cual, `espActiveContx` va a ser igual a 0 por el momento, y si queremos cambiarlo, ejecutamos setEspActiveContx(1), y luego el estado se actualizará y espActiveContx ahora va a ser 1. Y lo mejor de todo, es que si estamos mostrando espActiveContx en el documento (página web que se ve en el navegador), el valor se actualizará sin necesidad de refrescar la página. Porque cada vez que se actualice el estado de un componente, se actualizará dentro del componente las partes que se ven afectadas por este cambio. Te recomiendo que veas la documentación, ya que los estados son esenciales en React Joven. Y te animo a que puedas aprender React y que a este proyecto no lo veas como tarea, sino como un aprendizaje y una manera de mejorar y crecer!
    */
    const [espActiveContx, setEspActiveContx] = useState(0)

    /*
    Nota[1.1.2]: Primero ve la Nota[1.1.1]
    Esta función lo que hace es obtener un argumento (tipo de dato entero) y modifica el estado "espActiveContx" con la ayuda de la función "setEspActiveContx".
    Esta función lo que hace es llevar un control de la especialidad que está activa. Si no comprendes, ve a la ruta de especialidades en la página de la escuela, y verás que cuando seleccionas entre especialidades, la información de la página irá cambiando. Bueno, es gracias a esta función que cambia. Cada especialidad tiene un id en específico, que lo podrás ver cuando veas las notas de los archivos estáticos (Ver Nota[4.1.1])
    */
    const handleEsp = (idEsp) => {
        setEspActiveContx(idEsp)
    }

    /*
    Nota[1.1.1]: Como mencionamos en la Nota[1.1], el contexto tiene un alcance mayor al archivo donde es creado. Y ese alcance lo definimos con <espContexto.Provider>Todo lo que esté acá adentro, podrá acceder al valor del contexto, que al principio era 0. Pero cuando utilizamos un proveedor, como en este caso, tendremos que pasarle un valor, que es el valor del contexto.</espContexto.Provider>
    
    El atributo value tiene el valor del contexto. El valor es un objeto con una variable que contiene el valor del estado "espActiveContx" y el segundo es una función que definimos para cambiar el estado (ver Nota[1.1.2]). Y si, cuando el estado cambia, se actualiza en todos los lugares donde se llame.
    */
    return <espContexto.Provider value={{ espActiveContx, handleEsp }}>
        {/* Entonces, todo lo que esté acá adentro, tendrá acceso al valor del contexto ({int, func}) */}
        <Navbarr />
        <Redes />
        {/*
        Nota[1.3]: Outlet es salida. Basicamente, este outlet se va a reemplazar por el elemento de la ruta hija que se encuentre activa.
        
        Para comprender mejor te daré un ejemplo:
            Estamos en la ruta "/". Si no hay nada detrás de la barra, donde está el elemento <Outlet /> en este componente, se ejecutará en su lugar el elemento <IndexPage /> que definimos en main.jsx. En cambio, si está escrito "/especialidades", se mostrará el elemento <EspecialidadesPage />. En caso de que haya algo como esto "/flksdj fljsdlf " que es una ruta que no definimos, se mostrará el errorElement definido en la ruta raíz.
        Por eso es que todas las páginas tiene la navbar, los botones de redes y el footer, pero en ningún lado vemos su código, excepto aquí, que es donde las llamamos una vez para todas las páginas.
        */}
        <Outlet />
        <Footer />
    </espContexto.Provider>
}

// Exportamos el componente para que sea utilizado como elemento en otro componente
export default RootPage

/*
Nota[1.4]: No quiero marearte mucho, así que no habrá una nota para cada pagina, así que te mostraré un poco como funciona errorPage y EspecialidadesPage y pasaremos a los components.

Por si no quedó claro, un componente de React es una función cuyo nombre comienza con mayúsculas y retorna código "html" que en realidad es transpilado por babel, te recomiendo ver la documentación oficial de React para entender más.

function NombreComponente(props) {
    return <codigo>
        <mas_codigo />
        <elemento />
    </codigo>
}

Busca en la navegación de Visual Studio Nota[1.5] para continuar con el tutorial
*/
