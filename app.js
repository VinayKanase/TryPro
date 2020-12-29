//Selectors and Variables
const cont=document.querySelector(".cont");
const hamburger=document.querySelector(".hamburger");
const signup=document.querySelector(".btn-signup");
const login=document.querySelector(".btn-login");
const formsign=document.querySelector(".signup");
const formlogin=document.querySelector(".login");
//Functions
function remove(Event){
 const show = document.querySelector(".nav .navlinks.show");
 // console.log(Event.target.classList.contains("crossbtn"));
 if(Event.target.classList.contains("crossbtn")){
   formsign.style.animation="outin 0.4s cubic-bezier(0.46,-0.2, 0.92, 0.01)";
   formlogin.style.animation="outin 0.4s cubic-bezier(0.46,-0.2, 0.92, 0.01)";
   cont.style.pointerEvents="all";
   if(window.innerWidth<=1020 || window.outerWidth<=1020)
   show.style.pointerEvents="all";
   setTimeout(() => {
    formsign.style.display="none";
    formlogin.style.display="none";
   }, 400);
 }
 // console.log();
}
function hamb(){
  console.log("call");
  const nav=document.querySelector(".nav .navlinks");
  const line = document.querySelectorAll(".line"); 
  if(nav.classList.contains("show")){
   nav.style.animation=" goout 0.4s linear";
  }
  else{
   nav.style.animation="comein 0.5s linear";
  }
  nav.classList.toggle("show");
  line.forEach(lin => {
   lin.classList.toggle("toggle");
  });
  setTimeout(() => {
   nav.style.animation="";
  }, 500);
} 
//Event Listners
signup.addEventListener("click",()=>{
 const show = document.querySelector(".nav .navlinks.show");
   formsign.style.animation="inout 0.4s cubic-bezier(0, 1.38, 0.58, 1)";
   formsign.style.display="block";
   cont.style.pointerEvents="none";
   if(window.innerWidth<=1020 || window.outerWidth<=1020)
   show.style.pointerEvents="none";
   setTimeout(() => {
    formsign.style.animation="";
   }, 400);
});
login.addEventListener("click",()=>{
 const show = document.querySelector(".nav .navlinks.show");
 formlogin.style.animation="inout 0.4s cubic-bezier(0, 1.38, 0.58, 1)";
 formlogin.style.display="block";
 cont.style.pointerEvents="none";
 if(window.innerWidth<=1020 || window.outerWidth<=1020)
 show.style.pointerEvents="none";
 setTimeout(() => {
  formlogin.style.animation="";
 }, 400);
});
formlogin.addEventListener("click",remove);
formsign.addEventListener("click",remove);
hamburger.addEventListener("click",hamb);