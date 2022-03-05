import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Admin from './components/Admin';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import NewProducts from './components/NewProducts';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import Profile from './components/Profile';
import UserDetails from './components/UserDetails';
const LazyAbout= React.lazy(()=>import('./components/About'))

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='about' element={<About/>} /> */}
        <Route path='about' 
        element={
        <React.Suspense fallback="...Loading"> 
          <LazyAbout/>
          </React.Suspense>} />

        <Route path='ordersummary' element={<OrderSummary/>} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path= 'new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<UserDetails />}> 
        <Route path= ':userId' element={<UserDetails/>}/>
        <Route path= 'admin' element={<Admin/>}/>
        </Route>
        <Route path='profile' element={<Profile/>} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
