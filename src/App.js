import logo from './logo.svg';
import './App.css';
import Adduser from './components/Adduser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Displaydata from './components/Displaydata';

function App() {
  return (
    <BrowserRouter>
<Routes>
<Route path='/' element={<Adduser/>}/>
<Route path='/search' element={ <Search/>}/>
<Route path='/display' element={<Displaydata/>}/>
</Routes>
    
    </BrowserRouter>
  );
}

export default App;
