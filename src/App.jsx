
import { Button } from "react-bootstrap";
import "./App.css";
import list from "./list.json";

function App() {
  console.log(list);
  return (
    <div className="App">
       <h2 className="title"> <span >  Hello!,</span> welcome to my certificate</h2>
    
       
       {list.map((certificate) => (
         <ul className="container--certificate" key={certificate.name}>
          
           <img src={certificate.image.url} alt="" />
           <br />
           <li>
            
             {certificate.name}
           </li>
           <li>
         
             {certificate.year}
           </li><br />
           <li>
            <a href={certificate.pdf} target="_blank" >< Button className="btn" >Downloads</Button></a>
           </li>
         </ul>
       ))}
     
    </div>
  );
}

export default App;
