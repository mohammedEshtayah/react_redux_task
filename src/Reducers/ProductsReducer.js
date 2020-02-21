export default  ( state =[] ,action) =>{
    switch(action.type) {
        case "getProducts":
            // return     [...state,  ...action.products ] ;  
            return [...state, { 
                                title:action.title ,
                                availability: action.availability,
                                price: action.price 
                              }
                    ] ;  
        default:
            return state
      }
    
};

 