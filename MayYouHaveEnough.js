function myFunction() {
	var x = document.querySelector(".main-nav");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

let num = []
let random = []

for(var i = 0; i < 8; i++){

num = Math.random() * 10;
newNum = Math.ceil(num)
random.push(newNum)
console.log(newNum)
}

for(var i = 0; i < 8; i++){
	random.pop()
	console.log(random)
}


