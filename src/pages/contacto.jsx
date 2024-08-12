import React, { useState } from 'react';
import '../styles/contacto.css';

const InformacionDeContacto = () => {
  return (
    <div className="informacion-de-contacto">
      <h2>Información de Contacto</h2>
      <ul>
        <li>
          <span>Lugar:</span>
          <p>Avenida Moreno 79, San Nicolas de los Arroyos</p>
        </li>
        <li>
          <span>Teléfono:</span>
          <a href="tel:+543364110849" rel="noopener noreferrer" target="_blank">
            +54 3364-110-849
          </a>
          <span className="telefono-estatico">↗️</span>
        </li>
        <li>
          <span>Email:</span>
          <a href="mailto:tadeolattanzio1@gmail.com" rel="noopener noreferrer" target="_blank">
            tadeolattanzio1@gmail.com
          </a>
          <span className="email-estatico">↗️</span>
        </li>
      </ul>
    </div>
  );
};

const HorariosDeAtencion = () => {
  const [mostrarHorarios, setMostrarHorarios] = useState(false);

  return (
    <div className="horarios-de-atencion">
      <h2>Horarios de Atención</h2>
      <button
        className="boton-horarios"
        onClick={() => setMostrarHorarios(!mostrarHorarios)}
      >
        {mostrarHorarios ? 'Ocultar Horarios' : 'Ver Horarios'}
      </button>
      <ul className={`lista-horarios ${mostrarHorarios ? 'mostrar-horarios' : ''}`}>
        <li>7:30 AM - 12 PM</li>
        <li>13:30 - 17:55</li>
      </ul>
    </div>
  );
};

const Contacto = () => {
  return (
    <section className="contenedor-contacto">
      <div className="contenedor-informacion-de-contacto">
        <InformacionDeContacto />
      </div>
      <div className="contenedor-horarios-de-atencion">
        <HorariosDeAtencion />
      </div>
    </section>
  );
};

export default Contacto;