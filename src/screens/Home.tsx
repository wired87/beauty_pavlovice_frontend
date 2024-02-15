import React, {memo} from "react";
import OpeningTimeMain from "../components/Home/openingTime/OpeningTimeMain";
import title from "../assets/images/title.jpeg";
import "../styles/main.css";
import "../styles//coponentStyles/homeStyles/homeMain.css";

const Home: React.FC = () => {
  return(
    <>
      <img src={title} className={"titleImage"} alt="title.png"/>
      <OpeningTimeMain />
    </>
  );
}

export default memo(Home);
//       <div className={"flexCenter imageContainer marginAuto"}></div>