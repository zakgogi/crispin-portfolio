import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './style.css';
import { Home } from './Pages'

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    );
  }
  
  export default App;