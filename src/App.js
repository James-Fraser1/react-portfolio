import { Route, Switch, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='background'>
      <Header />
        <Switch>
          <Route path='/' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Switch>
      <Footer></Footer>
    </div>

  );
}

export default App;
