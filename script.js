const startBtn=document.getElementById("startBtn");

const startScreen=document.getElementById("startScreen");

const mainScreen=document.getElementById("mainScreen");

const scoreboard=document.getElementById("scoreboard");

const finalScreen=document.getElementById("finalScreen");

const balls=document.querySelectorAll(".ball");

const photoArea=document.getElementById("photoArea");

const sparkleContainer=document.getElementById("sparkleContainer");

const secretLetter=document.getElementById("secretLetter");

const closeLetter=document.getElementById("closeLetter");

const musicBtn=document.getElementById("musicBtn");

const music=document.getElementById("bgMusic");



let opened=0;

const totalMemories=6;





/* START BUTTON */



startBtn.addEventListener(

"click",

()=>{


startScreen.style.opacity="0";


startScreen.style.transition="1s";



setTimeout(()=>{


startScreen.style.display="none";


mainScreen.style.display="block";


scoreboard.style.display="block";



positionBalls();


spawnFireflies();



},900);



}

);









/* BALL POSITIONS */



function positionBalls(){



const positions=[



{

left:"10vw",

top:"15vh"

},



{

left:"72vw",

top:"13vh"

},



{

left:"8vw",

top:"68vh"

},



{

left:"74vw",

top:"65vh"

},



{

left:"22vw",

top:"42vh"

},



{

left:"64vw",

top:"42vh"

}





];





balls.forEach((ball,index)=>{





if(

ball.classList.contains(

"golden"

)

){



ball.style.left=

"50vw";



ball.style.top=

"48vh";



ball.style.transform=

"translate(-50%,-50%)";



return;



}





ball.style.left=

positions[index].left;



ball.style.top=

positions[index].top;



});



}









/* BALL CLICK */



balls.forEach(ball=>{



ball.addEventListener(

"click",

()=>{



if(

ball.dataset.secret

){



secretLetter.style.display=

"flex";



return;



}





ball.style.transform=

"scale(1.35)";



ball.style.opacity=

"0";





createSparkles(

ball.offsetLeft+70,

ball.offsetTop+70

);





showPhoto(

ball,

ball.dataset.img,

ball.dataset.caption

);





setTimeout(()=>{



ball.style.display=

"none";



},400);





opened++;





if(

opened===

totalMemories

){



setTimeout(()=>{



showFinal();



},2500);



}



}



);



});









/* POLAROID */



function showPhoto(

ball,

img,

caption

){



const card=

document.createElement(

"div"

);



card.className=

"polaroid";





card.style.left=

(ball.offsetLeft-70)

+"px";





let top=

ball.offsetTop-40;


if(top>window.innerHeight-420){

top=

window.innerHeight-420;

}


card.style.top=

top+"px";





card.style.transform=

`rotate(

${

Math.random()*10-5

}deg

)`;





card.innerHTML=`



<img src="${img}">



<p>



${caption}



</p>



`;





photoArea.appendChild(

card

);



}









/* SPARKLES */



function createSparkles(

x,

y

){



for(

let i=0;

i<25;

i++

){



const spark=

document.createElement(

"div"

);



spark.style.position=

"absolute";



spark.style.width=

"8px";



spark.style.height=

"8px";



spark.style.borderRadius=

"50%";



spark.style.background=

"#C9A783";



spark.style.left=

x+"px";



spark.style.top=

y+"px";



spark.style.boxShadow=

"0 0 25px gold";



spark.style.transition=

"all 1s ease";



sparkleContainer.appendChild(

spark

);





setTimeout(()=>{



spark.style.transform=

`translate(

${

Math.random()*300-150

}px,

${

Math.random()*300-150

}px

)

scale(0)`;


spark.style.opacity=

"0";



},50);





setTimeout(()=>{



spark.remove();



},1000);



}



}









/* SECRET LETTER */



closeLetter.addEventListener(

"click",

()=>{



secretLetter.style.display=

"none";



}

);









/* FIREFLIES */



function spawnFireflies(){



for(

let i=0;

i<18;

i++

){



const firefly=

document.createElement(

"div"

);



firefly.style.position=

"absolute";



firefly.style.width=

"6px";



firefly.style.height=

"6px";



firefly.style.borderRadius=

"50%";



firefly.style.background=

"#E7DEC9";



firefly.style.boxShadow=

"0 0 25px #E7DEC9";



firefly.style.left=

Math.random()*100+

"vw";



firefly.style.top=

Math.random()*100+

"vh";



firefly.style.opacity=

".55";



firefly.style.animation=

`

firefly

${

4+

Math.random()*4

}s

ease-in-out

infinite

alternate

`;



mainScreen.appendChild(

firefly

);



}



}








/* FIREFLY STYLE */



const style=

document.createElement(

"style"

);



style.innerHTML=`



@keyframes firefly{



0%{

transform:

translate(0,0);

}



100%{

transform:

translate(

100px,

-80px

);

opacity:.2;

}



}



`;



document.head.appendChild(

style);









/* FINAL SCREEN */



function showFinal(){



mainScreen.style.display=

"none";



scoreboard.style.display=

"none";



finalScreen.style.display=

"flex";



spawnFireworks();



}









/* FIREWORKS */



function spawnFireworks(){



setInterval(()=>{



for(

let i=0;

i<30;

i++

){



const dot=

document.createElement(

"div"

);



dot.style.position=

"absolute";



dot.style.width=

"8px";



dot.style.height=

"8px";



dot.style.borderRadius=

"50%";



dot.style.background=

"#C9A783";



dot.style.left=

50+

Math.random()*10+

"vw";



dot.style.top=

20+

Math.random()*15+

"vh";



dot.style.transition=

"all 1.5s";



finalScreen.appendChild(

dot

);





setTimeout(()=>{



dot.style.transform=

`translate(

${

Math.random()*500-250

}px,

${

Math.random()*500-250

}px

)

scale(0)`;



dot.style.opacity=0;



},50);





setTimeout(()=>{



dot.remove();



},1500);



}



},1500);



}









/* MUSIC */



musicBtn.addEventListener(

"click",

()=>{



if(

music.paused

){



music.play();



musicBtn.innerHTML=

"🔊";



}



else{



music.pause();



musicBtn.innerHTML=

"🎵";



}



}

);