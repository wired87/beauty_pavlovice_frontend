import React, {memo, useState} from "react";
// <ParticlesBg type="circle" bg={true} />
import "../../../styles/main.css";
import "../../../styles/coponentStyles/nav.css";
import "../../../styles/coponentStyles/buttons.css";
import logoNoBg from "../../../assets/images/logoNoBg.png";
import {WindowWidth} from "../../../functions/WindowWidth";
import OffcanvasBootstrap from "../../Offcanvas";
import HeaderItems from "./HeaderItems";
import { RxHamburgerMenu } from "react-icons/rx";




const Header: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleOpenModal = () => {
    setShowModal(true);
  }





  const transformHeader = () => {
    const width:number = WindowWidth();
    console.log("width:", width);
    if (width > 660) {
      return(
        <HeaderItems />
      )
    }
    return(
      <button className={"offcanvasToggleButton flexCenter"} onClick={handleOpenModal}>
        <RxHamburgerMenu size={30}/>
      </button>
    )
  }

  //   background-color: rgb(247,212,212);
  return (
    <>
      <header id="home" className={"headerContainer d-flex justify-content-center align-items-center flex-row border"}>
        <img src={logoNoBg} className={"logo"} alt="logoNoBg.png"/>
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
      <OffcanvasBootstrap showModal={showModal} handleCloseModal={handleCloseModal}/>
    </>
  );
}

export default memo(Header);