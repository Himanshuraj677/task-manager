import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import TrackPage from './pages/track/TrackPage';
import RedirectLink from './services/RedirectLink/RedirectLink';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import './App.css';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/link/track' element={<TrackPage />} />
          <Route path="/:shortened_url" element={<RedirectLink />} />
          <Route path="/link/not-found" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
