import React, { useContext } from "react";
import { UserContext, ThemeContext } from "../App";

export default function ContextHookDemo() {
    const user = useContext(UserContext);
    const theme = useContext(ThemeContext);
    console.log(user);
    console.log(theme);
    return <div>ContextHookDemo</div>;
}
