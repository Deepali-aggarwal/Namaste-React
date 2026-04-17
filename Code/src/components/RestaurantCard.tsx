import { useContext } from "react";
import { CDN_URL } from "../utils/Constant";
import UserContext from "../utils/UserContext";

interface SLA {
  deliveryTime: number;
}
interface RestaurantData {
    id: string,
    name: string;
    cuisines: string[];
    avgRating: number;
    costForTwo: string;
    cloudinaryImageId: string;
    sla: SLA;
    
}
interface RestaurantCardProps {
    resData?:{
        info: RestaurantData;
    } 
};

const RestaurantCard = (props : RestaurantCardProps) => {
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);
    const {
        cloudinaryImageId, 
        name, 
        cuisines,
        avgRating, 
        costForTwo, 
        sla,
    } = resData ?. info || {};
    return (
        <div className="res-card m-4 p-4 w-[200] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img 
            className="res-logo rounded-lg"
                alt={name}
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} mins</h4>
            <h4 className="font-bold"> User: {loggedInUser} </h4>
        </div>
    )
}

// HIGHER ORDER COMPONENT
export const withPromotedLabel = (RestaurantCard : React.ComponentType<RestaurantCardProps>) => {
    return (props: RestaurantCardProps) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;