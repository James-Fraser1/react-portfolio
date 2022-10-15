import { Routes, Route, Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='background'>
      <Header />
      <Router>
        <Route path='/' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Router>
      <Footer></Footer>
    </div>

  );
}

export default App;
