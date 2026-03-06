import { CDN_URL } from "../utils/Constant";

type RestaurantData = {
    id: string,
    name: string;
    cuisines: string[];
    avgRating: number;
    costForTwo: string;
    cloudinaryImageId: string;
    sla: {
        deliveryTime: number;
    };
}
type RestaurantCardProps = {
    resData: RestaurantData;
};
export type RestaurantApiItem = {
  info: RestaurantData;
};


export const RestaurantCard = ({resData} : RestaurantCardProps) => {
    const {
        cloudinaryImageId, 
        name, 
        cuisines,
        avgRating, 
        costForTwo, 
        sla: {deliveryTime}
    } = resData;
    return (
        <div className="res-card">
            <img 
            className="res-logo"
                alt={name}
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;