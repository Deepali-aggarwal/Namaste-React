import React , {lazy , Suspense , useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserClass from "./components/UserClass";


const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
    const [userName , setUserName] = useState("");
    useEffect(() => {
        const data = {
            name: " deepali"
        }
        setUserName(data.name);
    },[])

    return (
        <UserContext.Provider value = {{loggedInUser: userName , setUserName}}>
            <div className="app">
                {/* <UserContext.Provider value={{loggedInUser : "Elon Musk"}}> */}
                    <Header />
                {/* </UserContext.Provider> */}

                <Outlet />
            </div>
        </UserContext.Provider>
    )
};



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId", //dynamically 
                element: <RestaurantMenu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router ={appRouter} />);