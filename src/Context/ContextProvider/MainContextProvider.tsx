import React, {memo} from "react";
import {MainContextProviderInterface} from "../Interfaces";
import {MainContext} from "../MainContext";
import {useShowModal, useUpperLinkBarVisible} from "../../Hooks/HomeHooks";

const MainContextProvider: React.FC<MainContextProviderInterface> = (
  {
    children
  }
) => {

  const {
    upperLinkBarVisible,
    updateLinkBarVisible
  } = useUpperLinkBarVisible();

  const {
    show,
    setShow,
    updateShow
  } = useShowModal();

  const elements = {
    upperLinkBarVisible,
    updateLinkBarVisible,
    show,
    setShow,
    updateShow
  }

  return(
    <MainContext.Provider value={elements}>
      {children}
    </MainContext.Provider>
    );
}

export default memo(MainContextProvider);