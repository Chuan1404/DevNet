import React from "react";
import { Routes, Route } from "react-router-dom";
import { Chatpage, Homepage } from "../pages";

export default function Routers() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/message" element={<Chatpage />} />
    </Routes>
  );
}
