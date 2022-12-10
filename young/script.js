//const { response, json } = require("express");
var myInterval;
var data=[];
var slider=document.getElementById("myRange");
var output=document.getElementById("value");

output.innerHTML=slider.value;

slider.onchange=function(){
   
var v = document.getElementById('myRange').value;
fetch("https://blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v4="+ v) // fetch api for ydse

   output.innerHTML=v;
   sessionStorage.setItem("myvalue",v);

   console.log("hi");
}
// document.addEventListener("DOMContentLoaded",()=>{
//    slider.value=sessionStorage.getItem("myvalue");

// })
function show_value(x)
{
 document.getElementById("value").innerHTML=x;
 fetch("https://blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v4="+ x)
 //sessionStorage.getItem("myvalue");
}


function myTimer() {
   fetch('https://blynk.cloud/external/api/get?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v4')
            .then(response => response.json())
            .then(data => 
   
          {
             const myJSON = JSON.stringify(data)
             if (myJSON == "0") {
                 document.getElementById("bt1").innerHTML = "Recalibrate";
                 clearInterval(myInterval);
               //   sessionStorage.setItem("myvalue",v);
                 
             }
          });
       
    
     return false;
 };
 




 function leave(){
    //sessionStorage.removeItem("myvalue");
    
   //  location.href="../home_page/home.html";
    fetch('https://blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v5=0') //usage key api for ydse
    console.log("leave");
    location.href="../home_page/home.html";
    console.log("hello");
 }

 function return_home(){
    location.href='../home_page/home.html'

 }
 function return_dashboard(){
    location.href='young.html'
    
 }

 