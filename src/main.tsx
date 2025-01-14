import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./style";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root")!);

if (root) {
  root.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  );
}
