import React, { memo } from "react";
import "../../../styles/main.css";
import "../../../styles/coponentStyles/homeStyles/homeMain.css";
import { OpeningTimeTypes } from "../../ComponentInterfaces";


const openingTimeBlock01: OpeningTimeTypes[] = [
  {
    day: "Montag",
  },
  {
    day: "Dienstag",
  },
  {
    day: "Mittwoch",
  },
  {
    day: "Donnerstag",
  },
]

const openingTimeBlock02: OpeningTimeTypes[] = [
  {
    day: "Freitag",
  },
  {
    day: "Samstag",
    time: "Nach Vereinbarung"
  },
  {
    day: "Sonntag",
    time: "Geschlossen"
  },
]
const time:string = "09:00 - 17:00 Uhr";

const OpeningTimeMain: React.FC = (


) => {

  return (
    <section id={"openingTimeSection"} className={"flexColumn sectionMain"}>
      <div className="container demo-bg">
        <div className="row pinkBg pB10">

          <div className="col-sm-4"></div>
          <div className="col-sm-4 ">
            <div className="business-hours opening-hours  ">
              <h2 className="title ">Opening Hours</h2>
              {openingTimeBlock01.map((item) => (
                <li key={item.day} className="text-white">
                  {item.day} <span className="pull-right p-1 flex-row">{time}</span>
                </li>
              ))}
              {openingTimeBlock02.map((item) => (
                <li key={item.day} className="text-white">
                  {item.day} <span className="pull-right p-1 flex-row">{item.time || time}</span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default memo(OpeningTimeMain);