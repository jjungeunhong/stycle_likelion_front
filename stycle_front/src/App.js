import React from 'react';
import './App.css';
import MenuFull from './components/MenuFull';

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
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
				<Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
				<Route path="/donation" element={<Donate />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/recycle" element={<Recycle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
