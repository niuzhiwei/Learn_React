import React, { useContext } from "react";
import { UserContext, TokenContext } from "../App";
import useUserContext from "../hooks/user-hook";

export default function CustomContextShareHook() {
  const [user, token] = useUserContext();
  console.log(user);
  console.log(token);
  return (
    <div>
      <h2>CustomContextShareHook</h2>
    </div>
  );
}
