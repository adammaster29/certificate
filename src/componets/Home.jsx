import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import certificado from "../list.json";

const ITEMS_PER_PAGE = 8;

const Home = () => {
  const [diplomas, setDiplomas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setDiplomas(certificado);
  }, []);

  const totalPages = Math.ceil(diplomas.length / ITEMS_PER_PAGE);
  const indexOfLastDiploma = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstDiploma = indexOfLastDiploma - ITEMS_PER_PAGE;
  const currentDiplomas = diplomas.slice(indexOfFirstDiploma, indexOfLastDiploma);

  return (
    <div className='contenedor__padre'>
      <div className="hijo__contenedor-titulo">
        <p className="hijo__titulo">Diplomas y Certificados</p>
      </div>
      <div className="hijo__contenedor">
        <div className="contenedor__card-btn"> 
          <div className="card__diploma">
            {currentDiplomas.map((diploma, index) => (
              <Link to={`/detalles/${indexOfFirstDiploma + index}`} key={index} className="diploma-link">
                <div className="diploma">
                  <p className='name__diploma'>{diploma.name}</p>
                  <img className='img__diploma' src={diploma.image.url} alt="" />
                </div>
              </Link>
            ))}
          </div>
<br />
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
               anterior
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
               siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
