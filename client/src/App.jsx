import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import Header from "./components/Header";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fc4a1a",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  );
}
