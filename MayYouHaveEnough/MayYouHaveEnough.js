
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


// :::::::::::Media Background Opacity on Scroll:::::::::::
function mediaBackgroundEffect(){
window.addEventListener("scroll" , function(){
    
    
    let header = document.getElementsByTagName("header")[0]; 
    let mediaGrid = document.getElementsByClassName("media-grid")[0];
   
    if(window.scrollY > 700){
        header.classList.add("background-opacity")
    }
    if(window.scrollY < 700){
        header.classList.remove("background-opacity")
    }
    
   
    if(window.scrollY < 3000){
       mediaGrid.style.backgroundColor = "white"
    }
    if(window.scrollY > 3000){
       mediaGrid.style.backgroundColor = "rgb(107, 107, 107)"
    }
      
});
}
// ::::::::::::::::::::Navagation Scroll Effect with Responsive Effect

function navScrollButtons(){

let listeners = ['load', 'resize']
let contactBtn = "contact-btn"
let mediaBtn = "media-btn"
let storyBtn = "story-btn"

function Onclick(element, y){ 
     return document.getElementById(element).setAttribute("onclick",`window.scrollTo(0, ${y});`)} 

listeners.forEach(function(e) {
    window.addEventListener(e,function(){
    
        if(window.innerWidth < 970){
            Onclick(contactBtn, 4150);
            Onclick(mediaBtn, 2980);
            Onclick(storyBtn, 950);
        }
        else{
            Onclick(contactBtn, 3050);
            Onclick(mediaBtn, 1930);
            Onclick(storyBtn, 900);
         }
    
    })
});
}
// ::::::::::Timer Function for the Background Effect and for Scroll Effect

function timer(){
    navScrollButtons() 
    setInterval(navScrollButtons, 1000)
    setInterval(mediaBackgroundEffect, 5000)
};
timer()

