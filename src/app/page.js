import React from 'react';
// import {Routes, Route} from 'react-router-dom';
// import Home from './Home';
// import PropertyDetails from './properties/PropertyDetails'
import Home from './Home';


export default function App(){
  return (
  <div className='max-w-[1440px] mx auto'>
    <Home />
    {/* <Routes> */}
      {/* <Route path="/" element={<Home/>}/> */}
      {/* <Route path='/property/:id' element={<PropertyDetails />} /> */}
    {/* </Routes> */}
    
  </div>
  );
 }