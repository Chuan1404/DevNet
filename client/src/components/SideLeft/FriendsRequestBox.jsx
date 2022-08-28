import { Divider, Typography } from "@mui/material";
import React from "react";
import FriendRequest from "./FriendRequest";

export default function FriendsRequestBox(props) {
  return (
    <div className="friendsRequestBox">
      <Typography variant="h6" marginBottom={2}>
        {props.title}
      </Typography>
      <Divider />
      <div className="friendsRequestBox__list">
        <FriendRequest />
        <FriendRequest />
        <FriendRequest />
      </div>
    </div>
  );
}
