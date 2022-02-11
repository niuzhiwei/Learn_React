import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/local-store-hook";

export default function LocalStorageHook() {
  const [name, setName] = useLocalStorage("name");
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setName("bbb")}>设置Name</button>
    </div>
  );
}
