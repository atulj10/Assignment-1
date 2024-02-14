import './App.css';
import Hero from './Sections/Hero';
import Benefits from './Sections/Benefits';
import Timer from './Sections/Timer';
import About from './Sections/About';
import CTA from './Sections/CTA';
import {Modal} from 'react-modal';
import Form from './Sections/Form';
import { useState, useEffect } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  const customStyles = {
    content: {
      height: 400,
      width: 400,
      top: 500,
      left: 20,
      borderRadius: 20,
      backgroundColor: "#fada50",
      color: "white",
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className='container'>
        <Hero />
        <About />
        <Benefits />
        <Timer />
        <CTA />
          <Modal  isOpen={open} style={customStyles} onRequestClose={() => setOpen(false)}>
            <Form setOpen={setOpen} />
          </Modal>
      </div>
    </>
  );
}

export default App;
