import { useState, useEffect } from "react";
import { useFormik } from 'formik';

function BookingForm() {

    const [availTimes, setAvailTimes] = useState([]);


    function updateTimes() {
        return ['10:30', '11:00', '11:30', '12:00', '12:30', '13:00']
    }

    function initializeTimes() {
        setAvailTimes(updateTimes());
    }

    useEffect(() => {
        initializeTimes();
    }, []);

        const formik = useFormik({
          initialValues: {
            resDate: '',
            resTime: '',
            guests: 1,
            occasion: 'birthday',
          },
          onSubmit: values => {
                formik.validateForm().then(() => {
                    if (Object.keys(formik.errors).length === 0) {
                        // Validation succeeded, you can submit the form here.
                        alert('Thank you - your booking was successful!');
                    }
                });
          },
        });

    const validate = values => {
        const errors = {};
        if (!values.resDate) {
              errors.resDate = 'Required';
            }
          
        if (!values.resTime) {
              errors.resTime = 'Required';
            }
          
        if (!values.guests) {
              errors.guests = 'Required';
            } else if (values.guests < 1) {
              errors.guests = 'You must have at least one guest!';
            } else if (values.guests > 10) {
              errors.guests = "For parties larger than ten, please phone us directly!";
            }
          
        return errors;
    }

    return (
        <form className="BookingForm" onSubmit={formik.handleSubmit}>
            <label htmlFor="resDate">Choose date</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="date" id="resDate" value={formik.values.resDate}/>
            <label htmlFor="resTime">Choose time</label>
            <select id="resTime " onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.resTime}>
                {availTimes.map((time) => <option key={time} value={time}>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input value={formik.values.guests} onChange={formik.handleChange} onBlur={formik.handleBlur} type="number" placeholder="1" min="1" max="10" id="guests" />
            <label for="occasion">Occasion</label>
            <select id="occasion" value={formik.values.occasion} onChange={formik.handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </ form>
    )
}

export default BookingForm;

