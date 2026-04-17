import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { UserClassProps } from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component<UserClassProps> {
    constructor(props : UserClassProps) {
        super(props);
        console.log("Parent constructor");
    }
    componentDidMount(): void {
        console.log("Parent componedidmount");
    }
    render(){
        console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                <div>
                    LoggedInUser
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                            <h1 className="text-xl font-bold">{loggedInUser} </h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name = {"Deepali (function)"}/>
            </div>
        );
    }

}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <UserClass name = {"Deepali (function)"}/>
//         </div>
//     );
// };
export default About;