import React from 'react';
import './App.css';
import "./styles/coponentStyles/nav.css";
import Header from "./components/navigation/Header/Header";
import Footer from "./components/navigation/Footer/Footer";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContextProvider from "./Context/ContextProvider/MainContextProvider";
import UpperLinkBar from "./components/Home/UpperLinkBar";
import Appointment from "./screens/Appointment/Appointment";
import Category from './screens/Category';
import Eyelashes from './screens/Eyelashes';
import Gesichmassage from './screens/Gesichmassage';
import Peeling from './screens/Peeling';
import Professionele from './screens/Professionele';
import Kosmetikbehandlugen from './screens/Kosmetikbehandlugen';

const App: React.FC = () => {

  return (
    <MainContextProvider>
      <Router>
        <UpperLinkBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="termin" element={<Appointment />} />
          <Route path="Category" element={<Category />} />
          <Route path="product/:productName" element={<Gesichmassage />} />
          <Route path="Eyelashes" element={<Eyelashes />} />
          <Route path="Gesichmassage" element={<Gesichmassage />} />
          <Route path="Peeling" element={<Peeling />} />
          <Route path="Professionele" element={<Professionele />} />
          <Route path="Kosmetikbehandlugen" element={<Kosmetikbehandlugen />} />






        </Routes>
      </Router>
    </MainContextProvider>

  );
}

export default App;


/*
<Route path="termin" element={<Appointment />} />
<Route path="imprint" element={<Info />} />
<Route path="*" element={<NotFound />} />
        <Footer/>

 */