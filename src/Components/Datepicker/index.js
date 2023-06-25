// import React, { useState } from 'react';
// import DateTimePicker from 'react-datetime-picker';

// function Datepicker() {
//     const[value,setValue]=useState(new Date())

//   return (
//     <div className='p-5'>
//       <DateTimePicker onChange={setValue} value={value} />
//     </div>
//   );
// }
// export default Datepicker;
import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Date and Time Picker</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="yyyy-MM-dd HH:mm"
        placeholderText="Select Date and Time"
      />
    </div>
  );
};

export default DateTimePicker;
