import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import axios from "axios";

import { put } from "./store/productsSlice";

const fetching = async () => {
  await axios
    .get("http://127.0.0.1:3001/products")
    .then((data) => store.dispatch(put(data.data)))
    .catch((err) => console.log("error"));
};
fetching();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
