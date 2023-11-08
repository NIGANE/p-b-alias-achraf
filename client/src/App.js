
import './App.css';

import {Home,About} from './pages/index';
import {Header,Footer} from './components/index'
import {BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
// import './assets/images/'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About />} />
          
        </Routes>
        <Footer />

      </Router>
    </>
  );
}

export default App;
