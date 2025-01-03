import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    // we can use strict mode to the inside the inner components also
    // strict mode rerenders all functions twice at only development mode
    // on production it doesnt so it help to tract errors earlier.
    <StrictMode>
        <App />
    </StrictMode>
);
