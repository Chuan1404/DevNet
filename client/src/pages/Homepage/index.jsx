import { Box } from "@mui/material";
import React from "react";
import { StatusCreator, Status } from "../../components";

export default function Homepage() {
  return (
    <Box id="homepage" className="page">
      <StatusCreator />

      <Status />
      <Status />
      <Status />
      <Status />
    </Box>
  );
}
