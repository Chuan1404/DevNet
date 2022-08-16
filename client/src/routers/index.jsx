import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages";

export default function Routers() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
    </Routes>
  );
}
