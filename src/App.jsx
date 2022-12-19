
import { useState } from "react";
import {  HashRouter,  Routes,  Route} from 'react-router-dom'
import "./App.css";
import Home from "./componets/Home";
import list from "./list.json";

function App() {
const[certificates,setCertificates] = useState(list)
  console.log(certificates);
  return (
      <HashRouter>
        <Routes>
        <Route path="/"  element={<Home certificates={certificates} />  } />

        </Routes>
     </HashRouter>
  );
}

export default App;
