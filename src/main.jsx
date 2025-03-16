import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import Router
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* ✅ Only one BrowserRouter here */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
