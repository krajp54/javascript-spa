import views from "../views/home.html";

export default () => {
	const div_element = document.createElement("div");

	div_element.classList = "text-white";
	div_element.innerHTML = views;

	let boton = div_element.querySelector("#btnClick");

	boton.addEventListener("click", () => {
		alert("Click!");
	});

	return div_element;
};
