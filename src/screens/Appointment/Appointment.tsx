import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  user_name: string;
  user_email: string;
  user_num: string;
  appointment_for: string;
  appointment_description: string;
  date: string;
  time: string;
  duration: string;
}

function AppointmentForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    user_num: '',
    appointment_for: 'coffee',
    appointment_description: '',
    date: '',
    time: '',
    duration: '30'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='Appointment_Main_div gap-5 p-5' id="container ">
      <div id="body_header">
        <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500" }}>Make your appointments easier</p>
      </div>
      <form className='mt-5' onSubmit={handleSubmit}>
        <fieldset>
          <label className='text-dark' htmlFor="name">Name:</label>
          <input type="email" id="mail" name="user_email" placeholder="abc@xyz.com" required value={formData.user_email} onChange={handleChange} />
          <label className='text-dark' htmlFor="tel">Contact Num:</label>
          <input type="tel" id="tel" placeholder="Include country code" name="user_num" value={formData.user_num} onChange={handleChange} />
        </fieldset>
        <fieldset>
          <label className='text-dark' htmlFor="appointment_for">Appointment for:</label>
          <select id="appointment_for" name="appointment_for" required value={formData.appointment_for} onChange={handleChange}>
            <option value="Klassisch 1:1 Technik">Klassisch 1:1 Technik</option>
            <option value="2D-3D Volumen">2D-3D Volumen</option>
            <option value="4D-5D Volumen">4D-5D Volumen</option>
            <option value="Gesichtsmassage">Gesichtsmassage (Gesicht,Hats,Dekollete)</option>
            <option value="Peeling">Peeling</option>
            <option value="Professionele Hautreinigung">Professionele Hautreinigung</option>
            <option value="Kosmetikbehandlungen">Kosmetikbehandlungen</option>
            <option value="Is Clinical Behandlungen">Is Clinical Behandlungen</option>
            <option value="Apparative Kosmetik Behandlungen">Apparative Kosmetik Behandlungen</option>
          </select>
          <label className='text-dark' htmlFor="date">Date:</label>
          <input type="date" name="date" value={formData.date} required onChange={handleChange} />
          <label className='text-dark' htmlFor="time">Time:</label>
          <input type="time" name="time" value={formData.time} required onChange={handleChange} />
        </fieldset>
        <div className='d-flex justify-content-center align-items-center' >
          <button className='btn text-white bg-dark' type="submit">Request For Appointment</button>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
