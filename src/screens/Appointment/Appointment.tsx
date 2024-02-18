import React, {memo, useState} from "react";
import BasicDateTimePicker from "../../components/Appointment/DateTimePicker";

const Appointment: React.FC = () => {
  const [lastName, setLastName ] = useState<string>("");
  return(
    <section id={"openingTimeSection"} className={"border flexColumn sectionMain"}>
      <h2>
        Termin vereinbaren
      </h2>
      <div className={"pinkBg"}>
        <input type="text" value={lastName}/>
        <BasicDateTimePicker />

      </div>
    </section>
  );
}

export default memo(Appointment);