import { useEffect, useState } from "react";
import { MENU_API } from "./Constant";
import { MenuItemCard } from "../types/menu";
interface RestaurantInfo {
  name: string;
  costForTwoMessage: string;
  cuisines: string[];
  cloudinaryImageId: string;
}
interface CategoryCard {
  card?: {
    card?: {
      ["@type"]?: string;
      title?: string;
      itemCards?: MenuItemCard[];
    };
  };
}

const useRestaurantMenu = (resId : string) => {

    const [resInfo, setResInfo] = useState<RestaurantInfo| null>(null);
    const [menuItems,setMenuItems] = useState<MenuItemCard[]>([]);
    const [categories, setCategories] = useState<CategoryCard[]>([]);
    useEffect(() => {
        fetchData();

    },[resId]);
    const fetchData = async () => {
        const data = await fetch(MENU_API + resId); 
        const json = await data.json();

        setResInfo(json?.data?.cards[2]?.card?.card?.info);
        
        const regularCards: CategoryCard[] =json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

        const items = regularCards
        ?.filter((c: CategoryCard) => c?.card?.card?.itemCards)
        .flatMap((c: CategoryCard) => c?.card?.card?.itemCards ?? []);

        setMenuItems(items);

        const filteredCategories = regularCards
        ?.filter((c:CategoryCard) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setCategories(filteredCategories); 
    }

    return {resInfo, menuItems , categories};

}

export default useRestaurantMenu;