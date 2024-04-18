import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <AddProduct/>
      <SearchProduct/>
     <ViewAll/>
    </div>
  );
}

export default App;
