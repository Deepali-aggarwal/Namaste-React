import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";
import { RootState } from "../utils/AppStore";

const Cart = () => {
    const cartItems = useSelector((store : RootState) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
   return (
        <div className="m-4 p-4 flex flex-col">

            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Cart</h1>
                <button
                    className="p-2 bg-black text-white rounded-lg hover:cursor-pointer"
                    onClick={handleClearCart}>
                    Clear Cart
                </button>
            </div>

            {cartItems.length === 0 ? (
            <div className="flex flex-1 justify-center items-center">
                <h1 className="text-2xl text-center m-30 font-bold text-gray-500">
                Cart is empty. Add Items to the cart!!!
                </h1>
            </div>
            ) : (
            <div className="w-6/12 pl-3 mt-4">
                <ItemList items={cartItems} />
            </div>
            )}
        </div>
    );
}

export default Cart;