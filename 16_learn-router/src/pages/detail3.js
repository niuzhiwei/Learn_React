import React, { PureComponent } from "react";

export default class Detail3 extends PureComponent {
  render() {
    console.log(this.props.location);
    return (
      <div>
        <h2>Detail3</h2>
      </div>
    );
  }
}
