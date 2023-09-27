import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import BookingPage from './BookingPage';
import { ScrollProvider } from './ScrollContext';

function App() {
  return (
    <ScrollProvider>
      <Header></Header>
      <Routes>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/BookingPage" element={<BookingPage />}></Route>
      </Routes>
      <Footer></Footer>
      
    </ScrollProvider>
  );
}

export default App;
