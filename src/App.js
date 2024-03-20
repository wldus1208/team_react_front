import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
