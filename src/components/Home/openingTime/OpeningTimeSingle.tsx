import React, {memo, ReactNode, useCallback} from "react";
import {OpeningTimeTypes} from "../../ComponentInterfaces";
import "../../../styles/coponentStyles/homeStyles/openingTime.css";
import "../../../styles/main.css";
import Font from "react-font";
interface OpeningTimeBlockTypes {
  itemList: OpeningTimeTypes[]
}
const OpeningTimeBlock: React.FC<OpeningTimeBlockTypes> = (
  {
    itemList
  }
) => {

  const renderItem = useCallback((): ReactNode => {
    return itemList.map((item: OpeningTimeTypes, index: number) => {
      return(
        <Font family='Abel'>
          <li className={"dFlex flexColumn flexCenter textCenter"}>
            <p>
              {item.day}
            </p>
            <p>
              {item.time}
            </p>

          </li>
        </Font>
      )
    })
  }, [itemList]);


  return(
    <div className={""}>
      <ul className={"list-unstyled d-flex flex-column"}>
        {
          renderItem()
        }
      </ul>
    </div>
  );
}

export default memo(OpeningTimeBlock);