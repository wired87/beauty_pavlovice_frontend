import React, { memo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import OpeningTimeMain from "../components/Home/openingTime/OpeningTimeMain";
import "../styles/main.css";
import "../styles//coponentStyles/homeStyles/homeMain.css";
import CarouselHome from "../components/Home/CarouselHome";

const iFrameSrc:string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5463792379865!2d13.69820687595969!3d51.0429983717113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c57ef26975e1%3A0x1ac483765364d384!2sReisewitzer%20Str.%2020%2C%2001159%20Dresden%2C%20Germany!5e0!3m2!1sen!2s!4v1708539997213!5m2!1sen!2s"


const Home: React.FC = () => {
  const navigate = useNavigate();
  const changeScreen = (screen:string) => {
    navigate(screen);
  };

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);


  return (
    <div style={{}} className="container home-container gap-5" >
      <div>
        <CarouselHome />
      </div>

      <div style={{ marginTop: "5%" }} data-aos="fade">
        <OpeningTimeMain />
      </div>
      <div style={{ marginTop: "5%" }} className="row mb-5 justify-content-center">
        <div className="col-md-6" style={{ height: "400px" }}>


          <div className="mx-auto  responsive-map" data-aos="fade"

            style={{ height: "100%" }}>
            <iframe src={iFrameSrc} height='600' width='600' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="col-md-1"> </div>
        <div className="col-md-5 gap-3" data-aos="fade"
          style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <h3 className="Address">
            Besuche uns!
          </h3 >
          <h3 className="sub_address">
            Reisewitzer Str. 20 <br />
            01159 Dresden <br />
            Tel: +49 152 52197474 <br/>
            <br/>
            oder
          </h3>
          <button className="sub_address text-bold bg-dark text-white" onClick={() => changeScreen("/termin")} >
            Vereinbare einen Termin
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Home);
//       <div className={"flexCenter imageContainer marginAuto"}></div>