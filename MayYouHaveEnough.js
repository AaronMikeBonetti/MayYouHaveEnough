function myFunction() {
	let x = document.querySelector(".main-nav");
	let intViewportWidth = window.innerWidth;

	if (x.style.display === "none") {
		x.style.display = "block";
	}
	 else {
		x.style.display = "none";
	}
}

