import logo from './logo.svg';
import './App.css';
import {Link, Switch, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div class = "header">
        <h1>Blair's Booming Business</h1>
        <Link to="/"> Home </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <Link to="/create/new"> Create a Product </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/store"> View All Products </Link>
        <hr/>
      </div>
      {/* <Switch>
        <Route path = "/store/update/:id">
          <Update/>
        </Route> 
        <Route exact path = "/store">
          <All/>
        </Route>
        <Route exact path = "/create/new">
          <Form/>
        </Route> 
        <Route path ="/store/:id">
          <ViewOne/>
        </Route> 
      </Switch> */}
    </div>
  );
}

export default App;
