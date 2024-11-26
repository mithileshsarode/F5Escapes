import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import Home from './pages/Home';
import GroupTours from './pages/GroupTours';
import CustomTours from './pages/CustomTours';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <AnnouncementBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/group-tours" element={<GroupTours />} />
          <Route path="/custom-tours" element={<CustomTours />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;