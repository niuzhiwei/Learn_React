import React, { PureComponent } from "react";
import CommentInput from "components/CommentInput";
import CommentItem from "components/CommentItem";

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            commentList: [],
        };
    }
    render() {
        return (
            <div style={{ width: "500px", padding: "20px" }}>
                {this.state.commentList.length > 0 &&
                    this.state.commentList.map((item, index) => {
                        return (
                            <CommentItem
                                key={item.id}
                                comment={item}
                                removeItem={() => this.removeItem(index)}
                            ></CommentItem>
                        );
                    })}
                <CommentInput
                    submitComment={(info) => this.submitComment(info)}
                ></CommentInput>
            </div>
        );
    }
    submitComment(info) {
        this.setState({
            commentList: [...this.state.commentList, info],
        });
    }
    removeItem(index) {
        const newList = [...this.state.commentList];
        newList.splice(index, 1);
        this.setState({
            commentList: newList,
        });
    }
}
