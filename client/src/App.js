
import './App.css';

import {Home,About,Products} from './pages/index';
import {Header,Footer} from './components/index'
import {BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';




function App() {
    
  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />

          <Route path='/about' element={<About />} />
          {/* <Route path='/' element={<Item />} /> */}
          
        </Routes>
        <Footer />

      </Router>
    </>
  );
}

export default App;
