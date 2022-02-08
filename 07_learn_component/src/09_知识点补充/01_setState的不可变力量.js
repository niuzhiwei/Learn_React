import React, { Component, PureComponent } from "react";

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            friends: [
                { name: "zhu", age: 11 },
                { name: "gezi", age: 12 },
                { name: "gougou", age: 13 },
            ],
        };
    }
    render() {
        return (
            <div>
                <h2>朋友列表</h2>
                <ul>
                    {this.state.friends.map((item, index) => {
                        return (
                            <li key={index}>
                                <div>姓名:{item.name}</div>
                                <div>
                                    年龄:{item.age}
                                    <button
                                        onClick={() => this.incremntAge(index)}
                                    >
                                        年龄+1
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <button onClick={() => this.insertData()}>添加数据</button>
            </div>
        );
    }
    incremntAge(index) {
        const newFriends = [...this.state.friends];
        newFriends[index].age += 1;

        this.setState({
            friends: newFriends,
        });
    }
    insertData() {
        //与shouldcomponentupdate有关，前后的state进行比较
        this.setState({
            friends: [...this.state.friends, { name: "mao", age: 100 }],
        });
    }
}
