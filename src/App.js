import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './App.css';
import RegisterPage from './Pages/register';
import LoginPage from './Pages/loginPage';
import HomePage from './Pages/HomePage';
import AddProductPage from './Pages/AddProduct';
import SingleProductPage from './Pages/SingleProduct/SingleProductPage';
import CartPage from './Pages/Cart/cartPage';


import NavBar from './Components/navBar';
import WishLisPage from './Pages/WishLisPage/WishListPage';



function App() {
  return (
    <div className="App">

      <Router>
          <Switch>

          <Route path="/register" exact>
                  <RegisterPage/>
            </Route>

          <Route path="/login" exact>
                  <LoginPage/>
            </Route>
          <Route path="/cart" exact>
                  <NavBar/>
                  <CartPage/>
            </Route>

          <Route path="/wishlist" exact>
                  <NavBar/>
                  <WishLisPage/>
            </Route>

            
            <Route path="/products/:productId" exact>
                  <NavBar/>
                  <SingleProductPage/>
            </Route>

          <Route path="/add-product" exact>
                  <NavBar/>
                  <AddProductPage/>
            </Route>

          <Route path="/" exact>
                  <NavBar/>
                  <HomePage/>
            </Route>

          </Switch>
      </Router>

              {/* home */}
    </div>
  );
}

export default App;
