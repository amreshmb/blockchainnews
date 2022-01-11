import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import reportWebVitals from "./reportWebVitals";
import ThemeWrapper from "./ThemeWrapper";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </React.StrictMode>,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <ThemeWrapper>
      <App />
    </ThemeWrapper>,
    document.getElementById("root")
  );
}

// serviceWorkerRegistration.register();

// reportWebVitals();
