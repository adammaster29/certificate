import React from 'react';
import { Button } from 'react-bootstrap';
const Home = ({certificates}) => {
    return (
        <div className="App">
        <div className='container--hello'>
           <h2 className="title"> <span >  Hello!,</span> welcome to my certificate</h2>
           <img className='img-adam' src='image/ADAm.jpg' alt="adam" />
        <br/><br /><p>Name: <span>Adalberto agudelo</span></p>
        <p>Age:<span> &nbsp;   29 year old</span></p>
        </div>

       {certificates.map(certificate => (
         
         <a href={certificate.pdf} target="_blank" className="container--certificate"  key={certificate.id} >
           
           <img className='img-certificate' src={certificate.image.url} alt="" />
           
           <br />
           <li>
            
             {certificate.name}
           </li>
           
         </a>
       ))}
     
     
    </div>
    );
};

export default Home;