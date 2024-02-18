import Offcanvas from 'react-bootstrap/Offcanvas';
import "../styles/main.css";
import React, {memo} from "react";
import HeaderItems from "./navigation/Header/HeaderItems";

interface OffC {
  show: boolean;
  updateShow: (value:boolean) => void;
}

const OffcanvasBootstrap: React.FC<OffC> = (
  {
    updateShow,
    show
  }
) => {

  //const {show, updateShow} = useContext(MainContext);

  return(
    <Offcanvas backdropClassName={"pinkBg"} show={show} onHide={() => updateShow(false)} placement={"end"} name={"end"}>
      <Offcanvas.Header className={"pinkBg flexCenter "} closeButton>
      </Offcanvas.Header>
      <Offcanvas.Body className={"pinkBg flexCenter flexColumn fullWidthHeight"}>
        <HeaderItems />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default memo(OffcanvasBootstrap);