import React, { PureComponent } from "react";

export default class Detail extends PureComponent {
  render() {
    console.log(this.props.match);
    return (
      <div>
        <h2>Detail:{this.props.match.params.id}</h2>
      </div>
    );
  }
}
