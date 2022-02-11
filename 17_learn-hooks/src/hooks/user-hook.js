import React, { useContext } from "react";
import { UserContext, TokenContext } from "../App";

export default function useUserContext() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);
  return [user, token];
}
