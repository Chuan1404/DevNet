import React from "react";
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import Header from "./components/Header";
import { Container } from "@mui/system";

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
        <Container id="Layout" maxWidth="xl">
          <Grid container>
            <Grid item xs={4}>
              Sidebar
            </Grid>
            <Grid item xs={8}>
              <Routers />
            </Grid>
          </Grid>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
