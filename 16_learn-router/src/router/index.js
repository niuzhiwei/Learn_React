import Home from "../pages/home";
import About, { History, Cultrue, Contact } from "../pages/about";
import Profile from "../pages/profile";
import User from "../pages/user";
import Login from "../pages/login";

const routes = [
    { path: "/", exact: true, component: Home },
    {
        path: "/about",
        component: About,
        routes: [
            { path: "/about", exact: true, component: History },
            { path: "/about/culture", component: Cultrue },
            { path: "/about/contact", component: Contact },
        ],
    },
    { path: "/profile", component: Profile },
    { path: "/user", component: User },
    { path: "/login", component: Login },
];

export default routes;
