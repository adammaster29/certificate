import React from 'react';
import certificado from "../list.json"
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
    const [diplomas, setDiplomas] = useState()
    useEffect(() => {
        setDiplomas(certificado)
    }, [])

    console.log(diplomas)
    return (
        <div className='contenedor__padre'>

            <div className="hijo__titulo"><h2>Diplomas y Certificados</h2> </div>
            <div className="hijo__contenedor">
                <div className="card__foto-grado"></div>
                <div className="card__diploma">
                    {diplomas?.map(diploma => (
                        <ul className="diploma">
                            <p>{diploma.name}</p>
                            <img className='img__diploma' src={diploma.image.url} alt="" />

                        </ul>


                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;