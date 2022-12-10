var myInterval;
var value1;
var value2;
var data = [];

function myfunction() {
    
    document.getElementById("bt1").innerHTML = "Recalibrating";
    fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v0=" + "1")
    myInterval = setInterval(myTimer, 500);
}

function myTimer() {
    fetch('https://blr1.blynk.cloud/external/api/get?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v0')
        .then(response => response.json())
        .then(data => {
            const myJSON = JSON.stringify(data)
            if (myJSON == "0") {
                document.getElementById("bt1").innerHTML = "Recalibrate";
                clearInterval(myInterval);
                document.querySelector("#u").value = 6.2;
                document.querySelector("#v").value = 6.4;
                document.querySelector("#us").innerHTML = "6.2";
                document.querySelector("#vs").innerHTML = "6.4";
                sessionStorage.setItem('saved_val_u', 6.2);
                sessionStorage.setItem('saved_val_v', 6.4);
                saved_u_val = 6.2;
                saved_v_val = 6.4;

                document.querySelector("#f").innerHTML = ((parseFloat(saved_v_val)*parseFloat(saved_u_val))/(parseFloat(saved_u_val) + parseFloat(saved_v_val))).toFixed(2);
            }
        });
    
    return false;
}

//Object and scree sliders
var saved_u_val; //object
var saved_v_val; //screen

document.addEventListener('DOMContentLoaded', () => {

    if(typeof sessionStorage.getItem('uid')  === 'object'){
        location.href = '../sign_in/sign_in.html'
    }

    saved_u_val = sessionStorage.getItem('saved_val_u');
    saved_v_val = sessionStorage.getItem('saved_val_v');
    console.log(saved_u_val);
    console.log(saved_v_val);

    if(saved_u_val == null && saved_v_val == null){
        saved_u_val = 6.2;
        saved_v_val = 6.4;
        sessionStorage.setItem('saved_val_u', saved_u_val);
        sessionStorage.setItem('saved_val_v', saved_v_val);
        console.log(saved_u_val);
        console.log(saved_v_val);
        localStorage.setItem('experiment_Data', JSON.stringify(data));        
    }
    value1 = saved_u_val;
    value2 = saved_v_val;
    document.querySelector("#vs").innerHTML = saved_v_val;
    document.querySelector("#us").innerHTML = saved_u_val;
    document.querySelector("#u").value = saved_u_val;
    document.querySelector("#v").value = saved_v_val;
    document.querySelector("#f").innerHTML = ((parseFloat(saved_v_val)*parseFloat(saved_u_val))/(parseFloat(saved_u_val) + parseFloat(saved_v_val))).toFixed(2);

    const inputslider_u = document.querySelector("#u");
    inputslider_u.oninput = () => {
        value1 = inputslider_u.value;
        document.querySelector("#us").innerHTML = value1;
        sessionStorage.setItem('saved_val_u', value1);
        document.querySelector("#f").innerHTML = ((parseFloat(value1)*parseFloat(value2))/(parseFloat(value1) + parseFloat(value2))).toFixed(2);
        return false;
    }

    const inputslider_v = document.querySelector("#v");
    inputslider_v.oninput = () => {
        value2 = inputslider_v.value;
        document.querySelector("#vs").innerHTML = value2;
        sessionStorage.setItem('saved_val_v', value2);
        document.querySelector("#f").innerHTML = ((parseFloat(value1)*parseFloat(value2))/(parseFloat(value1) + parseFloat(value2))).toFixed(2);
        return false;
    }

    inputslider_u.onmouseup = () => {
        fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v1=" + value1)
    }

    inputslider_v.onmouseup = () => {
        fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v2=" + value2)
    }

});

//object/sreecn increment and decrement
function increment(ID) {
    const cur = document.getElementById(ID);
    var v1 = cur.value;
    v1 = (Number(v1) + Number(cur.step)).toFixed(1);
    if(ID == "u"){
        if(Number(v1) > 22.0){
            v1 = 22.0;
        }
        value1 = v1;
    }else{
        if(Number(v1) > 21.8){
            v1 = 21.8;
        }
        value2 = v1;
    }
    cur.value = v1;
    document.getElementById(ID + "s").innerHTML = v1;
    console.log(String.fromCharCode(ID.charCodeAt(0) - 68));
    sessionStorage.setItem("saved_val_"+ID, v1);
    fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v" + String.fromCharCode(ID.charCodeAt(0) - 68) + "=" + v1)
    document.querySelector("#f").innerHTML = parseFloat((parseFloat(value1)*parseFloat(value2))/(parseFloat(value1) + parseFloat(value2))).toFixed(2);

}

function decrement(ID) {
    
    const cur = document.getElementById(ID);
    var v1 = cur.value;
    v1 = (Number(v1) - Number(cur.step)).toFixed(1);
    cur.value = v1;
    if(ID == "u"){
        if(Number(v1) < 6.2){
            v1 = 6.2;
        }
        value1 = v1;
    }else{
        if(Number(v1) < 6.4){
            v1 = 6.4;
        }
        value2 = v1;
    }
    document.getElementById(ID + "s").innerHTML = v1;
    console.log(String.fromCharCode(ID.charCodeAt(0) - 68));
    sessionStorage.setItem("saved_val_"+ID, v1);
    

    fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v" + String.fromCharCode(ID.charCodeAt(0) - 68) + "=" + v1)
    document.querySelector("#f").innerHTML = ((parseFloat(value1)*parseFloat(value2))/(parseFloat(value1) + parseFloat(value2))).toFixed(2);

}


//joystick 

function Up(ID) {
    const btn_down = document.getElementById('btn_down').style.color='#BDBDBD'; //makes down grey
    document.getElementById(ID).value = 0;
    let response=fetch("https://blr1.blynk.cloud/external/api/get?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v5")
  
    .then(response => response.json())
    .then(data => {
         const myJSON = JSON.stringify(data)
         console.log(response);
         console.log(myJSON);
         console.log(typeof(myJSON));
         
         if(myJSON=="1")//joystick in center
         {
           fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v5=0") //moves up
           const btn_up = document.getElementById('btn_up').style.color='#055a72'; //makes up blue
           const btn_center = document.getElementById('btn_center').style.color='#BDBDBD'; //makes center grey
        }
        else if(myJSON=="2")//joystick in down
    {
       fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v5=0") //moves up
       const btn_up = document.getElementById('btn_up').style.color='#055a72';
       const btn_center = document.getElementById('btn_center').style.color='#BDBDBD';
     
    }
        else{
           const btn_up = document.getElementById('btn_up').style.color='#055a72';
           alert("Already UP");
        }

        
   
    });
 
 };

 function Down(ID) {
    const btn_up = document.getElementById('btn_up').style.color='#BDBDBD'; // makes up grey
    document.getElementById(ID).value = 1;
    let response=fetch("https://blr1.blynk.cloud/external/api/get?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v5")
  
    .then(response => response.json())
  
 
    .then(data => {
         const myJSON = JSON.stringify(data)
         console.log(response);
         console.log(myJSON);
         console.log(typeof(myJSON));
         if(myJSON=="1")//joystick in center
         {
           fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v5=2") //moves down
           const btn_down = document.getElementById('btn_down').style.color='#055a72'; // makes down blue
           const btn_center = document.getElementById('btn_center').style.color='#BDBDBD'; //makes center grey
         }
    
         else if(myJSON=="0")//joystick in up
    { 
       fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v5=2") //moves down
       const btn_down = document.getElementById('btn_down').style.color='#055a72';
       const btn_center = document.getElementById('btn_center').style.color='#BDBDBD';
    }
    else{
        alert("Already DOWN");
        const btn_down = document.getElementById('btn_down').style.color='#055a72';
    }
   
    });
 
 };

 function Left(ID) {
    const btn_right = document.getElementById('btn_right').style.color='#BDBDBD'; //makes right grey
    document.getElementById(ID).value = 0;
    let response=fetch("https://blr1.blynk.cloud/external/api/get?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v4")
  
    .then(response => response.json())
    .then(data => {
         const myJSON = JSON.stringify(data)
         console.log(response);
         console.log(myJSON);
         console.log(typeof(myJSON));
         if(myJSON=="1")//joystick in center
         {
            fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v4=0") //moves left
            const btn_left = document.getElementById('btn_left').style.color='#055a72'; //makes left blue
            const btn_center = document.getElementById('btn_center').style.color='#BDBDBD'; //makes center grey
        }
         else if(myJSON=="2")//joystick in right
    {
       fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v4=0") //moves left
       const btn_left = document.getElementById('btn_left').style.color='#055a72';
       const btn_center = document.getElementById('btn_center').style.color='#BDBDBD';
    }
    else{
        const btn_left = document.getElementById('btn_left').style.color='#055a72';
        alert("Already LEFT");
    }
   
    });
 
 };

 function Right(ID) {
    const btn_left = document.getElementById('btn_left').style.color='#BDBDBD'; //makes left grey
    document.getElementById(ID).value = 1;
    let response=fetch("https://blr1.blynk.cloud/external/api/get?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v4")
  
    .then(response => response.json())
    .then(data => {
         const myJSON = JSON.stringify(data)
         console.log(response);
         console.log(myJSON);
         console.log(typeof(myJSON));
         if(myJSON=="1")//joystick in center
        { 
            fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v4=2") //moves right
            const btn_right = document.getElementById('btn_right').style.color='#055a72'; //makes right blue
            const btn_center = document.getElementById('btn_center').style.color='#BDBDBD'; //makes center grey
        }
    
    else if(myJSON=="0")//joystick in left
    { 
       fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v4=2") //moves right
       const btn_right = document.getElementById('btn_right').style.color='#055a72';
       const btn_center = document.getElementById('btn_center').style.color='#BDBDBD';
       
     }
     else{
        const btn_right = document.getElementById('btn_right').style.color='#055a72';
        alert("Already RIGHT");
    }
    });
 
 };

 // resets all buttons to center
 function Center(ID){
    
    fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v4=1")
   // fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v14=3")
    fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v5=1")
   const btn_center = document.getElementById('btn_center').style.color='#055a72';
   const btn_down = document.getElementById('btn_down').style.color='#BDBDBD';
   const btn_right = document.getElementById('btn_right').style.color='#BDBDBD';
   const btn_up = document.getElementById('btn_up').style.color='#BDBDBD';
   const btn_left = document.getElementById('btn_left').style.color='#BDBDBD';
 }


function leave(){
    sessionStorage.removeItem("saved_countdown");
    sessionStorage.removeItem("saved_val_v");
    sessionStorage.removeItem("saved_val_u");
    fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v0=" + "1")
    fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v6=0")
        .then(() => {
             
             fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v3=0")// relay
             fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v4=1") //left-right in joystick
             fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v5=1") //up-dow in joystick
             location.replace("../home_page/home.html")
        })
}

window.addEventListener('beforeunload',  () => {
    // document.querySelector("#f").innerHTML = ((parseFloat(value1)*parseFloat(value2))/(parseFloat(value1) + parseFloat(value2))).toFixed(2);
    fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v0=1")
    fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v6=0")

});


function return_home(){
    location.href='../home_page/home.html'
}
function return_dashboard(){
    location.href='index.html'
}

