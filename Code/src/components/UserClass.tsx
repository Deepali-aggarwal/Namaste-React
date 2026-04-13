import React from "react";

export interface UserClassProps{
    name: string;
}
interface UserClassState {
    count: number;
    count2: number;
    userInfo : {
        name: string;
        location : string;
        bio: string;
    }
}

class UserClass extends React.Component<UserClassProps, UserClassState>{
    timer?: ReturnType<typeof setInterval>;

    constructor(props: UserClassProps){
        super(props); //calling parent of constructor
        console.log(props);

        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Default",
                bio : "xyz"
            }
        }
        console.log("child constructor");
    }

    async componentDidMount() {

        this.timer = setInterval(() => {
            console.log("NAMASTE REACT op")
        })
        console.log("child componentdidmount ")

        const data = await fetch("https://api.github.com/users/Deepali-aggarwal");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })
    }
    componentDidUpdate(): void{
        console.log("component did update");
    }
    componentWillUnmount(): void {
        clearInterval(this.timer);  
        console.log("componenet will unmount")
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
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Bio: {this.state.userInfo.bio}</h4>

            </div>
        )
    }
}

export default UserClass;