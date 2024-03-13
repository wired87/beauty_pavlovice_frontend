import React from 'react';
import './App.css';
import "./styles/coponentStyles/nav.css";
import Header from "./components/navigation/Header/Header";
import Footer from "./components/navigation/Footer/Footer";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContextProvider from "./Context/ContextProvider/MainContextProvider";
import ServicesContextProvider from "./Context/ContextProvider/ServicesContextProvide";
import UpperLinkBar from "./components/Home/UpperLinkBar";
import Appointment from "./screens/Appointment/Appointment";
import Category from './screens/Category';
import Product from './screens/Product';
import OpeningTimeMain from './components/Home/openingTime/OpeningTimeMain';
import Imprint from "./screens/Imprint";

const App: React.FC = () => {
  return (
    <MainContextProvider>
      <ServicesContextProvider>
        <Router>
          <UpperLinkBar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="termin" element={<Appointment />} />
            <Route path="category" element={<Category />} />
            <Route path="product/:productName" element={<Product />} />
            <Route path="/offnungszeiten" element={<OpeningTimeMain />} />
            <Route path="/imprint" element={<Imprint />} />
          </Routes>
          <Footer />
        </Router>
      </ServicesContextProvider>
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