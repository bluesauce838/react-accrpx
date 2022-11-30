import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './style.css';
import Pr from './components/Pr.jsx';
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import Blogs from './components/Blogs.js';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="Home" element={<Home />} />
          <Route path="Blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
      <Pr roll={true} />
      mkp
    </div>
  );
}
