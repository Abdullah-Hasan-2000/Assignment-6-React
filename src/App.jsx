import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import SingleProductPage from './screens/SingleProductPage';


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
      </Routes>
      
    </>
  );
}

export default App;
