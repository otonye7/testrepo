import React, { useState, useEffect } from 'react';
import "./create-form.css";
import TextField from '@mui/material/TextField';
import 'antd/dist/antd.css';
import { DatePicker } from "antd";
import moment from "moment";
import { Link } from 'react-router-dom';

const CreateForm = () => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);
    const [values, setValues] = useState({
        eventName: "",
        hostName: "",
        startDate: "",
        endDate: "",
        location: "",
        image:""
    })

    const handleChange = (event) =>{
        const { target: { value, name } } = event;
        setValues((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleImageChange = (e) => {
        setValues((prevValues) => ({ ...prevValues, image: e.target.files[0] }))
    }

    const addEvent = () => {
        setData((prevValues) => [...prevValues, values])
    }

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])


  return (
    <>
    <div className='input-container'>
        <br />
        <h2 className='header'>Please Create An Event</h2>
        <br />
        <div className="input-form">
           <TextField onChange={handleChange} className="input-text-field" id="outlined-basic" name="eventName" label="Event Name" variant="outlined" />
        </div>
        <br />
        <div className="input-form">
           <TextField onChange={handleChange} className="input-text-field" id="outlined-basic" name="hostName" label="Host Name" variant="outlined" />
        </div>
        <br />
        <div className='input-form'>
         <DatePicker
            placeholder="Start Date"
            name='startDate'
            onChange={(date, dateString) => setValues(prevValues => ({...prevValues, startDate: dateString}))}
            className="input-text-field"
            disabledDate={(current) => current.valueOf() < moment().subtract(1, "days")}
        />
        </div>
        <br />
        <div className='input-form'>
         <DatePicker
            placeholder="End Date"
            name="endDate"
            onChange={(date, dateString) => setValues(prevValues => ({...prevValues, endDate: dateString}))}
            className="input-text-field"
            disabledDate={(current) => current.valueOf() < moment().subtract(1, "days")}
        />
        </div>
        <br />
        <div className="input-form">
           <TextField
            onChange={handleChange}
            className="input-text-field"
            name='location'
            id="outlined-basic"
            label="Location"
            variant="outlined" />
        </div>
        <br />
        <div className='input-image'>
                Image
                <input
                 type="file"
                 name="image"
                 onChange={handleImageChange}
                 className="input-text-field"
                 accept="image/*"
                 
                />
        </div>
       <br />
       <div className='input-form'>
          <button onClick={addEvent} className='add-button'>Add Event</button>
        </div>
    </div>
    <br />
    <div className=''>
        <Link to="/events" className='next-link'>Next</Link>
    </div>
    </>
  );
}

export default CreateForm
