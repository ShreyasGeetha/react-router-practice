import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Homepages from './components/Homepages';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepages />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='OrderSummary' element={<OrderSummary />}></Route>
        <Route path='products' element={<Products />}>
          {/* Index route is the one, which tells which default nested route to be 
          routed to */}
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />}></Route>
          <Route path='new' element={<NewProducts />}></Route>
        </Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
