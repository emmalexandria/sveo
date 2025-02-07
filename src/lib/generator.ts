export const getTitle = () => {
	const h1 = document.querySelector("h1")
	if (h1?.textContent) {
		return h1.textContent
	}

	const h2 = document.querySelector("h2");
	if (h2?.textContent) {
		return h2?.textContent
	}
}
