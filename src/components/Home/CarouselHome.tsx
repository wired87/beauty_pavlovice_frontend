import Carousel from 'react-bootstrap/Carousel';
import React, {memo} from "react";
import title from "../../assets/images/title.jpeg";
import massage from "../../assets/images/massage.webp";
import peeling from "../../assets/images/peeling.webp";
import "../../styles/main.css";
import "../../styles/coponentStyles/homeStyles/homeMain.css";
import {useNavigate} from "react-router-dom";
const CarouselHome: React.FC = () => {

  const navigate = useNavigate();
  const defaultColor: {color: string} = { color: "rgba(0,0,0,.4)"}
  const extraStylesItem01: object = { top: 40, left: 160, defaultColor };
  const extraStylesItem03: object = { top: 40, right: 160, defaultColor };

  const extraStylesItem02: object = { top: 40, left: 160,  color: "rgb(224,213,175)"};

  const extraStylesHeadingContainer: object = { top: 0, left: 0, paddingTop: 30, paddingLeft: 20};
  const extraStylesHeadingContainerMassage: object = { bottom: 0, right: 0, paddingTop: 30, paddingLeft: 20};
  const extraStylesHeadingContainerPeeling: object = { top: 0, right: 0, paddingTop: 30, paddingRight: 20};

  return(
    <Carousel
      style={{marginTop: 40}}
      data-bs-theme="dark">
      <Carousel.Item>
        <img src={title} className={"titleImage"} alt="logoNoBg.png" onClick={() => navigate("/")}/>
        <div style={extraStylesHeadingContainer} className={"carouselHeadingContainer alignStartCenter"}>
          <h1 style={extraStylesItem01} className={"carouselHeading"}>Willkommen!</h1>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img src={massage} className={"titleImage"} alt="logoNoBg.png" onClick={() => navigate("/")}/>
        <div style={extraStylesHeadingContainerMassage} className={"carouselHeadingContainer flexStart"}>
          <h3 style={extraStylesItem02} className={"carouselHeading"} >Lass dich von <br/>uns verwöhnen</h3>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img src={peeling} className={"titleImage"} alt="logoNoBg.png" onClick={() => navigate("/")}/>
        <div style={extraStylesHeadingContainerPeeling} className={"carouselHeadingContainer flexStart"}>
          <h4 style={extraStylesItem03} className={"carouselHeading"}>
            Entdecke unser vielseitiges Angebot <br/> an hochwertigen Produkten!
          </h4>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default memo(CarouselHome);