import { Grid, Container } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <div id="header">
      <Container maxWidth={"xl"}>
        <Grid container>
          {/* header -- logo and search bar */}
          <Grid item xs={3}>
            <div className="header__logo">logo</div>
            <div className="header__search">search</div>
          </Grid>

          {/* header -- tags */}
          <Grid item xs={6}>
            <div className="header__tags">tags</div>
          </Grid>

          {/* header -- account */}
          <Grid item xs={3}>
            <div className="header__account">account</div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
