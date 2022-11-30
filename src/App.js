import React from 'react';
import ReactDOM from "react-dom/client";
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import './style.css';
import Pr from './components/Pr.jsx';
import Layout from './components/Layout.js'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Layout/>}/>
        </Routes>
      </BrowserRouter>
      <Pr roll={true}/>
      mkp
    </div>
  );
}
