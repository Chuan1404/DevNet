import React from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { authService } from "../../service";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const inputStyle = {
    margin: "10px auto",
    width: "100%",
  };
  const onSubmit = async (form) => {
    const data = await authService.login(form);
    console.log(data);
  };
  return (
    <Box bgcolor="white" padding={2} borderRadius={2}>
      <Typography variant="h4" textAlign={"center"}>
        Đăng nhập
      </Typography>

      <Stack
        maxWidth={400}
        width="100%"
        marginX={"auto"}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField {...register("email")} type={"email"} label="Email" sx={inputStyle} />
        <br />
        <TextField {...register("password")} type={"password"} label="Password" sx={inputStyle} />

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
