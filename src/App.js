import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Comeout from './components/Comeout';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/explore' element={<><Header/><Comeout/></>}></Route>
            <Route path='/' element={<><Header/><Home/></>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
