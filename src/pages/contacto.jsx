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
          <a className='contacto-texto' href="mailto:gdadtecnica2@gmail.com" target="_blank" rel="noopener noreferrer">
            gdadtecnica2@gmail.com
          <span className="email-estatico"><SiGmail /></span>
          </a>
        </li>
      </ul>
    <hr />
    </div>
  );
};


const Contacto = () => {


  function openMailClient() {
    window.location.href = 'mailto:tecnica2sannicolas@abc.gob.ar';
  }

  return (
    <section className="contenedor-contacto">

    <div className="informacion-de-contacto">
      <div className="contenedor-texto-contacto">
      <h2>Información de Contacto</h2>
      <ul>
        <li>
          <span>Dirección:</span>
          <p>Avenida Moreno 79, San Nicolás de los Arroyos</p>
        </li>
        <li className='alinear-contacto'>
          <span>Teléfono:</span>
            +54 3364-110-849
          <span className="telefono-estatico"><FaPhone /></span>
        </li>
        <li>
          <button className='contacto-mail-btn' onClick={openMailClient}>Envíanos un mail</button>
        </li>
      </ul>
    </div>
    <div className="contenedor-mapa-contacto">

      <Map className="mapa-contacto"/>

    </div>
    </div>
    <div className="contenedor-horarios-contacto">
      <h2>Horarios de Secretaría</h2>
      <ul className='ul-horarios-contacto'>
        <li className='li-horarios-contacto'>7:30hs - 12:00hs</li>
        <li className='li-horarios-contacto'>13:30hs - 17:55hs</li>
      </ul> 
    </div>
    </section>
  );
};

export default Contacto;