import {useEffect, useState} from "react";


export const useUpperLinkBarVisible = () => {
  const [upperLinkBarVisible, setUpperLinkBarVisible] = useState<boolean>(true);

  const updateLinkBarVisible = (value:boolean) => setUpperLinkBarVisible(value);

  useEffect(() => {
    console.log("upperLinkBarVisible", upperLinkBarVisible)
  }, [upperLinkBarVisible]);

  return {upperLinkBarVisible, setUpperLinkBarVisible, updateLinkBarVisible}
}