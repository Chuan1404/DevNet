import { Avatar, Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

export default function Author() {
  return (
    <Button fullWidth>
      <Avatar sx={{ width: 60, height: 60 }}>Â</Avatar>

      <Box marginX={"auto"} paddingY={1}>
        <Typography variant="h6" component={"h4"}>
          theanh28
        </Typography>

        <Typography variant="body-2">detail</Typography>
      </Box>
    </Button>
  );
}
