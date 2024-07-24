import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RecpieForm from './components/RecpieForm';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recpie_form" element={<RecpieForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
