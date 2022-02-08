import React, { PureComponent } from "react";
import axios from "axios";

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
        axios({
            url: "https://httpbin.org/get",
            params: {
                name: "niu",
                age: 18,
            },
            method: "get",
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });

        axios({
            url: "https://httpbin.org/post",
            data: {
                name: "niu",
                age: 18,
            },
            method: "post",
        }).then((res) => {
            console.log(res);
        });

        const instance1 = axios.create({
            baseURL: "",
            timeout: 5000,
        });
        const instance2 = axios.create({
            baseURL: "",
            timeout: 3000,
        });
    }

    render() {
        return <div>1</div>;
    }
}
