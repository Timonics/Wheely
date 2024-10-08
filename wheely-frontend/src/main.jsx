import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MyAppProvider from "./context/myAppContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <StrictMode>
      <Router>
        <MyAppProvider>
          <App />
        </MyAppProvider>
      </Router>
    </StrictMode>
  </GoogleOAuthProvider>
);
