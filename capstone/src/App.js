import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import { ScrollProvider } from './ScrollContext';

function App() {
  return (
    <ScrollProvider>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </ScrollProvider>
  );
}

export default App;
