import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PatternPage from './pages/PatternPage';
import TopicPage from './pages/TopicPage';
import ProblemDetail from './pages/ProblemDetail';
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <div className="main-layout">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patterns/:id" element={<PatternPage />} />
            <Route path="/topics/:id" element={<TopicPage />} />
            <Route path="/problem/:id" element={<ProblemDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;