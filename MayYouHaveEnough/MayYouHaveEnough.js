//:::::::::::::::::::Nav Toggler Animation::::::::::::
function navToggle(){
    
    let mainNav = document.getElementById("main-nav");
    mainNav.classList.toggle("nav-open")
} 

//:::::::::::::::::::Media Animations::::::::::::

function displayToMain(num) {
    
    let mediaMain = document.getElementsByClassName("media-main")[0];
   
    let img = url => {
        mediaMain.style.backgroundImage = `${url}` ;   
        }
    
    let transition = () =>{
    mediaMain.classList.add("media-transition") 
    
        setTimeout(function(){
            mediaMain.classList.remove("media-transition")
        }, 500)

   }
   transition()
  
    imgsArray = [
        {img: "url('Pics/colorado1.jpg')", id: 0},
        {img: "url('Pics/colorado2.jpg')", id: 1},
        {img: "url('Pics/colorado6.jpg')", id: 2},
        {img: "url('Pics/colorado4.jpg')", id: 3},
        {img: "url('Pics/colorado5.jpg')", id: 4},
    ]

     for(imgs in imgsArray){
        if(imgsArray.id = num + 1){
        return img(imgsArray[num].img)
            }
     }
}


//:::::::::::::Change Img based on current img and on a timer

//function for finding what picture is currently in media main;
// if(indexof = id) 

// function ArrowImgChange(direction){
//     let mediaMain = document.getElementsByClassName("media-main")[0];
//     let index = 0;
//     let iterations = 0;

//     imgsArray = [
//         {img: "url('Pics/colorado1.jpg')", id: 0},
//         {img: "url('Pics/colorado2.jpg')", id: 1},
//         {img: "url('Pics/colorado6.jpg')", id: 2},
//         {img: "url('Pics/colorado4.jpg')", id: 3},
//         {img: "url('Pics/colorado5.jpg')", id: 4},
//     ]
    
//     if(direction === "right"){
//         console.log("right!")
//     }
//     if(direction === "left"){
//         console.log("left!")
//     }

   
//     let img = url => {
//         mediaMain.style.backgroundImage = `${url}` ;   
//         }
     
     
//      var changeColor = function () {
//          if (index >= imgsArray.length) {
//              index = 0;
//              iterations++;
//          }
//           = imgsArray.id[index];
    //      //	stem.style.backgroundColor = colors[index];
    //      if (iterations >= colors.length) {
    //          iterations = 0;
    //          clearInterval(setInterval);
    //      } else {
    //          index++;
    //      }
    //  }
    //  setInterval(changeColor, 1000);
     
    
        // let mediaMain = document.getElementsByClassName("media-main")[0];

        // for(imgs in imgsArray){
        //     if(imgsArray.id = num + 1){
        //         return img(imgsArray[num].img)
//         //     }
// }


//:::::::::::Header Background Opacity on Scroll:::::::::::


window.onscroll = function () {
    let header = document.getElementsByTagName("header")[0];
   
    if(window.scrollY > 750){
        header.classList.add("background-opacity")
    }
    if(window.scrollY < 750){
        header.classList.remove("background-opacity")
    }
      
}
//:::::::::::Media Background Opacity on Scroll:::::::::::

window.onscroll = function () {
    let storyBackground = document.getElementsByClassName("media-scroll-background")[0];
   
    if(window.scrollY < 3800){
        storyBackground.classList.add("background-opacity")
    }
    if(window.scrollY > 3900){
        storyBackground.classList.remove("background-opacity")
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



