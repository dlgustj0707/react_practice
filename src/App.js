import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;