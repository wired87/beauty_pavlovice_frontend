import React, { useState, ChangeEvent, FormEvent, useContext, useEffect, useCallback } from 'react';
import { ServiceContext } from '../../Context/ContextProvider/ServicesContextProvide';
import { apiServices } from '../../services/api.services';
import moment from 'moment';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import CircularProgress from '@mui/material/CircularProgress';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

interface FormData {
  lastName: string;
  serviceID: string;
  contactTel: string;
  contactEmail: string;
  information: string;
  date: Date | null;
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
  date: null,
  time: ''
};

function AppointmentForm(): JSX.Element {
  const { allServices } = useContext(ServiceContext);
  const [bookedAppoinment, setBookedAppointment] = useState<Appointment[]>([]);
  const [allAppointments, setAllAppointments] = useState<Appointment[]>([]);
  const [formData, setFormData] = useState<FormData>(initialState);
  const [minDate, setMinDate] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const shopOpeningTime:string = "08:00";
  const shopClosingTime:string = "17:00";
  const today = new Date();


  useEffect(() => {
    getBookedAppointments()
      .then(() => console.log("Collect all booked appointments..."));
    setMinDate(calculateMinDate());
  }, []);


  useEffect(() => {
    getTodayAppoinments();
  }, [formData?.date]);


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    let isAvailable = getAvailability();

    if (isAvailable == 1) {
      let converted = formData?.date?.toISOString().split('T')[0];

      const selectedTime = moment(converted + "T" + formData.time);
      const formattedDate = moment(selectedTime).format("YYYY-MM-DDTHH:mm:ssZ");

      let data = {
        ...formData,
        startTime: formattedDate
      }
      try {
        console.log("Data sent:", data);
        let response = await apiServices.postAppointment({ data })
        console.log("Appointment Response received", response)
        if (response?.data?.status === 200) {
          Swal.fire({
            title: "Success",
            text: "Appointment Successfully Booked!",
            icon: "success",
          })
          await getBookedAppointments();
          setFormData(initialState)
        } else {
          Swal.fire({
            title: "Error",
            text: "Something went wrong.",
            icon: "error",
          })
        }
      }catch(e:unknown) {
        console.log("Error while request:", e);
        Swal.fire({
          title: "Error",
          text: "Time slot is already booked! Please choose other time.",
          icon: "error",
        })
      }finally {
        console.log("Process finished")
        setLoading(false);
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "Time slot is already booked! Please choose other time.",
        icon: "error",
      })
    }
  };


  const getBookedAppointments = async () => {
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
    } catch (e:unknown) {
      console.log("Error in getting all bookings", e);
    }
  }

  const getTodayAppoinments = useCallback(() => {
    let filter = allAppointments.filter(f => f?.date == formData.date?.toString())
    setBookedAppointment(filter)
    return filter;
  }, [formData?.date])


  const getAvailability = useCallback(() => {
    if (!formData.time || !formData.date) return 0; // If no time or date selected, return 0 availability

    // Assuming time is in 'HH:mm' format
    const selectedStartTime = moment(formData.date + "T" + formData.time);
    const selectedEndTime = moment(selectedStartTime).add(30, 'minutes'); // Assuming each time slot is 30 minutes

    // Filter appointments for the selected date
    const appointmentsForSelectedDate = allAppointments.filter(appointment => appointment.date === formData.date?.toString());

    // Check availability
    const isAvailable = !appointmentsForSelectedDate.some(appointment => {
      const appointmentStartTime = moment(appointment.date + "T" + appointment.startTime);
      const appointmentEndTime = moment(appointment.date + "T" + appointment.endTime);

      // Check if any part of the selected time slot overlaps with the appointment time slot
      return (
        selectedStartTime.isBefore(appointmentEndTime) &&
        selectedEndTime.isAfter(appointmentStartTime)
      );
    });

    return isAvailable ? 1 : 0;
  }, [allAppointments, formData.date, formData.time]);


  // Function to generate time slots between opening and closing time
  const generateTimeSlots = (): string[] => {
    const timeSlots: string[] = [];
    let currentTime = shopOpeningTime;
    while (currentTime <= shopClosingTime) {
      timeSlots.push(currentTime);
      currentTime = incrementTime(currentTime);
    }
    return timeSlots;
  };


  // Function to increment time by 30 minutes
  const incrementTime = (time: string): string => {
    const [hours, minutes] = time.split(':').map(Number);
    let newHours = hours;
    let newMinutes = minutes + 30;
    if (newMinutes >= 60) {
      newHours++;
      newMinutes -= 60;
    }
    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
  };


  // Function to filter out booked time slots
  const filterBookedTimes = (timeSlots: string[], appointment: Appointment): string[] => {
    const { startTime, endTime } = appointment;
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);
    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;

    return timeSlots.filter(time => {
      const [hour, minute] = time.split(":").map(Number);
      const totalMinutes = hour * 60 + minute;
      return totalMinutes < startTotalMinutes || totalMinutes >= endTotalMinutes;
    });
  };


  // Update available time slots based on selected date
  useEffect(() => {
    // Generate time slots between shop opening and closing time
    let availableTimeSlots = generateTimeSlots();
    // Filter out booked time slots for the selected date
    const bookedAppointmentsForDate = bookedAppoinment.filter(appointment => {
      const date = new Date(appointment.date).toISOString().split('T')[0];
      return date === formData?.date?.toString();
    });
    // Filter out booked time slots
    bookedAppointmentsForDate.forEach(appointment => {
      availableTimeSlots = filterBookedTimes(availableTimeSlots, appointment);
    });
    // Update available time slots state
    setAvailableTimes(availableTimeSlots);
  }, [formData?.date, bookedAppoinment]);


  // Calculate the minimum date (disable dates before today)
  const calculateMinDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 is Sunday, 6 is Saturday
  };


  const disabledDates = (date: Date) => {
    return isWeekend(date);
  };


  if (!loading) {
    return (
      <div className='Appointment_Main_div pinkBg mt-5 gap-5 p-5' id="container">
        <div id="body_header">
          <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500" }} data-aos="fade-left" >Buche einen Termin</p>
        </div>
        <div id="body_header">
          <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "300", fontSize: 16 }} data-aos="fade-right">
            Unsere Öffnungszeiten (Mo - Fr 08:00 - 18:00 Uhr )
          </p>
        </div>
        <form className='mt-3' onSubmit={handleSubmit}>
          <fieldset>
            <label className='text-dark' htmlFor="name">Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter your Name" required value={formData.lastName} onChange={handleChange} />
            <label className='text-dark' htmlFor="tel">Mobil</label>
            <input type="tel" id="contactTel" placeholder="Include country code" name="contactTel" value={formData.contactTel} onChange={handleChange} />
          </fieldset>
          <fieldset>
            <label className='text-dark' htmlFor="appointment_for">Service</label>
            <select id="serviceID" name="serviceID" style={{ width: '100%' }} required value={formData.serviceID} onChange={handleChange}>
              <option disabled value="">Gewünschter Service</option>
              {allServices.map(item => (
                <option className={""} value={item.id}>
                  {item.title} {item.sub_category} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.duration} h -
                    {item.price}&euro;
                </option>
              ))}
            </select>
            <label className='text-dark mt-5' htmlFor="date">Datum</label>

            <DatePicker
              id="datePicker"
              selected={formData?.date}
              onChange={(date: Date | null) => setFormData({
                ...formData,
                date: date
              })}
              minDate={today}
              filterDate={disabledDates}
              placeholderText="Select a date"
              className="custom-date-picker-input"
            />

            <br />

            <label className='text-dark' htmlFor="time">Uhrzeit</label>
            <div style={{ maxHeight: '200px', overflowY: 'auto', display: "flex", alignItems: 'center', flexDirection: "column" }} className=''>
              {availableTimes?.map((e, i) => (
                <p onClick={() => setFormData({ ...formData, time: e })}
                   style={{ justifyContent: "center", borderRadius: "100px", backgroundColor: e == formData.time ? 'green' : '' }}
                   key={i} className='btn btn-outline-success d-flex flex-col w-50'>
                  {e}
                </p>
              ))}
            </div>
            <fieldset>
              <label className='text-dark' htmlFor="name">Zusätzliche Informationen?</label>
              <input type="text" id="information" name="information" placeholder="" value={formData.information} onChange={handleChange} />
            </fieldset>
          </fieldset>
          <div className='d-flex justify-content-center align-items-center' >
            <button className='btn text-white bg-dark' type="submit">Termin buchen!</button>
          </div>
        </form >
      </div >
    );
  }
  return(
    <div className='flexCenter widthHeight-300 pinkBg mt-5 gap-5 p-5' id="container">
      <CircularProgress color="inherit" />
    </div>
    );
}

export default AppointmentForm;
