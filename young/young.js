var saved_u_val;
let UserVR1;
let value1;

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
    document.querySelector("#u_label").innerHTML = "Angle: "  + saved_u_val + "°";
    document.querySelector("#u").value = saved_u_val;

    fetch("https://blr1.blynk.cloud/external/api/get?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v6")
        .then(response => response.json())
        .then(data => {
            UserVR1 = Number(JSON.stringify(data)) + 1
        })

    const inputslider_u = document.querySelector("#u");
    inputslider_u.oninput = () => {
        value1 = inputslider_u.value;
        document.querySelector("#us").innerHTML = value1;
        sessionStorage.setItem('saved_val_u', value1);
        return false;
    }

    inputslider_u.onmouseup = () => {
        document.getElementById("u_label").innerHTML = "Angle: "  + value1 + "°";
        fetch("https://blr1.blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v4=" + value1)
    }
});

function increment(ID) {
    const cur = document.getElementById(ID);
    var v1 = cur.value;
    v1 = (Number(v1) + Number(cur.step));
    if (Number(v1) > 180) {
        v1 = 180;
    }
    cur.value = v1;
    document.getElementById("u_label").innerHTML = "Angle: "  + v1 + "°";
    sessionStorage.setItem('saved_val_u', v1);
    fetch("https://blr1.blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v4=" + v1)
}

function decrement(ID) {
    const cur = document.getElementById(ID);
    var v1 = cur.value;
    v1 = (Number(v1) - Number(cur.step));
    if (Number(v1) < 0) {
        v1 = 0;
    }
    cur.value = v1;
    document.getElementById("u_label").innerHTML = "Angle: "  + v1 + "°";
    sessionStorage.setItem('saved_val_u', v1);
    fetch("https://blr1.blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v4=" + v1)
}

function reload_plot() {
    fetch("https://blr1.blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v7=1")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    alert("Processing... Please wait for 3-5 seconds");
    setTimeout(function() {
        var iframe = document.getElementById('str');
        iframe.src = iframe.src;
    }, 5000);
}

function leave(){
    sessionStorage.removeItem("saved_countdown");
    sessionStorage.removeItem("saved_val_v");
    sessionStorage.removeItem("saved_val_u");
    fetch("https://blr1.blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v6=" + UserVR1)
    fetch("https://blr1.blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v4=0")
    fetch("https://blr1.blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v5=0")
        .then(() => {
            location.replace("../home_page/home.html")
        })
}

function return_home(){
    location.href='../home_page/home.html'
}

window.addEventListener('beforeunload', () => {
    fetch('https://blr1.blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v5=0')
})
