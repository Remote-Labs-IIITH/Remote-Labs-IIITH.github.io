var saved_u_val;

document.addEventListener('DOMContentLoaded', () => {

    if(typeof sessionStorage.getItem('uid') === 'object'){
        location.href = '../sign_in/sign_in.html'
    }

    if(sessionStorage.getItem('tried_Exp') == 0){
        sessionStorage.removeItem("saved_countdown");
        location.href = '../home_page/home.html'
    }

    saved_u_val = sessionStorage.getItem('saved_val_u');

    if(saved_u_val == null){
        saved_u_val = 0;
        sessionStorage.setItem('saved_val_u', saved_u_val);
    }
    document.querySelector("#field1_input").innerHTML = saved_u_val;
    document.querySelector("#u").value = saved_u_val;

    const inputslider_u = document.querySelector("#u");
    inputslider_u.oninput = () => {
        let value1 = inputslider_u.value;
        document.querySelector("#field1_input").innerHTML = value1;
        sessionStorage.setItem('saved_val_u', value1);

    return false;
    }

});

// inputslider_u.onmouseup = () => {
//     document.getElementById("field1_input").innerHTML = document.querySelector("#u").value;
//     console.log("Chutiya hai kya");
// }

function increment(ID) {
    const cur = document.getElementById(ID);
    var v1 = cur.value;
    v1 = (Number(v1) + Number(cur.step));
    if (Number(v1) > 9675) {
        v1 = 9675;
    }
   
    cur.value = v1;
    document.getElementById("field1_input").innerHTML = v1;
    
    console.log(String.fromCharCode(ID.charCodeAt(0) - 68));
    sessionStorage.setItem('saved_val_u', v1);
}

function decrement(ID) {
    const cur = document.getElementById(ID);
    var v1 = cur.value;
    v1 = (Number(v1) - Number(cur.step));
    if (Number(v1) < 0) {
        v1 = 0;
    }
    cur.value = v1;
    document.getElementById("field1_input").innerHTML = v1;
    sessionStorage.setItem('saved_val_u', v1);
}

function leave(){
    sessionStorage.removeItem("saved_countdown");
    sessionStorage.removeItem("saved_val_u");
    location.replace("../home_page/home.html")
}

function return_home(){
    location.href='../home_page/home.html'
}

// window.addEventListener('beforeunload', () => {
//     fetch("https://blr1.blynk.cloud/external/api/update?token=R77dMWPsQ8B7xavEV_HVjaVF01DklJji&v0=" + "1")
//     fetch('https://blr1.blynk.cloud/external/api/update?token=R77dMWPsQ8B7xavEV_HVjaVF01DklJji&v3=0')
// })
