import React from 'react';
import Layout from './layout/Layout';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import AuthLayout from './layout/AuthLayout';
function App (){

    return (<BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<AuthLayout />} />
        </Routes>
      </BrowserRouter>)
}

export default App;
