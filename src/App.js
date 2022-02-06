import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Wiki from './Component/Wiki/Wiki';

function App() {

  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/wiki' element={<Wiki />}></Route>
    </Routes>
  );
}

export default App;
