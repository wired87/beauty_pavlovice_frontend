import React, {memo} from "react";
import "../styles/main.css";

const Imprint: React.FC = () => {
  return(
    <div className="privacy-main pinkBg">
      <div className="privacy-text-field pinkBg">
        <h4>Verantwortlicher: </h4>
        <p>
          Anastasia Pavlovic <br/>
          Reisewitzer Str. 20 01159 Dresden <br/>
          Telefon: +4915252197474 <br/>
          E-Mail: beauty.bar.pavlovic@gmail.com <br/>
        </p>
      </div>
    </div>
  );
}

export default memo(Imprint);