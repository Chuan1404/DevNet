import { Box, Divider, Input, Stack } from "@mui/material";
import React from "react";
import Author from "./Author";

export default function Chatpage() {
  return (
    <Stack id="chatpage" borderRadius={2} bgcolor={"white"}>
      <Box>
        <Author />
      </Box>

      <Divider />

      <Box className="chatpage__message"></Box>
      <Box className="chatpage__input">
        <Input />
      </Box>
    </Stack>
  );
}
