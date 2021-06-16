import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import About from "./components/About/About";
import DisplayPost from './components/DisplayPost/DisplayPost'

function App() {
  return (
    <div className="App">
         <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/home">Home 2</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:btnId">
            <DisplayPost></DisplayPost>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
