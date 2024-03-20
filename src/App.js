import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import Login from './pages/LoginForm';
import Join from './pages/JoinForm';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Join />} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
