import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import Main from './pages/Main';
import Donate from './pages/Donate';
import Mission from './pages/Mission';
import Recycle from './pages/Recycle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
				<Route path="/" element={<Main />} />
				<Route path="/donate" element={<Donate />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/recycle" element={<Recycle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
