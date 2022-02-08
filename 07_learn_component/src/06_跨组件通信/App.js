import React, { Component } from "react";

const UserContext = React.createContext({
    nickname: "niu",
    level: 99,
});

class ProfileHeader extends Component {
    render() {
        console.log(this.context);
        return (
            <div>
                <h2>用户昵称:{this.context.nickname}</h2>
                <h2>用户等级:{this.context.level}</h2>
            </div>
        );
    }
}

ProfileHeader.contextType = UserContext;

function Profile() {
    return (
        <div>
            <ProfileHeader></ProfileHeader>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    );
}

export default class App extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={{ nickname: "zhu", level: 100 }}>
                    <Profile></Profile>
                </UserContext.Provider>
            </div>
        );
    }
}
