import React, {memo} from "react";
import {MainContextProviderInterface} from "../Interfaces";
import {MainContext} from "../MainContext";
import {useUpperLinkBarVisible} from "../../Hooks/HomeHooks";

const MainContextProvider: React.FC<MainContextProviderInterface> = (
  {
    children
  }
) => {


  const {
    upperLinkBarVisible,
    updateLinkBarVisible
  } = useUpperLinkBarVisible()

  const elements = {
    upperLinkBarVisible,
    updateLinkBarVisible
  }

  return(
    <MainContext.Provider value={elements}>
      {children}
    </MainContext.Provider>
    );
}

export default memo(MainContextProvider);