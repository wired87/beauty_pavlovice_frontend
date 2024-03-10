import React, { useState, ChangeEvent, FormEvent, useContext, useEffect, useCallback } from 'react';
import { ServiceContext } from '../../Context/ContextProvider/ServicesContextProvide'
import { apiServices } from '../../services/api.services';
import moment from 'moment';
import SuccessModal from '../../components/Modal/success.modal';
import FailedModal from '../../components/Modal/failed.modal';
import Swal from 'sweetalert2';

interface FormData {
  lastName: string;
  serviceID: string;
  contactTel: string;
  contactEmail: string;
  information: string;
  date: string;
  time: string;
}

interface Appointment {
  start: string;
  end: string;
  startTime: string;
  endTime: string;
  date: string;
}

let initialState = {
  lastName: '',
  serviceID: '',
  contactTel: '',
  contactEmail: '',
  information: '',
  date: '',
  time: ''
}

function AppointmentForm(): JSX.Element {

  const { allServices } = useContext(ServiceContext);

  const [bookedAppoinment, setBookedAppointment] = useState<Appointment[]>([]);
  const [allAppointments, setAllAppointments] = useState<Appointment[]>([]);
  const [formData, setFormData] = useState<FormData>(initialState);

  const errorCodes = [5, 6, 7, 8, 9];

  // Appointment Page
  const [status, setStatus] = useState<number>(0);
  const statusContent = useCallback((): React.ReactNode | undefined => {
    if (status === 200) {
      return <SuccessModal />;
    } else if (errorCodes.includes(status)) {
      return <FailedModal />;
    }
  }, [status]);

  useEffect(() => {
    getAllBookings();
  }, [])

  useEffect(() => {
    getTodayAppoinments()
  }, [formData?.date])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    let isAvailable = getAvailability()

    if (isAvailable == 1) {
      const selectedTime = moment(formData.date + "T" + formData.time);
      let data = {
        ...formData,
        startTime: selectedTime.format()
      }

      let response = await apiServices.postAppointment({ data })
      if (response?.data?.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Appointment Successfully Booked!",
          icon: "success",
        })
        getAllBookings();
        setFormData(initialState)
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong.",
          icon: "error",
        })
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "Time slot is already booked! Please choose other time.",
        icon: "error",
      })
    }
  };

  const getAllBookings = async () => {
    try {
      const response = await apiServices.getAllAppointment();
      if (Array.isArray(response.data?.message)) {
        const data = response.data?.message;
        const newData: Appointment[] = data.map((item: any) => {
          const startTime = moment(item.start).utcOffset(item.start).format('HH:mm');
          const endTime = moment(item.end).utcOffset(item.end).format('HH:mm');
          const date = moment(item.start).utcOffset(item.start).format('YYYY-MM-DD');

          return {
            ...item,
            startTime,
            endTime,
            date
          };
        });
        setAllAppointments(newData);
      }
    } catch (error) {
      console.log("Error in getting all bookings", error);
    }
  }

  const getTodayAppoinments = useCallback(() => {
    let filter = allAppointments.filter(f => f?.date == formData.date)
    setBookedAppointment(filter)
    return filter;
  }, [formData?.date])

  console.log('bookedAppoinment ===> ', bookedAppoinment);


  const getAvailability = useCallback(() => {
    if (!formData.time || !formData.date) return 0; // If no time or date selected, return 0 availability

    // Assuming time is in 'HH:mm' format
    const selectedTime = moment(formData.date + "T" + formData.time);

    // Filter appointments for the selected date
    const appointmentsForSelectedDate = allAppointments.filter(appointment => appointment.date === formData.date);

    // Check availability
    const isAvailable = !appointmentsForSelectedDate.some(appointment => {
      const appointmentStartTime = moment(appointment.date + "T" + appointment.startTime);
      const appointmentEndTime = moment(appointment.date + "T" + appointment.endTime);

      return selectedTime.isBetween(appointmentStartTime, appointmentEndTime, undefined, '[]');
    });

    return isAvailable ? 1 : 0;
  }, [allAppointments, formData.date, formData.time]);


  return (
    <div className='Appointment_Main_div pinkBg mt-5 gap-5 p-5' id="container ">
      <div id="body_header">
        <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500" }}>Make your appointments </p>
      </div>
      <form className='mt-3' onSubmit={handleSubmit}>
        <fieldset>
          <label className='text-dark' htmlFor="name">Name:</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter your Name" required value={formData.lastName} onChange={handleChange} />
          <label className='text-dark' htmlFor="tel">Contact Number:</label>
          <input type="tel" id="contactTel" placeholder="Include country code" name="contactTel" value={formData.contactTel} onChange={handleChange} />
        </fieldset>
        <fieldset>
          <label className='text-dark' htmlFor="appointment_for">Appointment for:</label>
          <select id="serviceID" name="serviceID" required value={formData.serviceID} onChange={handleChange}>
            {allServices.map(e => (
              <option value={e.id}>{e.title} <span className='fw-bold'>{e.price}&euro;</span></option>
            ))}
          </select>
          <label className='text-dark' htmlFor="date">Date:</label>
          <input type="date" name="date" value={formData.date} required onChange={handleChange} />
          <label className='text-dark' htmlFor="time">Time:</label>
          <input type="time" name="time" value={formData.time} required onChange={handleChange} />
          <fieldset>
            <label className='text-dark' htmlFor="name">Information:</label>
            <input type="text" id="information" name="information" placeholder="" required value={formData.information} onChange={handleChange} />
          </fieldset>
        </fieldset>
        <div className='d-flex justify-content-center align-items-center' >
          <button className='btn text-white bg-dark' type="submit">Request For Appointment</button>
        </div>
      </form>

      {bookedAppoinment?.map(e => <p className='fs-6 fw-bold text-danger'>{e?.startTime} -- {e?.endTime} -- {e?.date}</p>)}
    </div>
  );
}

export default AppointmentForm;
