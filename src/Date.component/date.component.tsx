import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import validator from 'validator';

export const DateComponent = () => {
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();

  const [message, setMessage] = useState(' ');
  const [messageColor, setMessageColor] = useState('green');

  function handleDate1(event) {
    let inputDate = event.target.value;
    setDate1(inputDate);

    if (validator.isDate(inputDate)) {
      setMessage('Date is Valid');
      setMessageColor('green');
    } else {
      setMessage('Please, Enter a valid date!');
      setMessageColor('red');
    }
  }
  function handleDate2(event) {
    let inputDate = event.target.value;
    setDate2(inputDate);

    if (validator.isDate(inputDate)) {
      setMessage('Date is Valid');
      setMessageColor('green');
    } else {
      setMessage('Please, Enter a valid date!');
      setMessageColor('red');
    }
  }

  const dateConverter = (startDate, timeEnd) => {
    const newStartDate = new Date(startDate);
    const newEndDate = new Date(timeEnd);
    let result = moment(newStartDate).diff(newEndDate, 'days');
    return result;
  };

  const onSubmitDate = () => {
    console.clear();
    console.log(dateConverter(date1, date2));
  };

  const getDateApi = async () => {
    const apiUrl = 'http://localhost:3001/';
    await axios.get(apiUrl, {});
  };

  useEffect(() => {
    // console.log(getDateApi());
  });

  return (
    <>
      <div className="flex">
        <div style={{ color: messageColor }}> {message} </div>

        <div className="form-group">
          <label>Date 1:</label>
          <input type="date" value={date1} onChange={handleDate1} />
        </div>
        <div className="form-group">
          <label>Date 1:</label>
          <input type="date" value={date2} onChange={handleDate2} />
        </div>
        <button onClick={onSubmitDate}>SUBMIT</button>
      </div>
    </>
  );
};
