export default  ( state =[] ,action) =>{
    switch(action.type) {
        case "saveComponents":   
            return { 
                Header: action.Header,
                Navigate:action.Navigate,
                Footer:action.Footer,  
                    } ;  
        default:
            return state
      }
    
};

 