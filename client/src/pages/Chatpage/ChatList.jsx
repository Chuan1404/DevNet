import { Divider, Typography } from "@mui/material";
import React from "react";
import Author from "./Author";

export default function ChatList() {
  return (
    <div>
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
    </div>
  );
}
