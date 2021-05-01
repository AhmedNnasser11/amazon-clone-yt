import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
