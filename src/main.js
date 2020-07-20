import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";

import { router } from "./router/index.routes";

router("#/");

window.addEventListener("hashchange", () => {

	router(window.location.hash);

});
