
import {  HashRouter,  Routes,  Route} from 'react-router-dom'
import "./App.css";
import Home from './componets/Home';


function App() {

  return (
      <HashRouter>
        <Routes>
        <Route path="/"  element={<Home/>} />
        </Routes>
     </HashRouter>
  );
}

export default App;
