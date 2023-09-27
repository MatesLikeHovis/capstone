import { useState } from "react";
import { useFormik } from 'formik';

function BookingForm() {
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState();
    const [availTimes, setAvailTimes] = useState([]);

    const SignupForm = () => {
        // Pass the useFormik() hook initial form values and a submit function that will
        // be called when the form is submitted
        const formik = useFormik({
          initialValues: {
            resDate: '',
            resTime: '',
            guests: 1,
            occasion: 'birthday',
          },
          onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
        });


    return (
        <form className="BookingForm" onSubmit={formik.handleSubmit}>
            <label htmlFor="resDate">Choose date</label>
            <input value={resDate} onChange={e=>setResDate(e.target.value)} type="date" id="resDate" />
            <label htmlFor="resTime">Choose time</label>
            <select id="resTime " value={resTime} onChange={e=>setResTime(e.target.value)}>
                {availTimes.map((time) => <option key={time.key}>{time.value}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input value={guests} onChange={e=>setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
            <label for="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e=>setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;

