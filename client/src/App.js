import logo from './logo.svg';
import './App.css';
import {Link, Switch, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div class = "header">
        <h1>Blair's Booming Business</h1>
        <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <Link to="/create/new"> Create a Product </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/blogs"> View All Products </Link>
        <hr/>
      </div>
    </div>
  );
}

export default App;
