import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

const [availTimes, setAvailTimes] = useState();


function Main() {
    return (
        <main className="Main">
            <Hero></Hero>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <About></About>
        </main>
    )
}

export default Main;