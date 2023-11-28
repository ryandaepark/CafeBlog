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
import Login from './pages/Login';
import Register from './pages/Register';
import { UserContextProvider } from './components/UserContext';

//Remove showcase
function App() {
  return (
    <>
    <UserContextProvider>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/cafes" element={<Cafes />} />
          <Route path= "/breweries" element={<Breweries />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </ThemeProvider>
    </UserContextProvider>
    </>
  );
}

export default App;
