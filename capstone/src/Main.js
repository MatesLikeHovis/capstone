import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function Main() {
    return (
        <main className="Main">
            <Hero></Hero>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <About></About>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Menu" element={<Menu />}></Route>
                <Route path="/Reservations" element={<Reservations />}></Route>
        </Routes>
        </main>
    )
}

export default Main;