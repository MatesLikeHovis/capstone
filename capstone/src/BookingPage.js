import BookingForm from "./BookingForm";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import About from "./About";

function BookingPage() {
    return (
        <section>
            <Hero></Hero>
            <BookingForm></BookingForm>
            <Testimonials></Testimonials>
            <About></About>
        </section>
    )
}

export default BookingPage;