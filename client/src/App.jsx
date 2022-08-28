import { createTheme, Grid, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { SideLeft } from "./components";
import Header from "./components/Header";
import Routers from "./routers";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fc4a1a",
      },
      secondary: {
        main: "#212121",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div id="Layout">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <SideLeft />
            </Grid>
            <Grid item xs={6}>
              <Routers />
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
