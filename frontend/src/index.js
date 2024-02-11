import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Puzzle from './components/Puzzle';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import Departments  from './components/Departments';
import AddData from './components/AddData';
import Availability from './components/Availability';
import Issued from './components/Issued';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path="/puzzle" element={<Puzzle/>}></Route>
    <Route path="/details" element={<Details/>}></Route>
    <Route path="/addData" element={<AddData/>}></Route>
    <Route path="/departments" element={<Departments/>}></Route>
    <Route path="/availability" element={<Availability/>}></Route>
    <Route path='issued' element={<Issued/>}></Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

