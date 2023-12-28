import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="prices" element={<Prices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
