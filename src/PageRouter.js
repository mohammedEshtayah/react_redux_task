import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'  
 import Home from "./pages/Home/Home";
 import Login from "./pages/Login/Login";
import Calculator from "./pages/Calculator/Calculator"

 
 export default  class PageRouter extends Component { 

  constructor(props) {
    super(props);
   

    this.state = 
    { 
      user: ''
    };
 
  }

  
  render() {
    return (
      <Router>
        <div >
            <Switch>      
                <Route exact path='/' render={() => <Home to="/home"  />     }/>
                <Route exact path='/Calculator' render={() => <Calculator to="/Calculator"  />     }/>
                <Route exact path='/login' render={() => <Login to="/login"  />     }/>

                <Route component = {notFound} />  
        </Switch>
      </div>
      </Router>
    );
    function notFound() {
      return <h2>notFound</h2>;
    }
  }
  
  
}