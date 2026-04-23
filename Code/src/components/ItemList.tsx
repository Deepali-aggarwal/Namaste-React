import { useDispatch } from "react-redux";
import { MenuItemCard } from "../types/menu";
import { addItem } from "../utils/CartSlice";
import { CDN_URL } from "../utils/Constant";

interface ItemListProps{
    items? : MenuItemCard[];
}

const ItemList = ({items} : ItemListProps) => {
    // console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item : MenuItemCard) => {
        dispatch(addItem(item));
    }
    return(
        <div>
            {items?.map ((item) => (
                <div
                    key= {item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 flex">
                    <div className="flex justify-between">
                        <div className="text-left py-1 w-9/12">
                            <span>
                                {item.card.info.name}
                            </span>
                            <span > 
                                - ₹{(item.card.info.price ?? item.card.info.defaultPrice ?? 0) / 100}
                            </span>    
                            <p className="text-xs text-gray-500">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 relative">
                            <img src= {CDN_URL + item.card.info.imageId}  className="w-full h-auto rounded-lg"/>
                            <button className= "bottom-0 left-1/2 -translate-x-1/2 bg-white text-green-500 font-bold shadow-lg absolute m-auto px-8 py-1 rounded-lg border-gray-100 hover:bg-gray-200 cursor-pointer" onClick={() => handleAddItem(item)}> ADD</button>
                        </div>
                    </div>

                </div>
            ))}    
        </div>
    );
}

export default ItemList;