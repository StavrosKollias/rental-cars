import "core-js/stable";
import React from "react";
import ReactDom from "react-dom";
import { App } from "./components/App";
import "./assets/styles/index.scss";

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
