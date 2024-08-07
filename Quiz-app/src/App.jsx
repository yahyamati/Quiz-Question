import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-tooltip/dist/react-tooltip.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Loading from './Loading';

const Home = lazy(() => import('./Components/Home'));
const Quizzes = lazy(() => import('./Components/Quizzes'));
const QuizOver = lazy(() => import('./Components/QuizzOver'));
const Articles = lazy(() => import('./Components/Articles'));

function App() {
  const url = "http://localhost:4000"; // Adjust this to your backend URL
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path="/" element={<Home url={url}/>} />
              <Route path="/category/:category" element={<Quizzes url={url} />} />
              <Route path="/articles" element={<Articles url={url}/>} />
              {/* <Route path="/category/:category/quizzover" element={<QuizOver />} /> */}
              
              <Route path="*" element={<div>Not found</div>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
