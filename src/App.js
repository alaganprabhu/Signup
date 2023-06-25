// import Navbar from './Components/Navbar';
import Sign from './Components/Form_passw_sub';
import Home from './Components/Home';
import { Link,Route,Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>

        <Link to ="/"></Link>
        <Link to ="/home"></Link>

        <Routes>
          <Route path='/' element={<Sign/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </div>
      
    
     
    
  );
}

export default App;
