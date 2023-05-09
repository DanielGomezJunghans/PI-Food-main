
const initialState = {
    recipes: [],
    diets: [],
    allRecipes:[],
    detail: {}
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload, 
                allRecipes: action.payload
            }

            case 'CLEAR_DETAIL':
                return {
                    ...state,
                    detail: initialState.detail
                }

            case 'FILTER_BY_DIETS':
                const allRecipes = state.allRecipes
                const filtered = action.payload === 'All' 
                ? allRecipes 
                : allRecipes.filter(el => el.diets.includes(action.payload) )
                return {
                    ...state,
                    recipes: filtered
                }

            case 'FILTER_CREATED':
                const createdFiltered = action.payload === 'Created' 
                ? state.allRecipes.filter(el => el.createInDb)
                : state.allRecipes.filter(el => !el.createInDb)
                
                const question = action.payload === 'All' 
                ? state.allRecipes
                : createdFiltered
                return {
                    ...state,
                    recipes: question
                }
            
            case 'ORDER_BY_NAME':
            const orderAsc = action.payload === 'asc'
                    ? state.recipes.sort(function(a,b){
                        if(a.name > b.name){
                            return 1;
                        }
                        if (b.name > a.name){
                            return -1;
                        }
                        return 0;
                    })

                    : state.recipes.sort(function(a,b){
                        if(a.name > b.name){
                            return -1;
                        }
                        if(b.name > a.name){
                            return 1;
                        }
                        return 0; 
                    })
                return {
                    ...state,
                    recipes: orderAsc
                }

            case 'ORDER_BY_HEALTH':
                let SortHealth = action.payload === 'healthScoreAsc'
                ? state.recipes.sort(function(a,b){
                if (a.healthScore > b.healthScore) return 1;
                if (a.healthScore < b.healthScore) return -1;
                return 0;
                })
                : state.recipes.sort(function (a, b){
                    if (a.healthScore < b.healthScore) return 1;
                    if (a.healthScore > b.healthScore) return -1;
                    return 0;
                });
                return {
                    ...state,
                    recipes: SortHealth
                } 
                
            case 'GET_NAME_RECIPES':
                return {
                    ...state,
                    recipes: action.payload
                }
                
            case 'GET_DIETS':

                return{
                    ...state,
                    diets: action.payload
                } 
            
            case 'GET_DETAILS': 
                return {
                    ...state,
                    detail: action.payload
                }
                
            default: 
                return state;
    }
}



export default rootReducer;
