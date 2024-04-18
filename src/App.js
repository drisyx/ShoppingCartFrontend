import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import ViewAll from './components/ViewAll';
import ShoppingNavbar from './components/ShoppingNavbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   
   <Routes>

<Route path='/' element = {<ViewAll/>}/>
<Route path='/search' element={<SearchProduct/>}/>
<Route path='/add' element={<AddProduct/>}/>

   </Routes>
   
   
   
   </BrowserRouter>
  );
}

export default App;
