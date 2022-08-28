import { Avatar, Container, Stack, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

export default function StatusCreator() {
  return (
    <div className="statusCreator" style={{ background: "white", borderRadius: "10px" }}>
      <Container maxWidth="xl">
        <Stack direction={"row"} alignItems="center">
          <Avatar src="https://img.freepik.com/free-photo/cheerful-beautiful-young-asian-woman-feeling-happy-smiling-camera-while-traveling-chinatown-beijing-china_7861-1341.jpg?w=1060&t=st=1661008650~exp=1661009250~hmac=0d1a8ad61ae71be0172b70daf240f3bae507c215cfeff8f0439ada91bd87a525" />
          <MyTextField
            sx={{ margin: "10px", width: "100%", cursor: "pointer" }}
            size="small"
            variant="filled"
            label="Write something here..."
            aria-readonly
          />
        </Stack>
      </Container>
    </div>
  );
}

const MyTextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 50px;
    pointer-events: none;
    &::before {
      display: none;
    }
  }
`;
