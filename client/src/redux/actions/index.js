import axios from 'axios';

export function getRecipes(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/recipes", {

        });
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    } 
}

export function filterRecipesByDiets(payload){ 
    return {
        type: 'FILTER_BY_DIETS',
        payload
    }
}

export function filterCreated(payload){
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function orderByName(payload){ 
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByHealth(payload){
    return {
        type: 'ORDER_BY_HEALTH',
        payload
    }
}
export function getNameRecipes(name){
    try {
        return async function(dispatch){
            var json = await axios.get("http://localhost:3001/recipes?name="+ name);
            return dispatch({
                type: "GET_NAME_RECIPES",
                payload: json.data
            })
    }
    } catch (error) {
        console.log(error);
    }
}

export function getDiets(){
    return async function(dispatch){
        var json= await axios("http://localhost:3001/diets", {

        });
        return dispatch ({
            type: 'GET_DIETS',
            payload: json.data
        })
    }
}

export function clearDetail(){
    return function(dispatch){
        return dispatch({
            type:'CLEAR_DETAIL'
        })
    }
}

export function postRecipes(payload) {
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/recipes", payload) 
        return response;
    }
}

export function getDetail (id){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/recipes/" +id);
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
