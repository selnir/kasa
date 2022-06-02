import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import A_propos from './pages/A_propos.js';
import My_home from './pages/My_home.js';
import Layout from "./composants/Layout/Layout"
import NoPage from './pages/NoPage.js';
import Fiche_logement from './pages/Fiche_logement'

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<My_home />} />
            <Route path="A_propos" element={<A_propos />} />
            <Route path="Fiche_logement/:id" element={<Fiche_logement/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
