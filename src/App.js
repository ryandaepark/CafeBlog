import { ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes'
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
//import Showcase from './components/sections/Showcase';
import Team from './pages/Team';
import Faq from './pages/Faq';
import Footer from './components/Footer';

//Remove showcase
function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
      <Navigation />
      <Home />
      <About />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
