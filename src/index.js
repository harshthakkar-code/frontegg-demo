import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
baseUrl: 'https://app-cb7q1i0vecyr.frontegg.com',
  clientId: '54c69151-dcd2-4ba3-9e41-3b812ba77581'
};

const authOptions = {
  keepSessionAlive: true, // Uncomment this in order to maintain the session alive
};

// For react 18:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={false}
      authOptions={authOptions}
    >
      <App />
    </FronteggProvider>
    ,
  </BrowserRouter>
);
