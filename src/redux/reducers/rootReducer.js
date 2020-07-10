import { combineReducers } from 'redux';

import recipeReducer from  './recipeReducer';
import nutritionReducer from './nutritionReducer';

const rootReducer = combineReducers({
    recipes: recipeReducer,
    nutrition: nutritionReducer,
});

export default rootReducer