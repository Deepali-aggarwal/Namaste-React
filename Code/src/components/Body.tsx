import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {console.log("button clicked")}}>Top rated Restaurants</button>
            </div>
            <div className="res-container">
                {resList.map((restaurant) => (
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