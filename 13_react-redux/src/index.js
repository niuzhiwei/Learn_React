import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { StoreContext } from "./utils/context";
import store from "./store";
import { Provider } from "react-redux";

// ReactDOM.render(
//     <StoreContext.Provider value={store}>
//         <App />
//     </StoreContext.Provider>,
//     document.getElementById("root")
// );
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
