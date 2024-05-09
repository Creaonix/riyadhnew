import logo from './logo.svg';
import './App.css';
import NavHeader from './components/NavHeader';
import About from './components/About';
import Timeline from './components/Timeline';
import Sustanablity from './components/Sustanablity';
import Market from './components/Market';
import Steps from './components/Steps';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <NavHeader />
    <About />
    <Timeline />
    <Steps />
    <Sustanablity />
    <Market />
    <Footer />
    </>
  );
}

export default App;
