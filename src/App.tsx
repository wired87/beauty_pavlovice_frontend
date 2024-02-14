import React from 'react';
import './App.css';
import "./styles/coponentStyles/nav.css";
import Header from "./components/navigation/Header/Header";
import Footer from "./components/navigation/Footer/Footer";
import Home from "./screens/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App :React.FC= () => {

  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


/*
<Route path="termin" element={<Termin />} />
<Route path="imprint" element={<Info />} />
<Route path="*" element={<NotFound />} />
 */