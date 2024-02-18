import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {memo, useEffect} from "react";
import {useLoading, useSuccessLoading} from "../../Hooks/Primary";
import CalendarLoading from "../../screens/Appointment/CalendarLoading";

// vars
const date = new Date();


const BasicDateTimePicker: React.FC = () => {
  const { loading, setLoading, updateLoading } = useLoading();
  const { updateSuccessLoading } = useSuccessLoading();

  const requestCalendarDataProcess = () => {
    updateLoading(true);
    try {

      updateSuccessLoading(true);
    }catch(e:unknown) {
      if (e instanceof Error) {
        console.log("COULD NOT LOAD THE CALENDAR DATA");
        updateSuccessLoading(false);
      }
    }finally {
      updateLoading(false);
    }
  }

  useEffect(() => {
    requestCalendarDataProcess()
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          closeOnSelect={false}
          disablePast
          renderLoading={
            () => <CalendarLoading />
          }
          loading={loading}


          label="Wähle deinen Wunschtermin"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

/*
 minTime={"09:00"}
          maxTime={"17:00"}
 */


export default memo(BasicDateTimePicker);