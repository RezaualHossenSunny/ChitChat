import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import firebaseConfig from "./firebaseConfig.js";
import { Provider } from "react-redux";
import store from "./Feture/stroe.js";


render(<Provider store={store}>
    <App />
</Provider>, 
document.getElementById("app"));
