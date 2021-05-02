import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { useStateValue } from "./ContextAPI/StateProvider";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is >>>", authUser);

      if (authUser) {
        //the user just loggedIn / the user was looged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is ligged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          <Route exact path="/">
            {/* Home */}
            <Home />
          </Route>
          <Route path="/checkout">
            {/* checkout */}
            <Checkout />
          </Route>
          <Route path="/login">
            {/* login */}
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
