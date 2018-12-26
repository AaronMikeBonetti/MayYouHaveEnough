
function myFunction() {
	let x = document.querySelector(".main-nav");
	;
if(innerWidth > 960){
    x.style.display = "none";
}
else{
	if (x.style.display === "none") {
		x.style.display = "block";
	}
	 else {
		x.style.display = "none";
	}
}
}


// Scroll on click events (keep in case of media queries)

// var logo = document.getElementById("logo")
// var home = document.getElementById("home")
// var storyBtn = document.getElementById("story-btn")
// var mediaBtn = document.getElementById("media-btn")
// var contactBtn = document.getElementById("contact-btn")

// logo.addEventListener('click', function(){
// 	window.scrollTo({
// 	   top: 0,
// 	   left: 0,
// 	   behavior: 'smooth'
// 	 });;
//    });

// home.addEventListener('click', function(){
// 	window.scrollTo({
// 	   top: 0,
// 	   left: 0,
// 	   behavior: 'smooth'
// 	 });;
//    });
   
// storyBtn.addEventListener('click', function(){
// 	window.scrollTo({
// 	   top: 900,
// 	   left: 0,
// 	   behavior: 'smooth'
// 	 });;
//    });
// mediaBtn.addEventListener('click', function(){
// 	window.scrollTo({
// 	   top: 1980,
// 	   left: 0,
// 	   behavior: 'smooth'
// 	 });;
//    });
   
//    contactBtn.addEventListener('click', function(){
// 	window.scrollTo({
// 	   top: 3100,
// 	   left: 0,
// 	   behavior: 'smooth'
// 	 });;
//    });



