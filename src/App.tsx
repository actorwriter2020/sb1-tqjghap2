import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AnimeList2024 from './pages/AnimeList2024';
import AllTimeAnime from './pages/AllTimeAnime';
import MessageBoard from './pages/MessageBoard';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import UpcomingAnime from './pages/UpcomingAnime';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-2024" element={<AnimeList2024 />} />
          <Route path="/all-time" element={<AllTimeAnime />} />
          <Route path="/message-board" element={<MessageBoard />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/upcoming" element={<UpcomingAnime />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;