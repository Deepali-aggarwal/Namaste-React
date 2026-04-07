import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

type RestaurantData = {
    info: {
        id: string,
        name: string;
        cuisines: string[];
        avgRating: number;
        costForTwo: string;
        cloudinaryImageId: string;
        sla : {
            deliveryTime: number;
        }    
    };    
}

const Body = () => {

    // const [listofRestaurants, setlistofRestaurants] = useState<RestaurantData[]>([
    //     {
    //         "info": {
    //             "id": "605415",
    //             "name": "Dum Safar Biryani",
    //             "cloudinaryImageId": "l9pbure8tbootzc7utmn",
    //              "costForTwo": "₹500 for two",
    //             "cuisines": [
    //                 "Biryani",
    //                 "Kebabs",
    //                 "North Indian",
    //                 "Barbecue"
    //             ],
    //             "avgRating": 4,
    //             "deliveryTime": 43,
            
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "605416",
    //             "name": "Dum Safar Biryani",
    //             "cloudinaryImageId": "l9pbure8tbootzc7utmn",
    //              "costForTwo": "₹500 for two",
    //             "cuisines": [
    //                 "Biryani",
    //                 "Kebabs",
    //                 "North Indian",
    //                 "Barbecue"
    //             ],
    //             "avgRating": 3.9,
    //             "deliveryTime": 43,
            
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "605417",
    //             "name": "Dum Safar Biryani",
    //             "cloudinaryImageId": "l9pbure8tbootzc7utmn",
    //              "costForTwo": "₹500 for two",
    //             "cuisines": [
    //                 "Biryani",
    //                 "Kebabs",
    //                 "North Indian",
    //                 "Barbecue"
    //             ],
    //             "avgRating": 4.6,
    //             "deliveryTime": 43,
            
    //         }
    //     },    
    // ])
    const [listofRestaurants, setlistofRestaurants] = useState<RestaurantData[]>([]);

    const [filteredRestaurant , setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText] = useState("");
    console.log("Body Render");

    // Whenever state variable update, react triggers a reconciliation cycle(re- renders the components)

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        const restaurants = json?.data?.cards?.find(
        (card: any) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;


        console.log(json);
        setlistofRestaurants(restaurants || []);
        setfilteredRestaurant(restaurants || []);
    }
    return listofRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="Search">
                    <input type="text" className="search-box" value={searchText} onChange = {(e) => {
                        setsearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        //Filter the restaurant cards and update the UI
                        // searchText

                        const filteredRestaurant = listofRestaurants.filter((res) => (res.info.name.toLowerCase().includes(searchText.toLowerCase())));

                        setfilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                        const filteredlist = listofRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                    setlistofRestaurants(filteredlist);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant.info}
                    />
                ))}
            </div>  
        </div>
    )
}

export default Body;