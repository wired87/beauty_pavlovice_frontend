import React, { memo } from "react";
import "../../../styles/coponentStyles/nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer: React.FC = () => {

  return (
    <footer style={{ marginTop: "12%" }} className="footer pb-5">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/beauty_bar_by_pavlovic/">
          <FontAwesomeIcon size="1x" icon={faInstagram} />
        </a></li>
        {/* <li className="social-icon__item"><a className="social-icon__link" href="mailto:recipient@example.com">
          <FontAwesomeIcon size="1x" icon={faEnvelope} />

        </a></li> */}
        <li className="social-icon__item"><a className="social-icon__link" href="tel:+1234567890">
          <FontAwesomeIcon size="1x" icon={faPhone} />
        </a></li>
      </ul>
      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="/category">Services</a></li>
        <li className="menu__item"><a className="menu__link" href="/termin">Termin vereinbaren</a></li>
        <li className="menu__item"><a className="menu__link" href="/impressum">Impressum</a></li>
        <li className="menu__item"><a className="menu__link" href="/datenschutz">Datenschutz</a></li>
      </ul>
      <p>&copy;Powered by Anastasia Pavlovic | Beauty Bar Pavlovic</p>
    </footer>
  );
}
export default memo(Footer);
