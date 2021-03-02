const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const cell1= document.querySelector("#cellphone-1");
const cell2= document.querySelector("#cellphone-2")

window.addEventListener("load", () => {
    gsap.fromTo(title, {y:20, opacity:0}, {y:0, opacity:1, duration:1.2, delay:0.4});
    gsap.fromTo(subtitle, {y:20, opacity:0}, {y:0, opacity:1, duration:1.2, delay:0.4});
    gsap.fromTo(cell1, {y:20, opacity:0}, {y:0, opacity:1, duration:1.2, delay:0.4});
    gsap.fromTo(cell2, {y:20, opacity:0}, {y:0, opacity:1, duration:1.2, delay:0.4});

    
    console.log("Page is succesfully charged")
});
window.addEventListener("scroll", ()=>{
    if(pageYOffset>150){
        gsap.to(".title-case-1", {y:0, opacity:1, duration:1.2});
        gsap.to(".subtitle-case-1", {y:0, opacity:1, duration:1.2});
    }
    if(pageYOffset<=150){
        gsap.to(".title-case-1", {y:20, opacity:0});
        gsap.to(".subtitle-case-1", {y:20, opacity:0});
    }

});
window.addEventListener("scroll", ()=>{
    var image = document.querySelector("#image");
    
    if(pageYOffset>499){
       
        gsap.to(image, {y:0, opacity:1, duration:1.2});
       
    }if(pageYOffset<499){
        gsap.to(image, {y:20, opacity:0});
        
    }

});
window.addEventListener("scroll", ()=>{
   
    if(pageYOffset>1198){
       
        gsap.to('.text', {y:0, opacity:1, duration:1.2});
       
    }
    if(pageYOffset<1198){
        gsap.to('.text', {y:20, opacity:0});
        
    }

});
window.addEventListener("scroll", ()=>{
    var title1 = document.querySelector("#titleforanimation1");
    var title2= document.querySelector("#titleforanimation2");
    var image1= document.querySelector("#image1");
    var image2= document.querySelector("#image2");
    if(pageYOffset>1889){
       
        gsap.to(title1, {y:0, opacity:1, duration:1.2});
        gsap.to(title2, {y:0, opacity:1, duration:1.2});
        gsap.to(image1, {y:0, opacity:1, duration:1.2});
        gsap.to(image2, {y:0, opacity:1, duration:1.2});
       
       
    }
    if(pageYOffset<1889){
        gsap.to(title1, {y:20, opacity:0});
        gsap.to(title2, {y:20, opacity:0});
        gsap.to(image1, {y:20, opacity:0});
        gsap.to(image2, {y:20, opacity:0});
        
    }

});

console.log(pageYOffset)