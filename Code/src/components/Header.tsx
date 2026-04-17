import { LOGO_URL } from "../utils/Constant";
import { useState , useContext } from "react";
import { Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login"); 

    const onlineStatus= useOnlineStatus();

    const data = useContext(UserContext);

    // if no dependency array => useeffect is called on every render
    //if dependency array is empty = [] => useEffect is called on initial render(just once)
    // if dependency array os [btnNameReact] => called everytime btnNameReact is updated

    // useEffect(() => {
    //     console.log("useEffect Called")
    // }, [btnNameReact])
    return (
        <div className="flex justify-between shadow-lg m-3">
            <div className = "Logo-container">
                <img className= "w-36" src= { LOGO_URL}alt="Logo" />
            </div>
            <div className = "flex items-center ">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus ? "✅" : "❌"}
                    </li>
                    <li className="px-4"> <Link to= "/">Home</Link></li>
                    <li className="px-4">
                        <Link to= "/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button 
                        className = "Login px-4" onClick={() => {
                            btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                        }}>
                        {btnNameReact}

                    </button>
                    <li className="px-4 font-bold">{data.loggedInUser} </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;