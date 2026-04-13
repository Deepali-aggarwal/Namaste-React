import { LOGO_URL } from "../utils/Constant";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login"); 

    const onlineStatus= useOnlineStatus();

    // if no dependency array => useeffect is called on every render
    //if dependency array is empty = [] => useEffect is called on initial render(just once)
    // if dependency array os [btnNameReact] => called everytime btnNameReact is updated

    useEffect(() => {
        console.log("useEffect Called")
    }, [btnNameReact])
    return (
        <div className="header">
            <div className = "Logo-container">
                <img className= "Logo" src= { LOGO_URL}alt="Logo" />
            </div>
            <div className = "Nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "✅" : "❌"}
                    </li>
                    <li> <Link to= "/">Home</Link></li>
                    <li>
                        <Link to= "/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button 
                        className = "Login" onClick={() => {
                            btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                        }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;