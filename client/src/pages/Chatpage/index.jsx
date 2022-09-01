import { Box, Divider, Input, Stack, TextField } from "@mui/material";
import React from "react";
import Author from "./Author";
import Message from "./Message";

export default function Chatpage() {
  return (
    <Stack id="chatpage" borderRadius={2} bgcolor={"white"}>
      <Box>
        <Author />
      </Box>

      <Divider />

      <Stack padding={1} sx={{ flex: 1 }}>
        <Stack className="chatpage__message" sx={{ flex: 1 }}>
          <Message currentUser={false} content="Hello An Chu" />
          <Message currentUser={true} content="Hi, What's up" />
        </Stack>
        <Box className="chatpage__input">
          <TextField fullWidth variant="outlined" label="Text" />
        </Box>
      </Stack>
    </Stack>
  );
}
