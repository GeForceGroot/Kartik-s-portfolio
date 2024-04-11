import './App.css';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Eduexp from './components/Eduexp';
import Exp from './components/Exp';
import Footer from './components/Footer';
import ShortContact from './components/MidContact';
import Navbar from './components/Navbar'
import Projetcs from './components/Projetcs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Carousel />
            <Projetcs />
            <Eduexp />
            <Exp />
            <ShortContact />
          </Route>
          <Route path='/contact_us'>
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
