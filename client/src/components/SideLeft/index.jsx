import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import ChatList from "../../pages/Chatpage/ChatList";
import FriendsRequestBox from "./FriendsRequestBox";

export default function SideLeft() {
  const { pathname } = useLocation();

  return (
    <Box className="sideLeft">
      <Container maxWidth="xl">
        {pathname != "/message" ? (
          <>
            <FriendsRequestBox title="Lời mời kết bạn" />
            <FriendsRequestBox title="Gợi ý kết bạn" />
          </>
        ) : (
          <ChatList />
        )}
      </Container>
    </Box>
  );
}
