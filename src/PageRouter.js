import React, { Component } from 'react'; 
import { connect} from 'react-redux'
import { BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'  
 import Home from "./pages/Home/Home";
 import Login from "./pages/Login/Login";
import Calculator from "./pages/Calculator/Calculator"
import Footer  from './Components/footer/Footer';
import Header from './/Components/header/Header';
import Navigate from './Components/navigate/Navigate'; 
import {saveComponentsAction} from './Actions/saveComponentsAction'
 
 
function mapDispatchToProps(dispatch) {
  return {
    saveComponentsAction: action => {dispatch(saveComponentsAction(action));
    }
  };
}   
class PageRouter extends Component { 

  constructor(props) {
    super(props);
   

    this.state = 
    { 
      user: '',
      itgnav:'itg-nav'
    };
 
  }
  componentWillMount(){
      this.props.saveComponentsAction({
        Header: <Header changeStyleMenu={this.changeStyleMenu}/>,
        Navigate:<Navigate itgnav={this.state.itgnav}/> ,
        Footer:<Footer/> ,  
      })
  }
 
  changeStyleMenu=(e)=>{
    this.setState({itgnav:e}) 
    return this.state.itgnav;
    
  }  
  
  render() {
    return (
      <Router>
        <div  >
            <Switch>      
                <Route exact path='/' render={() => <Home to="/home"   />   }/>
                <Route exact path='/Calculator' render={() => <Calculator to="/Calculator"  />    }/>
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
export default  connect(  null,mapDispatchToProps) (PageRouter);
