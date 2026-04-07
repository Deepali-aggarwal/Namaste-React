import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

interface RestaurantInfo {
  name: string;
  costForTwoMessage: string;
  cuisines: string[];
  cloudinaryImageId: string;
}

const RestaurantMenu = () => {
    const { resId } = useParams<{ resId: string }>();
    const [resInfo , setResInfo] = useState<RestaurantInfo | null>(null);
    useEffect(() => {
        if(resId){
            fetchMenu();
        }
    }, [resId]);

    console.log("resId:", resId);

    const fetchMenu = async() => {

        const data = await fetch (
            "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=" + resId
        )
        const json = await data.json();
        console.log(json);
        setResInfo(json?.data?.cards[2]?.card?.card?.info);
    } 

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardsfroupMap?.REGULAR?.cards[1]?.card?.card[0]?.dish

    return !resInfo ? <Shimmer /> : (
        <div className= "Menu">

            <h1>{resInfo.name}</h1>
            <h3>{resInfo.cuisines.join(", ")}</h3>
            <h4>{resInfo.costForTwoMessage}</h4>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Thumps up</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;