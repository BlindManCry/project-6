import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GeneratorProvider } from "./context/GeneratorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GeneratorProvider>
      <App />
    </GeneratorProvider>
  </React.StrictMode>
);
