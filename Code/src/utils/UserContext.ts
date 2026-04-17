import { createContext } from "react";

interface UserContextType{
    loggedInUser: string;
    setUserName: (name: string) => void;
}

const UserContext = createContext<UserContextType>({
    loggedInUser: "Default User",
    setUserName: () => {}
});

export default UserContext;