import Carousel from 'react-bootstrap/Carousel';
import React, {memo} from "react";
import title from "../../assets/images/title.webp";
import massage from "../../assets/images/massage.webp";
import peeling from "../../assets/images/peeling.webp";
import vase from "../../assets/images/vase.webp";
import creme from "../../assets/images/creme.webp";
import coffee from "../../assets/images/coffee.webp";
import doc from "../../assets/images/doc.webp";
import "../../styles/main.css";
import "../../styles/coponentStyles/homeStyles/homeMain.css";
import {useNavigate} from "react-router-dom";
const CarouselHome: React.FC = () => {

  const navigate = useNavigate();
  const defaultColor: {color: string} = { color: "rgba(0,0,0,.4)"}
  const extraStylesItem03: object = { top: 40, right: 160, defaultColor };

  const extraStylesHeadingContainerPeeling: object = { top: 0, right: 0, paddingTop: 30, paddingRight: 20};

  return(
    <Carousel
      style={{marginTop: 70}}
      keyboard={false}
      indicators={false}
      data-bs-theme="dark">
      <Carousel.Item>
        <img src={title} className={"titleImage"} alt="logoNoBg.png" onClick={() => navigate("/")}/>
      </Carousel.Item>

      <Carousel.Item>
        <img src={vase} className={"titleImage"} alt="logoNoBg.png" onClick={() => navigate("/")}/>
      </Carousel.Item>

      <Carousel.Item>
        <img src={massage} className={"titleImage"} alt="logoNoBg.png" onClick={() => navigate("/")}/>
      </Carousel.Item>

      <Carousel.Item>
        <img src={creme} className={"titleImage"} alt="logoNoBg.png" onClick={() => navigate("/")}/>
      </Carousel.Item>

      <Carousel.Item>
        <img src={coffee} className={"titleImage"} alt="logoNoBg.png" onClick={() => navigate("/")}/>
      </Carousel.Item>

      <Carousel.Item>
        <img src={doc} className={"titleImage"} alt="logoNoBg.png" onClick={() => navigate("/")}/>
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