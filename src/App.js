import { ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes'
import{Routes, Route} from 'react-router-dom';
import './index.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
//import Showcase from './components/sections/Showcase';
import Team from './pages/Team';
import Faq from './pages/Faq';
import Footer from './components/Footer';

//START OF PERSONAL PROJECT
//For Cafe Blog
import Cafes from './pages/Cafes';
import Breweries from './pages/Breweries';
import AboutUs from './pages/AboutUs';

//Remove showcase
function App() {
  return (
    <>
     <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
    <GlobalStyles />
      <ThemeProvider theme={light}>
      <Navigation />

     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/cafes" element={<Cafes />} />
        <Route path= "/breweries" element={<Breweries />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      {/* <Home />
      <About />
      <Roadmap />
      <Team />
      <Faq />
      <Footer /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
