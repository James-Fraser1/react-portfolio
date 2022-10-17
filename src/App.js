// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';

// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <div className='background'>
//       <Header />
//       <Routes>
//         <Route path='/' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/projects' element={<Projects />} />
//       </Routes>
//       <Footer></Footer>
//     </div>

//   );
// }

// export default App;

import { useState } from "react";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from './components/Main';
import ReactDOM from 'react-dom'



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function App() {
  const [page, setPage] = useState('about')

  return (
    <div className='background'>
      <Header setPage={setPage} />
      <Main page={page} />
      <Footer />
    </div>
  );
}

export default App;
