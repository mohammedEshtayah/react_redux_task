import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react'; 
import './Calculator.css'

import {CalculatorAction} from '../../Actions/CalculatorAction'  
import Footer  from '../../Components/footer/Footer';
import Header  from '../../Components/header/Header'; 
import { connect} from 'react-redux'
 
 
const mapStateToProps = state => { 
    
     return { info: state.CalculatorReducer};
  }; 
function mapDispatchToProps(dispatch) {
    return {
        Calculator: action => {dispatch(CalculatorAction(action));/* console.log(action) */}
    };
}   
class Calculator extends React.Component{
    constructor(props){
        super(props);
            this.state={
            input:[],
            res_noRes:false,
            numb:'',

            
        }
    }
    

equals(e){ 
   
    const op=/[-+*/]/
    const nu=/[1234567890]/
    var res  = this.state.input 
    var r=res.split(op) 
    var output = res.split(''); 
    var r2 = output.filter(e => e=="-"||e=="*"||e=="+"||e=="/");
    

    var a;
     
     for(let x in r2){
        console.log(r2[x]) 
        if(r2[x]=="+"){
            a=parseInt(r[0]) + parseInt(r[1])

            this.props.Calculator({first_element: r[0],
                second_element:r[1],
                operation:"+",
                result:a
            });
        }
        if(r2[x]=="-"){
            a=parseInt(r[0]) - parseInt(r[1])
            this.props.Calculator({first_element: r[0],
                second_element:r[1],
                operation:"+",
                result:a
            });
        }
        if(r2[x]=="*"){
            a=parseInt(r[0]) * parseInt(r[1])
            this.props.Calculator({first_element: r[0],
                second_element:r[1],
                operation:"+",
                result:a
            });
        }
        if(r2[x]=="/"){
            a=parseInt(r[0]) / parseInt(r[1])
            this.props.Calculator({first_element: r[0],
                second_element:r[1],
                operation:"+",
                result:a
            });
        }
        r.shift()
        r.shift()
        r.unshift(a)
        this.setState({input: a}) 
        
    } 
    this.setState({res_noRes: true}) 
     
    
    
}  
Changes(number){ 
    var i=this.state.i;
    var input=this.state.input;
    if(this.state.res_noRes==true  ){ 
        this.setState({input:''})
        this.setState({res_noRes:false})
    }
        

    if( number =="c"){
        this.setState({input:''})
    } else{
        
        if(this.state.res_noRes==true && number !="+"&&number !="-"&&number !="*"&&number !="/"){ 

            this.setState({  input: number  })
            this.setState({res_noRes:false})
        }else{
            this.setState({  input: input+number  });

        }
         
    }
   
  
}    

render(){
    return(
        <div>
        <Header/>
            <div className="container cal">
                <div className="row">
                    <div className="col-12 cal-inputs"> <h1> {this.state.input} </h1></div>
                </div>
                <div>
                
               
                
                </div>

                
                    <div className="row">
                        <div className="col-9 item "    onClick={(e) => this.Changes("c", e) }><h1> clear </h1></div>
                        <div className="col-3 op " onClick={(e) => this.Changes("*", e) }><h1> * </h1></div>
                    </div>
                    <div className="row">
             
                        <div className="col-3 item "     onClick={(e) => this.Changes("9", e) }><h1> 9 </h1></div> 
                        <div className="col-3 item "    onClick={(e) => this.Changes("7", e) }><h1> 7 </h1></div>
                        <div className="col-3 item "    onClick={(e) => this.Changes("8", e) }><h1> 8 </h1></div>
                        <div className="col-3 op " onClick={(e) => this.Changes("/", e) }><h1> / </h1></div>              

                    </div>
                    <div className="row">

                        <div className="col-3 item " onClick={(e) => this.Changes("4", e) }><h1> 4 </h1></div>
                        <div className="col-3 item " onClick={(e) => this.Changes("5", e) }><h1> 5 </h1></div>
                        <div className="col-3 item"  onClick={(e) => this.Changes("6", e) }><h1> 6 </h1></div>

                        <div className="col-3 op " onClick={(e) => this.Changes("-", e) }><h1> - </h1></div>  

                    </div>

                   
                    <div className="row"> 
                        <div className="col-3 item" onClick={(e) => this.Changes("1", e) }><h1> 1 </h1></div>
                        <div className="col-3 item" onClick={(e) => this.Changes("2", e) }><h1> 2 </h1></div>
                        <div className="col-3 item "    onClick={(e) => this.Changes("3", e) }><h1> 3 </h1></div> 
                        <div className="col-3 op" onClick={(e) => this.Changes("+", e) }><h1> + </h1></div>  

                    </div>

                    <div className="row"> 
                        <div className="col-3 item"></div>
                        <div className="col-3 item"   onClick={(e) => this.Changes("0", e) }><h1> 0 </h1></div>
                        <div className="col-3 item"  ></div> 
                        <div className="col-3 op" onClick={(e) => this.equals("id", e)  }><h1> =</h1></div>
                    </div>
                    
                    
 

              
                 
            </div>
             {this.props.info.map((num,x)=>(
                <h1 key={x}> result {num.first_element }{num.operation }
                {num.second_element }={num.result}</h1> 

             ))

             }
            
            <Footer/>
        
        </div>
    );
}

}

 
 
export default  connect(  mapStateToProps,mapDispatchToProps) (Calculator);
