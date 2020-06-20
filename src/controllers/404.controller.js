import view from "../views/404.html";

export default () => {
	const div_element = document.createElement("div");

	div_element.innerHTML = view;

	return div_element;
};
