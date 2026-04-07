import { useState } from "react";

interface UserProps {
    name : string;
}

const User = (props : UserProps) => {
    const [count] = useState(0);
    const [count2] = useState(0);
    return <div className="user-card">
        <h1>count= {count}</h1>
        <h1>count2= {count2}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: deepali1234@gmail.com</h4>
    </div>
}

export default User;