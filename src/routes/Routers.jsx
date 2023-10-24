import { Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import DevelopersPage from '../pages/DevelopersPage';
import DevelopersDetailsPage from '../pages/DevelopersDetailsPage';

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/register' element={<Signup/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/developers' element={<DevelopersPage/>} />
    <Route path='/developers/:id' element={<DevelopersDetailsPage/>} />
    <Route path='/*' element={<NotFound/>} />
  </Routes>
}

export default Routers