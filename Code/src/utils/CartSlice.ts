import { createSlice , current, PayloadAction} from "@reduxjs/toolkit";
import { MenuItemCard } from "../types/menu";

interface CartState{
    items: MenuItemCard[];
}

const initialState : CartState = {
    items: [],
}
const cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addItem : (state , action : PayloadAction <MenuItemCard>) => {


            //Vanilla(older) Redux => DONT MUTATE STATE, returning was mandatory
            // const newstate = (...state);
            // newstate.items.push(action.payload);
            // return newstate;


            // mutating the state over
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
        // In redux you can not read the state directly because that will be a proxy object and for reading the original state we need "current" 
        
        // console.log(current(state));
            state.items.length = 0;
        }

    }
})

export const {addItem , removeItem , clearCart} = cartslice.actions;

export default cartslice.reducer;