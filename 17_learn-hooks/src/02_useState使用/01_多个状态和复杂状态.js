import React, { useState } from "react";

export default function MultiHookState() {
    const [counter, setCounter] = useState(0);
    const [age, setAge] = useState(18);
    const [friends, setFriends] = useState(["zhu", "niu"]);
    const [students, setStudents] = useState([
        { id: 110, name: "niu", age: 18 },
        { id: 111, name: "zhu", age: 15 },
        { id: 112, name: "mao", age: 12 },
    ]);

    const addFriend = () => {
        setFriends([...friends, "mao"]);
    };
    const addAge = (i) => {
        const newStudents = [...students];
        newStudents[i].age += 1;
        setStudents(newStudents);
    };
    return (
        <div>
            <h2>当前计数:{counter}</h2>
            <h2>我的年龄：{age}</h2>
            <ul>
                {friends.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <button onClick={addFriend}>添加朋友</button>
            <h2>学生列表</h2>
            <ul>
                {students.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <span>姓名：{item.name} </span>
                            <span>年龄：{item.age}</span>
                            <button onClick={() => addAge(index)}>
                                年龄+1
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
