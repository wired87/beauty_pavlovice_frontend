import React, {memo, useEffect, useState} from "react";
import "../styles/main.css";

const Imprint: React.FC = () => {
  const [title, setTitle] = useState("Imprint");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return(
    <div className="privacy-main pinkBg">
      <div className="privacy-text-field pinkBg">
        <h4>Verantwortlicher: </h4>
        <p style={{fontSize: 17}}>
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