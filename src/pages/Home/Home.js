import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.css'
import itg from '../../images/itg.png'
import p1 from '../../images/sabroso-restaurant-s.jpg'
import p2 from '../../images/ca.jpg'
import p3 from '../../images/ccc.jpg'
import p4 from '../../images/sss.jpg' 


import fetchProductsAction from './fetchProducts'; 
import {productsAction} from '../../Actions/productsAction'   
import { connect} from 'react-redux'
import { bindActionCreators } from 'redux';

const mapStateToProps = state => { 
    return { 
        products: state.ProductsReducer,
        Components:state.saveComponentsReducer
    };
 }; 

const mapDispatchToProps = dispatch => {
    return{
        getProducts: bindActionCreators(fetchProductsAction, dispatch)
    }
}

class Home extends React.Component{

constructor(props){
    super(props);
        this.state={ 
        data:{},
        list: [  ],
    }
}
componentDidMount(){ 
     this.props.getProducts();
        
}
 
render(){
    return(
        <div>
         
            {this.props.Components.Header} 
            {this.props.Components.Navigate} 
            <section >
                    <div className="main-content1">
                    <div className="itg-tital">
                            <h1> Take your tech to the next level  </h1>
                            <h2>
                                ITG provides outsourced software development services to companies striving to transform their products and services into world-class offerings. With ITG, your business is our business.
                            </h2>
                        </div>
                        <br></br>
                        <div>
                            <img src={itg} className="content1-img" alt="Smiley face"/>
                        </div>
                    </div>
            
                    <div className="main-content2">
                        <div id="itgproducts" className="itg-products">
                            <div className="itg-product">
                                <img src={p1} width="150" height="70" alt="Smiley face"/>
                                <h3>Sabroso</h3>
                                <p>  Sabroso is a mexican restaurant that is specialized in mouthwatering Fajitas !</p>
                                <p>100$</p>

                            </div>
                            <div className="itg-product">
                                <img src={p2} width="150" height="70" alt="Smiley face"/>
                                <h3>The Dinner cafe</h3>
                                <p>You can have a drink before going to work.</p>
                                <p >100$</p>

                            </div>
                            <div className="itg-product">
                                <img src={p3} width="150" height="70" alt="Smiley face"/>
                                <h3>menu</h3>
                                <p> can enjoy a nourishing meal before you go off to work. </p>
                                <p>200$</p>

                            </div>
                            <div className="itg-product">
                                <img src={p4} width="150" height="70" alt="Smiley face"/>
                                <h3>Sabroso</h3>
                                <p> Sabroso is a mexican restaurant that is specialized in mouthwatering Fajitas !</p>
                                <p>100$</p>

                            </div>
                            {
                                this.props.products.map((d,x) =>(    
                               <div key={x} className="itg-product">
                                <img src={  require("../../images/"+ x +".jpg") } width="150" height="70" alt="Smiley face"/>
                                <h3>{d.title}</h3>
                                <p> {d.availability}</p>
                                <p> {d.price}$</p>
                              
                            </div>  
                            )
                            )
                            }
                    </div>
                    

                    </div>
                </section>
             {this.props.Components.Footer} 
        </div>
        );
    }

    }

   

export default  connect(  mapStateToProps,mapDispatchToProps) (Home);

