import Navbar from './components/Navbar';
import Products from './components/Products'
import ProductDetails from './components/ProductDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Products />}/>
          <Route exact path='/details/:id' element={ <ProductDetails/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
