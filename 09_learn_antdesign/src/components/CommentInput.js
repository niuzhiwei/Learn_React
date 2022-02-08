import React, { PureComponent } from "react";
import { Input, Button, Space } from "antd";
import moment from "moment";
const { TextArea } = Input;

export default class CommentInput extends PureComponent {
    constructor() {
        super();
        this.state = {
            content: "",
        };
    }
    render() {
        return (
            <Space direction="vertical">
                <TextArea
                    rows={4}
                    cols={30}
                    value={this.state.content}
                    onChange={(e) => this.handleChange(e)}
                />
                <Button type="primary" onClick={() => this.addComment()}>
                    添加评论
                </Button>
            </Space>
        );
    }
    handleChange(e) {
        this.setState({
            content: e.target.value,
        });
    }
    addComment() {
        const commentInfo = {
            id: moment().valueOf(),
            avatar: "https://img0.baidu.com/it/u=3295519997,145386602&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=450",
            nickname: "niuniu",
            datetime: moment(),
            content: this.state.content,
        };
        this.props.submitComment(commentInfo);
        this.setState({
            content: "",
        });
    }
}
