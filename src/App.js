import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';

//Creating a react page
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Using the switch for different components 

function App() {
  
  return (

    <div className="App">
      
      <Router>

        <Switch>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/checkout'>
            
            <Header></Header>
            <Checkout></Checkout>

          </Route>
    
          <Route path="/">
            <Header></Header>
            <Home></Home>

          </Route>

        </Switch>

      </Router>


    </div>
  );
}

export default App;
