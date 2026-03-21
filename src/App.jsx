import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Home } from './pages/Home/Home';
import { CategoryPage } from './pages/Category/CategoryPage';

function App() {
  const data = {
    headphones: [{ id: 1, name: 'XX99 Mark II Headphones', isNew: true, desc: 'The new XX99 Mark II headphones is the pinnacle of pristine audio.' }],
    speakers: [{ id: 2, name: 'ZX9 Speaker', isNew: true, desc: 'Upgrade your sound system with the all new ZX9 active speaker.' }],
    earphones: [{ id: 3, name: 'YX1 Earphones', isNew: true, desc: 'Tailor your listening experience with bespoke dynamic drivers.' }]
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<CategoryPage title="Headphones" products={data.headphones} />} />
        <Route path="/speakers" element={<CategoryPage title="Speakers" products={data.speakers} />} />
        <Route path="/earphones" element={<CategoryPage title="Earphones" products={data.earphones} />} />
      </Routes>
    </Router>
  );
}

export default App;