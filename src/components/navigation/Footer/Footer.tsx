import React, { memo } from "react";
import "../../../styles/coponentStyles/nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const Footer: React.FC = () => {

  return (
    <footer style={{ marginTop: "10%" }} className="footer pb-5">
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
        <li className="social-icon__item"><a className="social-icon__link" href="mailto:recipient@example.com">
          <FontAwesomeIcon size="1x" icon={faEnvelope} />

        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="tel:+1234567890">
          <FontAwesomeIcon size="1x" icon={faPhone} />

        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://api.whatsapp.com/send/?phone=%2B4915252197474&text&type=phone_number&app_absent=0">
          <FontAwesomeIcon size="1x" icon={faWhatsapp} />

        </a></li>
      </ul>
      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
        {/* <li className="menu__item"><a className="menu__link" href="#">About</a></li> */}
        <li className="menu__item"><a className="menu__link" href="Category">Services</a></li>
        {/* <li className="menu__item"><a className="menu__link" href="#">Team</a></li> */}
        <li className="menu__item"><a className="menu__link" href="Termin">Termin vereinbaren</a></li>

      </ul>
      <p>&copy;Powered by | Book in Beautiful</p>
    </footer>
  );
}
export default memo(Footer);
