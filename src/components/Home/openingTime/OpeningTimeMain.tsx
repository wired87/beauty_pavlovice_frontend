import React, { memo } from "react";
import "../../../styles/main.css";
import "../../../styles/coponentStyles/homeStyles/homeMain.css";
import { OpeningTimeTypes } from "../../ComponentInterfaces";
import OpeningTimeBlock from "./OpeningTimeSingle";
import Font from "react-font";

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

  return (
    <section id={"openingTimeSection"} className={"flexColumn sectionMain"}>
      <div className="container demo-bg">
        <div className="row pinkBg">

          <div className="col-sm-4"></div>
          <div className="col-sm-4 ">
            <div className="business-hours opening-hours  ">
              <h2 className="title ">Opening Hours</h2>
              {openingTimeBlock01.map((item) => (
                <li key={item.day} className="text-white">
                  {item.day} <span className="pull-right p-1 flex-row">{item.time}</span>
                </li>
              ))}
              {openingTimeBlock02.map((item) => (
                <li key={item.day} className="text-white">
                  {item.day} <span className="pull-right p-1 flex-row">{item.time}</span>
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