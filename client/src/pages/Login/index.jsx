import { Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function Login() {
  const inputStyle = {
    margin: "10px auto",
    width: "100%",
  };

  return (
    <Box bgcolor="white" padding={2} borderRadius={2}>
      <Typography variant="h4" textAlign={"center"}>
        Đăng nhập
      </Typography>

      <Stack maxWidth={400} width="100%" marginX={"auto"} component="form" method="post">
        <TextField name="email" type={"email"} label="Email" sx={inputStyle} />
        <br />
        <TextField name="password" type={"password"} label="Password" sx={inputStyle} />

        <Button variant="contained" sx={{ margin: "10px 0" }} type="submit">
          Đăng Nhập
        </Button>
        <Button variant="outlined" sx={{ margin: "10px 0" }}>
          Đăng Kí
        </Button>

        <Box marginLeft={"auto"}>
          <Typography>Quên mật khẩu</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
