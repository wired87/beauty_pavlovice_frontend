
import React, {memo, useContext} from "react";
import {NavAnchorInterface} from "./NavInterfaces";
import Font from "react-font";
import "../../styles/coponentStyles/nav.css";
import "../../styles/main.css";
import {WindowWidth} from "../../functions/WindowWidth";
import {MainContext} from "../../Context/MainContext";

const NavAnchor: React.FC<NavAnchorInterface> = (
  {
    title,
    href,
    customClass
  }
) => {

  const {updateShow} = useContext(MainContext);

  const closeModalOnClick = () => {
    const width:number = WindowWidth();
    console.log("width:", width);
    if (width < 960) {
      updateShow(false);
    }
  }

  return(
    <div className={"fullWidthHeight  headerAnchorWrap"}>
      <Font family='Abel'>
        <a onClick={() => closeModalOnClick} href={href} className={`headerListAnchor ${customClass}`}>
          {title}
        </a>
      </Font>
    </div>
  );
}

export default memo(NavAnchor);