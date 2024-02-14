import React, {memo, ReactNode, useCallback} from "react";
import {OpeningTimeTypes} from "../../ComponentInterfaces";
import "../../../styles/coponentStyles/homeStyles/openingTime.css";
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
        <li className={"d-flex flex-row"}>
          <p>
            {item.day}:
          </p>
          <p>
            {item.time}
          </p>
        </li>
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