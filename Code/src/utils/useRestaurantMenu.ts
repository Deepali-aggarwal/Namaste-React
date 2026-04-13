import { useEffect, useState } from "react";
import { MENU_API } from "./Constant";
import { MenuItemCard } from "../types/menu";
interface RestaurantInfo {
  name: string;
  costForTwoMessage: string;
  cuisines: string[];
  cloudinaryImageId: string;
}

const useRestaurantMenu = (resId : string) => {

    const [resInfo, setResInfo] = useState<RestaurantInfo| null>(null);
    const [menuItems,setMenuItems] = useState<RestaurantInfo[]>([]);
    useEffect(() => {
        fetchData();

    },[resId]);
    const fetchData = async () => {
        const data = await fetch(MENU_API + resId); 
        const json = await data.json();
        setResInfo(json?.data?.cards[2]?.card?.card?.info);
    }

    return {resInfo, menuItems};

}

export default useRestaurantMenu;