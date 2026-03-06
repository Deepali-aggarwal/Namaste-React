import { LOGO_URL } from "../utils/Constant";

const Header = () => {
    return (
        <div className="header">
            <div className = "Logo-container">
                <img className= "Logo" src= { LOGO_URL}alt="Logo" />
            </div>
            <div className = "Nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;