
//:::::::::::::::::::Nav Toggler Animation::::::::::::

function navToggle(){
    let mainNav = document.getElementById("main-nav");
    mainNav.classList.toggle("nav-open")
} 

//:::::::::::::::::::Media Animations::::::::::::
var imgsArray = [
    {url: "url('Pics/colorado1.jpg')", id: 0},
    {url: "url('Pics/colorado2.jpg')", id: 1},
    {url: "url('Pics/colorado6.jpg')", id: 2},
    {url: "url('Pics/colorado4.jpg')", id: 3},
    {url: "url('Pics/colorado5.jpg')", id: 4},
]
var mediaMain = document.getElementsByClassName("media-main")[0];  

var pushUrlToMain = url => {
    mediaMain.style.backgroundImage = `${url}`; 
    }
var count = 0;

function checkCount(){
if(count >= 5){
     return count = 0
}
if(count <= 0){
     return count = 5
}
}
checkCount()

function transition(element){
    element.classList.add("media-transition") 
    setTimeout(function(){
    element.classList.remove("media-transition")
    }, 500)
}

function displayToMain(num) { 
    checkCount()
    transition(mediaMain)
    
     for(imgs in imgsArray){
        if(imgsArray.id = num + 1){
         pushUrlToMain(imgsArray[num].url)
         count = num
            }

     }
     
}
function ArrowImgChange(direction) { 
    checkCount()
     
    transition(mediaMain)
   
    if(direction= "right"){
     
        for(imgs in imgsArray){
        
            if(mediaMain.style.backgroundImage = `url('Pics/colorado${count}.jpg')`){
               
                 pushUrlToMain(imgsArray[count++].url)
                 count++
                
            }
           
        }
     }
    if(direction= "left"){
     
        for(imgs in imgsArray){
            if(mediaMain.style.backgroundImage = `url('Pics/colorado${count}.jpg')`){
                count--
                 pushUrlToMain(imgsArray[count].url)
                
            }
            
        }
     }
}


//:::::::::::::SlideShow::::::::::::::::://



function SlideShow(){
    checkCount()
    
    function runCarousel(){ 

    

    if(count >= imgsArray.length){
            count = 0
            iteration = 0
    }
     if(count <  imgsArray.length){
    pushUrlToMain(imgsArray[count].url)
    transition(mediaMain)
        count++
        iteration++
      }  
      
    }

if(displayedToMainRan = true){
return setInterval(runCarousel
,5000)
}
else{
    return 0
}
}

// SlideShow()



// ::::::::::: Background Opacity on Scroll:::::::::::



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
            Onclick(contactBtn, 5450);
            Onclick(mediaBtn, 2880);
            Onclick(storyBtn, 990);
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

