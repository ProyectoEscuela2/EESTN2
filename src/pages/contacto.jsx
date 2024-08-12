import React, { useState } from 'react';
import '../styles/contacto.css';
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Map from '../components/mapa/mapa';

const InformacionDeContacto = () => {
  return (
    <div className="informacion-de-contacto">
      <h2>Información de Contacto</h2>
      <ul>
        <li>
          <span>Dirección:</span>
          <p>Avenida Moreno 79, San Nicolás de los Arroyos</p>
        </li>
        <li>
          <span>Teléfono:</span>
          <a className='contacto-texto' href="tel:+543364110849" target="_blank" rel="noopener noreferrer">
            +54 3364-110-849

          <span className="telefono-estatico"><FaPhone /></span>
          </a>
        </li>
        <li>
          <span>Email:</span>
          <a className='contacto-texto' href="mailto:tadeolattanzio1@gmail.com" target="_blank" rel="noopener noreferrer">
            tadeolattanzio1@gmail.com
          <span className="email-estatico"><SiGmail /></span>
          </a>
        </li>
      </ul>
    <hr />
    </div>
  );
};

const HorariosDeAtencion = () => {
  const [mostrarHorarios, setMostrarHorarios] = useState(false);

  return (
    <div className="horarios-de-atencion">
      <h2>Horarios de Atención</h2>
      <ul className={`lista-horarios ${mostrarHorarios ? 'mostrar-horarios' : ''}`}>
        <li>7:30 - 12:00</li>
        <li>13:30 - 17:55</li>
      </ul>
      <button
        className="boton-horarios"
        onClick={() => setMostrarHorarios(!mostrarHorarios)}
      >
        {mostrarHorarios ? 'Ocultar Horarios' : 'Ver Horarios'}
      </button>
    </div>
  );
};

const Contacto = () => {
  return (
    <section className="contenedor-contacto">
      <div className="contacto-cont">
      <div className="contenedor-informacion-de-contacto">
        <InformacionDeContacto />
      </div>
      <div className="contenedor-horarios-de-atencion">
        <HorariosDeAtencion />
      </div>
      </div>
      <div className="contacto-map">
        <Map />
      </div>
    </section>
  );
};

export default Contacto;