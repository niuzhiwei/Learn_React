import HYDiscover from "../pages/discover";
import HYFirend from "../pages/firend";
import HYMine from "../pages/mime";

const routes = [
    { path: "/", exact: true, component: HYDiscover },
    { path: "/friend", component: HYFirend },
    { path: "/mine", component: HYMine },
];

export default routes;
