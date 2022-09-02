import { Divider, Typography, Box } from "@mui/material";
import React from "react";
import Author from "./Author";

export default function ChatList() {
  return (
    <Box bgcolor="white" padding={2} borderRadius={2}>
      <Typography variant="h5">Tin nhắn</Typography>

      <Divider sx={{ margin: "10px 0" }} />

      <Author />
      <Author />
      <Author />
      <Author />
      <Author />
      <Author />
      <Author />
      <Author />
    </Box>
  );
}
