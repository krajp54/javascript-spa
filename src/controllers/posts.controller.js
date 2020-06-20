import view from "../views/posts.html";

const getPosts = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");

	return await response.json();
};

export default async () => {
	const div_element = document.createElement("div");

	div_element.innerHTML = view;

	const post_element = div_element.querySelector("#posts");

	const posts = await getPosts();

	let total_posts = div_element.querySelector("#total_posts");

	total_posts.innerHTML = posts.length;

	posts.forEach((post) => {
		post_element.innerHTML += `
        <li class="list-group-item border-primary bg-dark text-white">
            <h5>${post.title}</h5>
            <p>${post.body}</p>
        </li>
        `;
	});

	return div_element;
};
