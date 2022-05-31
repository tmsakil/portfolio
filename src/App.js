
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/projects' element={<Projects></Projects>}></Route>
  <Route path='/contact' element={<Contact></Contact>}></Route>
</Routes>
    </div>
  );
}

export default App;
