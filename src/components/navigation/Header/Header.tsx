import React, { memo, useContext } from "react";
// <ParticlesBg type="circle" bg={true} />
import "../../../styles/main.css";
import "../../../styles/coponentStyles/nav.css";
import "../../../styles/coponentStyles/buttons.css";
import logoNoBg from "../../../assets/images/logo-nobg.png";
import { WindowWidth } from "../../../functions/WindowWidth";
import OffcanvasBootstrap from "../../Offcanvas";
import HeaderItems from "./HeaderItems";
import { RxHamburgerMenu } from "react-icons/rx";
import { MainContext } from "../../../Context/MainContext";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {

  const { show, updateShow } = useContext(MainContext);
  const navigate = useNavigate();

  const transformHeader = () => {
    const width: number = WindowWidth();
    if (width > 960) {
      return (
        <HeaderItems />
      )
    }
    return (
      <button className={"offcanvasToggleButton flexCenter"} onClick={() => updateShow(true)}>
        <RxHamburgerMenu size={30} />
      </button>
    )
  }

  return (
    <>
      <header id="home" className={"headerContainer d-flex justify-content-center align-items-center flex-row "}>
        <img src={logoNoBg} className={"logo"} alt="logoNoBg.png" onClick={() => navigate("/")} />
        {
          transformHeader()
        }
        <div className="row banner">
          <div className="banner-text">

          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>

      </header>
      <OffcanvasBootstrap show={show} updateShow={updateShow} />
    </>
  );
}

export default memo(Header);