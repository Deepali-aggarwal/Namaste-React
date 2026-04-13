import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/Constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MenuItemCard } from "../types/menu";

// interface CategoryCard {
//   card?: {
//     card?: {
//       title?: string;
//       itemCards?: MenuItemCard[];
//     };
//   };
// }

const RestaurantMenu = () => {
    const { resId } = useParams<{ resId: string }>();

    const { resInfo , menuItems  } = useRestaurantMenu(resId!);

    // useEffect(() => {
    //     if(resId){
    //         fetchMenu();
    //     }
    // }, [resId]);

    // console.log("resId:", resId);

    // const fetchMenu = async() => {

    //     const data = await fetch (
    //         MENU_API + resId
    //     )
    //     const json = await data.json();
    //     console.log(json);

    // } 

    const regularCards = menuItems?.cards
        ?.find((c: any) => c.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const itemCards = regularCards
        ?.map((c: any) => c.card?.card?.itemCards)
        ?.flat()
        ?.filter(Boolean);

    console.log(itemCards);


    return !resInfo ? <Shimmer /> : (
        <div className= "Menu">

            <h1>{resInfo.name}</h1>
            <h3>{resInfo.cuisines.join(", ")}</h3>
            <h4>{resInfo.costForTwoMessage}</h4>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item: any, index: Number) => (
                    <li key={`${item.card.info.id}-${index}`}>
                        {item.card.info.name} - {'Rs '}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;