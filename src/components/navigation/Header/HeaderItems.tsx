import React, {memo} from "react";
import {HeaderButtonTypes} from "../../ComponentInterfaces";

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
]
const HeaderItems: React.FC = () => {

  const headerItems = () => {
    return headerButtons.map((item: HeaderButtonTypes, index:number) => {
      return(
        <li className={"navListItem"} key={index}>
          <div className={"fullWidthHeight headerAnchorWrap"}>
            <a className="headerListAnchor" href={item.href}>
              {item.title}
            </a>
          </div>
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