import { pages } from "../controllers/index";

let content = document.querySelector("#root");

const router = async (route) => {
	content.innerHTML = "";

	switch (route) {
		case "#/": {
			return content.appendChild(pages.home());
		}
		case "#/post":
			return content.appendChild(await pages.posts());
		default:
			return content.appendChild(await pages.notFound());
	}
};

export { router };
