import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import firebaseConfig from "./firebaseConfig.js";


render(<App />, document.getElementById("app"));
