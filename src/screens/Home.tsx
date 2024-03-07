import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import OpeningTimeMain from "../components/Home/openingTime/OpeningTimeMain";
import title from "../assets/images/title.jpeg";
import "../styles/main.css";
import "../styles//coponentStyles/homeStyles/homeMain.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/termin");
  };

  return (
    <div style={{}} className="container home-container gap-5" >
      <img src={title} className={"titleImage mt-5"} alt="title.png" />
      <OpeningTimeMain />
      <div className="row mb-5 justify-content-center">
        <div className="col-md-6" style={{ height: "400px" }}>


          <div className="mx-auto  responsive-map" style={{ height: "100%" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5463792379865!2d13.69820687595969!3d51.0429983717113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c57ef26975e1%3A0x1ac483765364d384!2sReisewitzer%20Str.%2020%2C%2001159%20Dresden%2C%20Germany!5e0!3m2!1sen!2s!4v1708539997213!5m2!1sen!2s" height='600' width='600' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="col-md-6 gap-3 " style={{ display: "flex", flexDirection: "column", }}>


          <h1 className="Address">
            Beauty_Bar_by_Pavlovic, Dresden
          </h1 >
          <h2 className="sub_address"> Reisewitzer Str. 20 <br />
            a
            Dresden
            <br />

            Sachsen
            <br />

            01159 </h2>
          <div style={{ marginLeft: "50px" }} className="d-flex flex-start">

            <button style={{ fontFamily: "Montserrat,sans-serif" }} className="btn  w-50 text-bold bg-dark text-white" onClick={handleButtonClick} >
              Book Your Appointment now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default memo(Home);
//       <div className={"flexCenter imageContainer marginAuto"}></div>