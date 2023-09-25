import { ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes'
import{Routes, Route} from 'react-router-dom';

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
import AboutUs from './pages/AboutUs';

//Remove showcase
function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/cafes" element={<Cafes />} />
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
