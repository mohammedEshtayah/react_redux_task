import {combineReducers} from 'redux'
import CalculatorReducer from './CalculatorReducer';
import  ProductsReducer from './ProductsReducer';

const RootReducers =combineReducers({
                                    CalculatorReducer,
                                     ProductsReducer
                                });

export default RootReducers;