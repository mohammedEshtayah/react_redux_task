import {combineReducers} from 'redux'
import CalculatorReducer from './CalculatorReducer';
import  ProductsReducer from './ProductsReducer';
import  saveComponentsReducer from './saveComponentsReducer';

const RootReducers =combineReducers({
                                    CalculatorReducer,
                                     ProductsReducer,
                                     saveComponentsReducer
                                });

export default RootReducers;