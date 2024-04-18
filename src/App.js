import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import ViewAll from './components/ViewAll';
import ShoppingNavbar from './components/ShoppingNavbar';

function App() {
  return (
    <div>
      <AddProduct/>
      <SearchProduct/>
     <ViewAll/>
     <ShoppingNavbar/>
    </div>
  );
}

export default App;
