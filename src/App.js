import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe("pk_test_51Iz1keSEkkN51Zi3nklSkIn5PLSRLSBJ8ZYgGxWUCsg8LaSXApZx3Nz2vxniyJZLe7OLHY6MqiM9FV2CYMAufnQi002n1fS7ok");

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component iss loaded
    auth.onAuthStateChanged(authUser =>{
      console.log(`The user is`,authUser)
      if(authUser){
          dispatch({
            type:'SET_USER',
            user:authUser
          })
      }else{
          dispatch({
            type:'SET_USER',
            user:null
          })
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/" >
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
