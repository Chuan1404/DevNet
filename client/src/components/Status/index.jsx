import { Avatar, Divider, IconButton, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { Favorite, Reply, ChatBubbleOutline } from "@mui/icons-material";
import React from "react";

export default function Status() {
  return (
    <Box bgcolor={"white"} marginY={2} paddingY={2} borderRadius="10px">
      <Container>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ width: 60, height: 60 }}>Â</Avatar>

          {/* content */}
          <Box>
            <Box className="status__info">
              <Typography variant="h6" component="p">
                Ân chu
              </Typography>
              <Typography>detail</Typography>
            </Box>
            <Box mt={3} className="status__content">
              <Typography variant="body1">
                At what age are you planning to retire? While the average retirement age in
                Singapore is 62, it’s increasingly common to hear of millennials who want to retire
                by their 40s, even before they hit 35. This is thanks to a fast-growing trend called
                FIRE (Financial Independence, Retire Early), which encourages young Singaporeans to
                save aggressively and retire early. A 2021 survey found that among respondents aged
                between 18 and 35, 59% felt having enough funds to retire early is a top indicator
                of material success. With sufficient savings, adherents of FIRE can enjoy a decent
                standard of living while pursuing their interests. However, for many, it might take
                away from enjoying life at present while becoming stingy. Would you like to retire
                early even if it's at the expense of some comfort right now?
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Divider sx={{ margin: "10px 0" }} />

        <Stack direction={"row"} justifyContent="space-between">
          <Stack direction={"row"} alignItems="center">
            <IconButton>
              <Favorite />
            </IconButton>
            <Typography variant="body2">10</Typography>
          </Stack>

          <Stack direction={"row"} alignItems="center">
            <IconButton>
              <ChatBubbleOutline />
            </IconButton>
            <Typography variant="body2">20</Typography>
          </Stack>

          <IconButton>
            <Reply />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
