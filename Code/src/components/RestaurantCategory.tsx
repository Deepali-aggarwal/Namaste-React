import { CategoryCardData } from "../types/menu";
import ItemList from "./ItemList";
import { useState } from "react";

interface RestaurantCategoryProps {
    data? : CategoryCardData
    showItems : boolean;
    setShowIndex : () => void
}

const RestaurantCategory = ({data, showItems , setShowIndex} : RestaurantCategoryProps) => {
    const handleClick = () => {
        setShowIndex();
    }


    return (
            <div className="w-9/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="text-lg font-bold ">
                        {data?.title} ({data?.itemCards?.length})
                    </span>
                    <span>▼</span>
                </div>
                {showItems && <ItemList items= {data?.itemCards}/>}
            </div> 
    )
}

export default RestaurantCategory;