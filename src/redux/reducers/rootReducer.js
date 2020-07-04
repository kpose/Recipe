import { combineReducers } from 'redux';

import recipeReducer from  './recipeReducer';
import nutritionReducer from './nutritionReducer';

const rootReducer = combineReducers({
    recipes: recipeReducer,
    nutritions: nutritionReducer
});

export default rootReducer