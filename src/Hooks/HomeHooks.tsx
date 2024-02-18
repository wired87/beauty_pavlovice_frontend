import {useEffect, useState} from "react";


export const useUpperLinkBarVisible = () => {
  const [upperLinkBarVisible, setUpperLinkBarVisible] = useState<boolean>(true);

  const updateLinkBarVisible = (value:boolean) => setUpperLinkBarVisible(value);


  return {upperLinkBarVisible, setUpperLinkBarVisible, updateLinkBarVisible}
}

export const useShowModal = () => {
  const [show, setShow] = useState<boolean>(false);

  const updateShow = (value:boolean) => setShow(value);

  useEffect(() => {
    console.log("show updated:", show);
  }, [show]);

  return {show, setShow, updateShow}
}