import React, {memo} from "react";
import "../../../styles/main.css";
import "../../../styles/coponentStyles/homeStyles/homeMain.css";
import {OpeningTimeTypes} from "../../ComponentInterfaces";
import OpeningTimeBlock from "./OpeningTimeSingle";


const openingTimeBlock01: OpeningTimeTypes[] = [
  {
    day: "Montag",
    time: "10:00 - 18:00 Uhr"
  },
  {
    day: "Dienstag",
    time: "10:00 - 18:00 Uhr"
  },
  {
    day: "Mittwoch",
    time: "10:00 - 18:00 Uhr"
  },
  {
    day: "Donnerstag",
    time: "10:00 - 18:00 Uhr"
  },
]

const openingTimeBlock02: OpeningTimeTypes[] = [
  {
    day: "Freitag",
    time: "10:00 - 18:00 Uhr"
  },
  {
    day: "Samstag",
    time: "Geschlossen"
  },
  {
    day: "Sonntag",
    time: "Geschlossen"
  },
]


const OpeningTimeMain: React.FC = (

) => {
  return(
    <section id={"#openingTimeSection"} className={"flexColumn sectionMain"}>
      <h2 >Unsere Öffnungszeiten</h2>
      <div className={"infoMain"}>
        <img src="" alt=""/>
        <div className={"d-flex flex-row"}>
          <div>
            <OpeningTimeBlock itemList={openingTimeBlock01}/>
          </div>
          <div>
            <OpeningTimeBlock itemList={openingTimeBlock02}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(OpeningTimeMain);