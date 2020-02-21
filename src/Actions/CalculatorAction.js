export  const CalculatorAction= data=>{
    return{
        first_element: data.first_element,
        second_element:data.second_element,
        operation:data.operation,
        result:data.result,
        type:'change_data', 
        } 

         
 }; 
         
         