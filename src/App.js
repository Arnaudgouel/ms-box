import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/home';
import { Layout } from './views/layout';
import { About } from './views/about';
import { Contact } from './views/contact';
import { Login } from './views/login';
import { Films } from './views/offre/films';
import { Series } from './views/offre/series';
import { Full } from './views/offre/films-series';
import { All } from './views/offre/all';
import { Legal } from './views/legal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>} />
          <Route path='/box-all' element={<All/>} />
          <Route path='/box-movies' element={<Films/>} />
          <Route path='/box-series' element={<Series/>} />
          <Route path='/box-full' element={<Full/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/legals' element={<Legal/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
