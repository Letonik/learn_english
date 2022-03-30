import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles/_global.scss';
import {BrowserRouter} from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./styles/themeMUI";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
