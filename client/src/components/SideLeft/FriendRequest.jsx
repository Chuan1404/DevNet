import { Avatar, Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function FriendRequest(props) {
  return (
    <div className="friendRequest">
      <Stack direction="row" alignItems={"center"} spacing={2} marginY={2}>
        <Avatar
          sx={{ width: 60, height: 60 }}
          src="https://img.freepik.com/free-photo/cheerful-beautiful-young-asian-woman-feeling-happy-smiling-camera-while-traveling-chinatown-beijing-china_7861-1341.jpg?w=1060&t=st=1661008650~exp=1661009250~hmac=0d1a8ad61ae71be0172b70daf240f3bae507c215cfeff8f0439ada91bd87a525"
        />

        <Box>
          <Typography variant="body1" marginBottom={1}>
            Ân Chu
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="contained">Thêm</Button>
            <Button variant="outlined">Xóa, gỡ</Button>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
}
