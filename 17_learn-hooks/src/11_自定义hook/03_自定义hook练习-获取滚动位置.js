import React, { useState, useEffect } from "react";
import useScrollPosition from "../hooks/scrolll-position-hook";

export default function CustomScrollPositionHook() {
  const scrollPosition = useScrollPosition();

  return (
    <div style={{ padding: "1000px 0" }}>
      <h2 style={{ position: "fixed", top: 0, left: 0 }}>{scrollPosition}</h2>
    </div>
  );
}
