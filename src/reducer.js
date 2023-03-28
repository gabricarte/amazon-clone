//here we define all the application level states and define actions to make changes to the state 

//reducer is a function used to manage the state of a component or application 

export const initialState = {
    basket: [],
}

//Selector
export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => item.price + amount, 0));
}


//current state and action to make the change to the state
const reducer = (state, action) => {

    switch(action.type) {
        
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case "REMOVE_FROM_BASKET":

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if(index >= 0 ){
                newBasket.splice(index, 1);
            } else{
                console.warn(`Can't remove product ${action.id}`)
            }

            return {
                ...state, 
                basket: newBasket
            }

            default: 
                return state;

    }
}


export default reducer; 