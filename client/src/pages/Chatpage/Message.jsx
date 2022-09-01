import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";

export default function Message({ currentUser, content }) {
  const theme = useTheme();
  console.log(theme);
  const messageStyle = {};
  return (
    <Box
      className="message"
      bgcolor={currentUser ? theme.palette.primary.main : "#E4E6EB"}
      width="max-content"
      maxWidth={400}
      padding={2}
      borderRadius={10}
      color={currentUser ? "white" : "black"}
      marginY={1}
      marginLeft={currentUser && "auto"}
    >
      {content}
    </Box>
  );
}
