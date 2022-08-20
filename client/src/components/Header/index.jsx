import { ModeComment, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Autocomplete,
  Avatar,
  Badge,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Header() {
  let options = [
    {
      label: "HTML",
      value: 0,
    },
    {
      label: "CSS",
      value: 1,
    },
    {
      label: "JS",
      value: 2,
    },
  ];

  return (
    <AppBar id="header" sx={{ background: "#fff" }}>
      <Toolbar>
        <Typography variant="h3" component="h1" color="primary" marginRight={2}>
          Devnet
        </Typography>

        <Autocomplete
          sx={{ width: 500, margin: "auto" }}
          options={options}
          renderInput={(params) => <TextField {...params} placeholder="Search"></TextField>}
        />

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large" aria-label="show 4 new mails" color="secondary">
            <Badge badgeContent={4} color="error">
              <ModeComment />
            </Badge>
          </IconButton>
          <IconButton size="large" aria-label="show 17 new notifications" color="secondary">
            <Badge badgeContent={17} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="secondary"
          >
            <Avatar src="https://img.freepik.com/free-photo/cheerful-beautiful-young-asian-woman-feeling-happy-smiling-camera-while-traveling-chinatown-beijing-china_7861-1341.jpg?w=1060&t=st=1661008650~exp=1661009250~hmac=0d1a8ad61ae71be0172b70daf240f3bae507c215cfeff8f0439ada91bd87a525"></Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
