let button = document.querySelectorAll('.btn');
let contLast = document.getElementsByClassName("span");
// const press = false;
 let icon = document.querySelectorAll("i");


button.addEventListener("click" , ()=>{
button.style.color ="#fff";
contLast.style.color = "red";
contLast.style.fontSize = "5rem";

})




// btnLast[i].addEventListener("click", ()=>{
  
// if(press === true){

// contLast[i].style.backgroundColor ="blue";

// press = false;

// } else{

//   contLast[i].style.display ="none";
//   press = true;
// }
 


// })



let logininput = document.querySelector("#login_input");
let loginbtn = document.querySelector("#login_btn");

let val = "1234@gmail.com";

loginbtn.addEventListener("click", () => {
  if (val !== "logininput") {
    alert("Please Enter The Valid Username!");
  }
});
