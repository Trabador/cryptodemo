import { ThemeProvider } from "@emotion/react";
import {
  AppBar,
  Container,
  createTheme,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CurrencySelector from "../CurrencySelector";
import "./Header.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar variant="dense" className="toolbar">
            <Typography className="title" onClick={() => navigate("/")}>
              Crypto Demo
            </Typography>
            <CurrencySelector />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
