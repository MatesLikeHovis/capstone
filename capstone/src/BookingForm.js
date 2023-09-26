import { useState } from "react";

function BookingForm() {
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState();
    const [availTimes, setAvailTimes] = useState();




    return (
        <form style="display: grid; maxWidth: 200px; gap: 20px">
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

