import React from 'react';
import { useParams } from 'react-router-dom';
import certificado from "../list.json";

const Detalles = () => {
  const { id } = useParams();
  const selectedDiploma = certificado[id];

  return (
    <div className="detalles-container">
      <h2 className='titulo__detalles'>Detalles del Diploma</h2>
      <div className="detalle__diploma">
        <p className="name__diploma-detalles">{selectedDiploma.name}</p>
        <img className="img__diploma-detalle" src={selectedDiploma.image.url} alt="" />
       
      </div>
      <a  href={selectedDiploma.pdf} className="btn__detalles" target='_blank'>Descargar</a>
    </div>
  );
};

export default Detalles;
