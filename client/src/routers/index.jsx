import React from "react";
import { Routes, Route } from "react-router-dom";
import { Chatpage, Homepage, Login } from "../pages";

export default function Routers() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/message" element={<Chatpage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
