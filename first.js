let btn=document.querySelector("#mode");
let c_mode="light";
btn.addEventListener("click",() =>{
   if(c_mode=="light"){
    c_mode="dark";
    document.querySelector("body").style.backgroundColor="black";
   }
   else{
    c_mode="light";
    document.querySelector("body").style.backgroundColor="white";
   }
   console.log(c_mode);
})