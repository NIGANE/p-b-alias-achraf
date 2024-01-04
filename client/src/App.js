
import './App.css';

import {Home,About,Products,User,Contact} from './pages/index';
import {Header,Footer ,LoginForm} from './components/index'
import {BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
import { useEffect } from 'react';





function App() {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])
    
  return (
    <>
      <Router>
        <Header />
        <LoginForm /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />

          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<User />} />
          <Route path='/contact' element={<Contact />} />
          
        </Routes>
        <Footer />

      </Router>
    </>
  );
}

export default App;
