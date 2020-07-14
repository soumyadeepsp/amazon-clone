export const initialState = {
    basket: [],
    user: null
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //whatever we return that is how the new data layer looks like
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id===action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {

            }
            return {...state, basket : newBasket};
        default:
            return state;
    }
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price+amount, 0);

export default reducer;