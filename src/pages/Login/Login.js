import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Login.css'

class Home extends React.Component{

constructor(props){
    super(props);
    this.state={ 
        
    }
}
datalogin=(e)=>{
    e.preventDefault(); 
 
}

render(){
     
    return(
        <div className="loingpage"> 
        <div  className="login-card" >
              <h1>Log-in</h1>
              <form  id="datalogin" onSubmit={this.datalogin}>
                  <label   >User Address:</label>          
                  <input  ref="user"  type="user" placeholder="User name" name="user"    />
                  <label >Password:</label>
                  <input ref="password"  type="password" placeholder="Password"   name="password" autoComplete="new-password"  required />
                  <button type="submit" class="login login-submit"  >Login</button>
                     
              </form>
              
              <div class="mt-5 login-help">
                  <a href="#">Register</a> • <a href="#">Forgot Password</a>
              </div>
      
          </div>
      </div>   
        );
    }

    }

    

    export default Home;
