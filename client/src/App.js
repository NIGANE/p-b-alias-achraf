
import './App.css';

import {Home,About,Products,User} from './pages/index';
import {Header,Footer ,LoginForm} from './components/index'
import {BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';





function App() {
    
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
          
        </Routes>
        <Footer />

      </Router>
    </>
  );
}

export default App;
