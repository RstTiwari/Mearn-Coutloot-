
import { createContext } from 'react';
import './App.css';
import Home from './Components/Home';


function App() {
const addToCart = createContext ;
  return (
    <div className=" hidden- lg App"> 
     <Home />
    </div>
  );
}

export default App;
