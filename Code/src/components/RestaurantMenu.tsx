import {useState} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MenuItemCard } from "../types/menu";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL } from "../utils/Constant";

interface CategoryCard {
  card?: {
    card?: {
      title?: string;
      itemCards?: MenuItemCard[];
    };
  };
}

const RestaurantMenu: React.FC = () => {
    const { resId } = useParams<{ resId: string }>();

    const { resInfo , menuItems , categories} = useRestaurantMenu(resId!);

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
    //   const resName = resInfo?.cards?.[2]?.card?.info?.name;
    //   const menuItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards

    if(!resInfo) return <Shimmer/>;
    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo;


    return (
        <div className="text-center max-w-6xl mx-auto p-6 ">

            <h1 className="font-extrabold my-6 text-4xl text-gray-800">
            {name}
            </h1>

            <img
            className="mx-auto w-48 h-48 object-cover rounded-xl shadow-md mb-4"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
            />

            <p className="font-semibold text-lg text-gray-700">
            {cuisines?.join(", ")}
            </p>

            <p className="text-gray-600 mt-1">
            {costForTwoMessage}
            </p>

            <h2 className="mt-6 text-2xl font-bold text-gray-800 border-b pb-2">
            Menu
            </h2>
            <div>
                {categories.map((category)=> (
                    <RestaurantCategory 
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                    />
                ))}
            </div>
            {/* <ul>
                {itemCards?.map((item: any, index: number) => (
                    <li key={`${item.card.info.id}-${index}`}>
                        {item.card.info.name} - {'Rs '}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default RestaurantMenu;