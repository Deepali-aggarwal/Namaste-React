import React from "react";

export interface UserClassProps{
    name: string;
}
interface UserClassState {
    count: number;
    count2: number;
}

class UserClass extends React.Component<UserClassProps, UserClassState>{

    constructor(props: UserClassProps){
        super(props); //calling parent of constructor
        console.log(props);

        this.state = {
            count: 0,
            count2: 2,
        }
        console.log("child constructor");
    }

    componentDidMount(): void {
        console.log("child componentdidmount")
    }
    render(){

        console.log("child render");
        return (
            <div className="user-card">
                <h1>count: {this.state.count}</h1>
                <h1>count2: {this.state.count2}</h1>
                <button onClick={() => {
                    //NEVER UPDATE STATE VARIABLE DIRECTLY
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    })

                }}>Count Increase</button>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Delhi</h3>
                <h4>Contact: deepali1234@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;