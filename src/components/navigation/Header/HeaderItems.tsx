import React, {memo} from "react";
import {HeaderButtonTypes} from "../../ComponentInterfaces";
import NavAnchor from "../NavAnchor";
import "../../../styles/main.css";

const headerButtons: HeaderButtonTypes[] = [
  {
    href: "#home",
    title: "Home",
    className: "current"
  },
  {
    href: "#openingTimeSection",
    title: "Öffnungszeiten",
    className: "current"
  },
  {
    href: "#termin",
    title: "Termin",
    className: "current"
  },
  {
    href: "#home",
    title: "Home",
    className: "current"
  },
  {
    href: "#home",
    title: "Home",
    className: "current"
  }
];

const HeaderItems: React.FC = () => {

  const headerItems = () => {
    return headerButtons.map((item: HeaderButtonTypes, index:number) => {
      return(
        <li className={"navListItem"} key={index}>
          <NavAnchor customClass={"blackColor"} key={index} title={item.title} href={item.href} />
        </li>
      )
    })
  }

  return(
    <ul className="headerButtonUl">
      {
        headerItems()
      }
    </ul>
  );
}

export default memo(HeaderItems)