const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
	const info = document.querySelector(".info");
	info.classList.toggle("show");
	if (info.classList.contains("show")) btn.innerHTML = "Gausah, gapeduli";
	else btn.innerHTML = "Klik Di sini";
});
