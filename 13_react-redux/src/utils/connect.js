import React, { PureComponent } from "react";
import { storeContext } from "./context";

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props);

        this.state = {
          storeState: mapStateToProps(context.getState()),
        };
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState()),
          });
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          ></WrappedComponent>
        );
      }
    }
    EnhanceComponent.contextType = storeContext;
    return EnhanceComponent;
  };
}
