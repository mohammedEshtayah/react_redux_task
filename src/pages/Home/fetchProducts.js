import {productsAction} from '../../Actions/productsAction';

function fetchProducts() {
    return dispatch => { 
        fetch('https://my-json-server.typicode.com/AnifaMd/shopping-cart/products')
        .then(res => res.json())
        .then(products=> {  
           /*    dispatch({
                type: "getProducts",
                products: products
            })    */  
            for(let i=0;i<products.length;i++){
                  /* 
                   dispatch({  title: products[i].title  ,
                               availability: products[i].availability,
                               price: products[i].price,
                               type:"getProducts"
                            }); */
                    dispatch( productsAction({  title: products[i].title  ,
                            availability: products[i].availability,
                            price: products[i].price,
                            type:"getProducts"
                        }));
        
            
                 
            }
            return products;
        })
       
    }
}

export default fetchProducts; 