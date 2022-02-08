import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import { Card, Avatar } from "antd";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
    constructor() {
        super();
        this.state = {
            isShow: true,
        };
    }
    render() {
        const { isShow } = this.state;
        return (
            <div>
                <CSSTransition
                    in={isShow}
                    timeout={1000}
                    classNames="card"
                    unmountOnExit={true}
                    onEnter={(el) => {
                        console.log(el);
                    }}
                    appear
                >
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={
                                <Avatar src="https://joeschmoe.io/api/v1/random" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </CSSTransition>

                <button
                    onClick={(e) => {
                        this.setState({ isShow: !isShow });
                    }}
                >
                    显示/隐藏
                </button>
            </div>
        );
    }
}
