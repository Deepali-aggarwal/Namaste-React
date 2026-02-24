import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className = "Logo-container">
                <img className= "Logo" src= "https://dynamic.brandcrowd.com/asset/logo/4dcc8fb9-fa3d-4acf-8bec-29cda36c7c50/logo-search-grid-2x?logoTemplateVersion=1&v=639059616780900000&layout=auto-1-1" alt="Logo" />
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

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container"></div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
        </div>
    )
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<AppLayout />);