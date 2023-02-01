import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './components/login/Login';
import {useCookies} from 'react-cookie';
import Detail from './pages/detail/Detail';
import DetailTransport from './pages/detail/DetailTransport';
import DetailTaxi from './pages/detail/DetailTaxi';
import About from './pages/About';

function App() {
  const [token,setToken]=useCookies(["user-token"]);
  
  return (
    <div>
      {token["user-token"]?
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/About" element={<About></About>}/>
                <Route path="/Services/:category" element={<Services></Services>}/>
                <Route path="/Services/:category/:id" element={<Detail></Detail>}/>
                <Route path="/transport/:name/:id" element={<DetailTransport></DetailTransport>}/>
                <Route path="/transport/taxi/:id" element={<DetailTaxi></DetailTaxi>}/>
              </Routes>
            </BrowserRouter>
      :<Login></Login>}
    </div>
  );
}

export default App;
