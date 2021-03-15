




export const State = {
    cart:[],

}

export const Reducer = (state = State,action:any)=>{
    switch(action.type){
        
        case "ADD_ITEM_CART":{

                return {
                
                cart:[...state.cart,{...action.payload}]
            }
        }
        case "DELETE_ITEM_CART":
            return {
                ...action.payload
            }
        default:
            return state;
    }
};
