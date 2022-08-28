import React from "react";
import { StatusCreator, Status } from "../../components";

export default function Homepage() {
  return (
    <div id="homepage" className="page">
      <StatusCreator />

      <Status />
      <Status />
      <Status />
      <Status />
    </div>
  );
}
