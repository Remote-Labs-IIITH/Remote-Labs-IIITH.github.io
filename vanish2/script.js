// const { response, json } = require("express");


var myInterval;
var data=[];


/*function myfunction() {
   var v1=document.getElementById('bt1').value;
   v1=Number(v1).toFixed();
   if(Number(v1==1)){
     // v1=0;
    // fetch("https://blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1=0")
   }
   
      document.getElementById("bt1").innerHTML = "Recalibrating";
      fetch("https://blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1=0")
   
   myInterval = setInterval(myTimer, 500);
}
*/

// timer
function myTimer() {
    
   fetch('https://blr1.blynk.cloud/external/api/get?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1')
  // .then(response => response.json())
   //.then(data =>
      
         {
            const myJSON = JSON.stringify(data)
            if (myJSON == "0") {
               // document.getElementById("bt1").innerHTML = "Recalibrate";
                clearInterval(myInterval);
                
                
            }
         }
         //);
   
    return false;
};




// to go up 
function Up() {
   let response=fetch("https://blr1.blynk.cloud/external/api/get?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1")
 
   .then(response => response.json())
   .then(data => {
        const myJSON = JSON.stringify(data)
        console.log(response);
        console.log(myJSON);
        console.log(typeof(myJSON));

   if(myJSON=="0"){
     //console.log("hello");

  }
    else if(myJSON=="1")
   {
     // console.log("bye");
      fetch("https://blr1.blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1=0")
   }
  
   });

};

//to go down
function Down() {
   
   let response=fetch("https://blr1.blynk.cloud/external/api/get?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1")
 
   .then(response => response.json())
 

   .then(data => {
        const myJSON = JSON.stringify(data)
        console.log(response);
        console.log(myJSON);
        console.log(typeof(myJSON));

   if(myJSON=="1"){
     //console.log("hello");

  }
    else if(myJSON=="0")
   {
      //console.log("bye");
      fetch("https://blr1.blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1=1")
   }
  
   });

};

//leave session
function leave(){
    sessionStorage.removeItem("saved_countdown");
    fetch("https://blr1.blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v3=0")
      // .then(() => {
      //    location.replace("../home_page/home.html")
      // })
        
   let response=fetch("https://blr1.blynk.cloud/external/api/get?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1")
 
   .then(response => response.json())
   .then(data => {
        const myJSON = JSON.stringify(data)
        console.log(response);
        console.log(myJSON);
        console.log(typeof(myJSON));

   if(myJSON=="0"){
    // console.log("hi");

  }
    else if(myJSON=="1")
   {
     // console.log("bye");
      fetch("https://blr1.blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1=0")
   }
  
   location.replace("../home_page/home.html");
   fetch('https://blr1.blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v3=0')
   });
  
}

function return_home(){
   location.href='../home_page/home.html'
}
function return_dashboard(){
   location.href='vanish.html'
}

