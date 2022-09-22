import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import All from './components/All';
import ViewOne from './components/ViewOne';
import Update from "./components/Update";
import {Link, Switch, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div class = "header">
        <h1>Blair's Booming Business</h1>
        <Link to="/"> Home </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/create/new"> Create an Item </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/items"> View All Items </Link>
        <hr/>
      </div>
      <Switch>
        <Route path = "/items/update/:id">
          <Update/>
        </Route> 
        <Route exact path = "/items">
          <All/>
        </Route>
        <Route exact path = "/create/new">
          <Form/>
        </Route> 
        <Route path ="/items/:id">
          <ViewOne/>
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
