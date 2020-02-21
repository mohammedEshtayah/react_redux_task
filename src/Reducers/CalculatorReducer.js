const CalculatorReducer = ( state = [] ,action) =>{
    switch(action.type) {
        case "change_data":
            return [...state , { 
                first_element: action.first_element,
                second_element:action.second_element,
                operation:action.operation,
                result:action.result,  
            }]; 
        default:
            return state
      }
    
   /*   switch(action.type){
        case 'change_data':
          
        default : 
            return state;
    } */
};

export default CalculatorReducer;