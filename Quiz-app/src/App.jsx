import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import 'react-tooltip/dist/react-tooltip.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Loading from './Loading';
import MonacoEditor from './Components/MonacoEditor';

const Home = lazy(() => import('./Components/Home'));
const Quizzes = lazy(() => import('./Components/Quizzes'));
const Articles = lazy(() => import('./Components/Articles'));
const Article = lazy(() => import('./Components/Article'));
const NotFound = lazy(() => import('./NotFound'));
const CssBattle= lazy(() => import('./Components/cssbattle/CssBattle'));

function App() {
  const url = "https://quiz-app-backend-rdot.onrender.com"; // Adjust this to your backend URL

  useEffect(() => {
    const pingBackend = () => {
      axios.get(`${url}/ping`)
        .then(response => console.log('Backend pinged'))
        .catch(error => console.error('Error pinging backend:', error));
    };

    const intervalId = setInterval(pingBackend, 3 * 60 * 1000); // Ping every 3 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [url]);

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home url={url} />} />
              <Route path="/category/:category" element={<Quizzes url={url} />} />
              <Route path="/articles" element={<Articles url={url} />} />
              <Route path="/articles/:category" element={<Article url={url} />} />
              <Route path="/cssbattle" element={<CssBattle />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
