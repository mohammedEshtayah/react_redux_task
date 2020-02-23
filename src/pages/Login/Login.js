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
              <form className="was-validated" id="datalogin" onSubmit={this.datalogin}>
                <div class="form-group ">
                    <label   >User Address:</label>          
                    <input  ref="user"  class="form-control"  type="user" placeholder="User name" name="user" required   />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-group">
                    <label >Password:</label>
                    <input  class="form-control" ref="password"  type="password" placeholder="Password"
                       name="password" autoComplete="new-password"   required />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>  
                <button type="submit" class="login login-submit"  >Login</button>

                <div class="mt-3 login-help">
                    <a href="#">Register</a> • <a href="#">Forgot Password</a>
                </div>
              </form>
              
             
      
          </div>
      </div>   
        );
    }

    }

    

    export default Home;
