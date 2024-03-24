import React from 'react';
import LoginScreen from './LoginScreen';
import WelcomeBack from './WelcomeBack'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/welcome" element={<WelcomeBack />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
