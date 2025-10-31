import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Modal from "react-modal"; // haddii aad isticmaalayso react-modal
import { Provider } from "react-redux";
import store from "./store";
import "./index.css"; // optional

Modal.setAppElement("#root"); // hal mar oo kaliya

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
