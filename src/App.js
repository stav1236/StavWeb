import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import EventLandingPage from "demos/EventLandingPage.js";

import { BrowserRouter as Router, Route }
  from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Route path="/" component={EventLandingPage} />
    </Router>
  );
}