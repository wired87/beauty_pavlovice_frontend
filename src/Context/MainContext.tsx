import {createContext} from "react";

export const MainContext = createContext(
  {
    upperLinkBarVisible: true,
    updateLinkBarVisible: (value:boolean) => {},

    show: false,
    updateShow: (value:boolean) => {}
  });