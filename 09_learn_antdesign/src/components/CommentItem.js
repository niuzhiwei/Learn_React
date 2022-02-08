import React, { PureComponent } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default class CommentItem extends PureComponent {
    render() {
        const { avatar, nickname, datetime, content } = this.props.comment;
        return (
            <Comment
                author={<a>{nickname}</a>}
                avatar={<Avatar src={avatar} alt={nickname} />}
                content={<p>{content}</p>}
                datetime={
                    <Tooltip title={datetime.format("YYYY-MM-DD HH:mm:ss")}>
                        <span>{datetime.fromNow()}</span>
                    </Tooltip>
                }
                actions={[
                    <span onClick={() => this.removeItem()}>
                        <DeleteOutlined />
                        删除评论
                    </span>,
                ]}
            />
        );
    }
    removeItem() {
        this.props.removeItem();
    }
}
