const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let response = await fetch("https://rprfzpmqtfteeehlfjiw7uwety0imnzx.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
	counter.innerHTML = `Views: ${data}`;
}

updateCounter();