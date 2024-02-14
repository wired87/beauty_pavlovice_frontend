import Offcanvas from 'react-bootstrap/Offcanvas';
import "../styles/main.css";
import React, {memo} from "react";
import HeaderItems from "./navigation/Header/HeaderItems";

interface OffcanvasTypes {
  showModal: boolean;
  handleCloseModal: () => void;
}
const OffcanvasBootstrap: React.FC<OffcanvasTypes> = (
  {
    showModal,
    handleCloseModal
  }
) => {

  return(
    <Offcanvas backdropClassName={"pinkBg"} show={showModal} onHide={handleCloseModal} placement={"end"} name={"end"}>
      <Offcanvas.Header className={"pinkBg flexCenter "} closeButton>
        <Offcanvas.Title className={"pinkBg flexCenter"}>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={"pinkBg flexCenter flexColumn fullWidthHeight"}>
        <HeaderItems />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default memo(OffcanvasBootstrap);