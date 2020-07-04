export const initialState = {
    recipes: [],
    loading: false,
    hasErrors: false,
}

export default function recipeReducer( state=initialState, action ) {
    switch (action.type) {
        default:
            return state
    }
}