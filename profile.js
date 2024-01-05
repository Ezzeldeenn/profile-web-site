var stars =document.getElementById("stars");
var mountains7 =document.getElementById("mountains7");
var boat =document.getElementById("boat");
var river =document.getElementById("river");
var mountains4 =document.getElementById("mountains4");
var mountains3 =document.getElementById("mountains3");
var moon =document.getElementById("moon");
var word_back_moon =document.querySelector(".word_back_moon");
var background=document.querySelector(".main");
window.onscroll=function(){
    let value=scrollY;
    // console.log(value); 
    stars.style.left=value +"px";
    moon.style.top=value *3.5+"px";
    mountains3.style.top=value *1.2+"px";
    mountains4.style.top=value *0.7+"px";
    river.style.top=value +"px";
    boat.style.top=value +"px";
    boat.style.left=value *2.5+"px";
    word_back_moon.style.fontSize=value +"px";

    if(scrollY >=48){
        word_back_moon.style.fontSize=48 +"px";
        word_back_moon.style.position="fixed";
           if(scrollY >=311.3333435058594){
             word_back_moon.style.display="none";
         }
         else{
            word_back_moon.style.display="block";
         }
         if(scrollY>=92.66666412353516){
            background.style.background="linear-gradient(#508da5,#150029)";
         }
         else{
            background.style.background="linear-gradient(#200018,#150029)";

         }
    }
 
}