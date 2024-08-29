import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/authContext/index";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>
);
