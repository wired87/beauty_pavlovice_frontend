
import React, {memo} from "react";
import {NavAnchorInterface} from "./NavInterfaces";
import Font from "react-font";
import "../../styles/coponentStyles/nav.css";
import "../../styles/main.css";

const NavAnchor: React.FC<NavAnchorInterface> = (
  {
    title,
    href,
    customClass
  }
) => {

  return(
    <div className={"fullWidthHeight  headerAnchorWrap"}>
      <Font family='Abel'>
        <a href={href} className={`headerListAnchor ${customClass}`}
        >{title}</a>
      </Font>
    </div>
  );
}

export default memo(NavAnchor);