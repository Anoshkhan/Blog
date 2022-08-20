import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//pages
import Home from './pages/Home';
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    
    <Router>
    <div className="container">
    <Navbar />
    <div className='max-w-screen-md mx-auto pt-20'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/articles-list" element={<ArticlesList/>} />
    <Route path="/article/:name" element={<Article />} />
    <Route path="*" element={<NotFound />} />
    
    </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
