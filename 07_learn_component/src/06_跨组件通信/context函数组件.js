import React, { Component } from "react";

const UserContext = React.createContext({
    nickname: "niu",
    level: 99,
});

function ProfileHeader() {
    return (
        <UserContext.Consumer>
            {(value) => {
                return (
                    <div>
                        <h2>用户昵称:{value.nickname}</h2>
                        <h2>用户等级:{value.level}</h2>
                    </div>
                );
            }}
        </UserContext.Consumer>
    );
}

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
