import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import { useState , useEffect , useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

interface RestaurantData {
        id: string,
        name: string;
        cuisines: string[];
        avgRating: number;
        costForTwo: string;
        cloudinaryImageId: string;
        sla : {
            deliveryTime: number;
        };
        veg: string;      
}

interface Restaurant {
  info: RestaurantData;
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
    const [listofRestaurants, setlistofRestaurants] = useState<Restaurant[]>([]);

    const [filteredRestaurant , setfilteredRestaurant] = useState<Restaurant[]>([]);

    const [searchText, setsearchText] = useState<string>("");
    console.log("Body Render");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    // Whenever state variable update, react triggers a reconciliation cycle(re- renders the components)

    useEffect(() => {
        fetchData();
    }, []); 

    const {loggedInUser , setUserName} = useContext(UserContext);

    const fetchData = async () => {
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // const restaurants = json?.data?.cards?.find(
        // (card: any) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // )?.card?.card?.gridElements?.infoWithStyle?.restaurants;


        console.log(json);
        setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1> looks like you're offline! Please check your network connection</h1>
    if(listofRestaurants.length === 0){
        return <Shimmer/>
    };



    return (
        <div className="body">
            <div className="filter flex">
                <div className="Search m-4 p-4 flex items-center">
                    <input 
                    type="text" 
                    className="border border-solid border-black" 
                    value={searchText} onChange = {(e) => {
                        setsearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-1 bg-green-300 m-2 rounded-lg" onClick={() => {
                        //Filter the restaurant cards and update the UI
                        // searchText

                        const filteredRestaurant = listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setfilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>
                <div className="Search m-4 p-4 flex items-center">
                    <label>Username: </label>
                    <input
                    className="border border-black m-2 " value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-blue-300 rounded-lg" onClick={() => {
                        const filteredlist = listofRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setlistofRestaurants(filteredlist);
                    }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>

            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((res) => (
                    <Link 
                    key={res.info.id}
                    to={"/restaurants/" + res.info.id}>{res.info.veg ? (<RestaurantCardPromoted resData={ res} />): ( <RestaurantCard
                        resData={res} />)}
                        {/** if the restaurant is promoted then add a promoted label to it */}
                   </Link>
                ))}
            </div>  
        </div>
    )
}

export default Body;