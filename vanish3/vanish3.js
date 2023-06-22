var myInterval;
let UserVR2;

function myfunction() {
    // console.log("tu pagal hai kya??")
    document.getElementById("bt1").innerHTML = "Recalibrating";
    fetch("https://blr1.blynk.cloud/external/api/update?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v0" + "1")
    myInterval = setInterval(myTimer, 500);
}

function myTimer() {
    //document.querySelector('form').onsubmit = function () {
    fetch('https://blr1.blynk.cloud/external/api/get?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v1')
        .then(response => response.json())
        .then(data => {
            const myJSON = JSON.stringify(data)
            if (myJSON == "0") {
                document.getElementById("bt1").innerHTML = "Recalibrate";
                clearInterval(myInterval);
                document.querySelector("#u").value = 0;
                // document.querySelector("#v").value = 0;
                document.querySelector("#us").innerHTML = "0";
                // document.querySelector("#vs").innerHTML = "0";
            }
        });
    // .catch(error => {
    //     console.log('Error:', error);
    // })
    return false;
}

var saved_u_val;
// var saved_v_val;

document.addEventListener('DOMContentLoaded', () => {

    if (typeof sessionStorage.getItem('uid') === 'object') {
        location.href = '../sign_in/sign_in.html'
    }

    if (sessionStorage.getItem('tried_Exp') == 0) {
        sessionStorage.removeItem("saved_countdown");
        location.href = '../home_page/home.html'
    }

    fetch("https://blr1.blynk.cloud/external/api/get?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v1")
        .then(response => response.json())
        .then(data => {
            UserVR2 = Number(JSON.stringify(data)) + 1
            //  document.getElementById('count').innerHTML = `User Count : ${UserVR2}`;
        })

    saved_u_val = sessionStorage.getItem('saved_val_u');
    // saved_v_val = sessionStorage.getItem('saved_val_v');
    // console.log(saved_u_val);
    // console.log(saved_v_val);

    if (saved_u_val == null) {
        saved_u_val = 0;
        // saved_v_val = 0;
        sessionStorage.setItem('saved_val_u', saved_u_val);
        // sessionStorage.setItem('saved_val_v', saved_v_val);
        // console.log(saved_u_val);
        // console.log(saved_v_val);
    }
    // console.log('Yes, I am mad');
    // document.querySelector("#vs").innerHTML = saved_v_val;
    document.querySelector("#us").innerHTML = saved_u_val;
    document.querySelector("#u").value = saved_u_val;
    // document.querySelector("#v").value = saved_v_val;

    //setInterval(myTimer, 500);

    // document.querySelector('form').onsubmit = function () {
    //     const target = document.querySelector('#get_bool').value;
    //     document.querySelector('#result2').innerHTML = target;
    //     //console.log(target);
    //     fetch("https://blynk.cloud/external/api/update?token=PIhHUS2rhKB6AlJQeN7TGcMh326zGV4-&v1=" + target)
    //     // document.querySelector('#result').innerHTML = target;
    //     return false;
    // }

    const inputslider_u = document.querySelector("#u");
    inputslider_u.oninput = () => {
        let value1 = inputslider_u.value;
        document.querySelector("#us").innerHTML = value1;
        fetch("https://blr1.blynk.cloud/external/api/update?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v1=" + value1)
        sessionStorage.setItem('saved_val_u', value1);
        return false;
    }

});

function Up(ID) {
    document.getElementById(ID).value = 0;
    fetch("https://blr1.blynk.cloud/external/api/get?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v1")
        .then(response => response.json())
        .then(data => {
            const myJSON = JSON.stringify(data);
            if (myJSON == 1) {
                fetch("https://blr1.blynk.cloud/external/api/update?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v1=0")
            }
        })
}

function Down(ID) {
    document.getElementById(ID).value = 1;

    fetch("https://blr1.blynk.cloud/external/api/get?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v1")
        .then(response => response.json())
        .then(data => {
            const myJSON = JSON.stringify(data);
            if (myJSON == 0) {
                fetch("https://blr1.blynk.cloud/external/api/update?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v1=1")
            }
        })
}

function increment(ID) {
    const cur = document.getElementById(ID);
    var v1 = cur.value;
    v1 = (Number(v1) + Number(cur.step));
    if (Number(v1) > 1) {
        v1 = 1;
    }

    cur.value = v1;
    document.getElementById(ID + "s").innerHTML = v1;

    console.log(String.fromCharCode(ID.charCodeAt(0) - 68));
    sessionStorage.setItem('saved_val_u', v1);
    fetch("https://blr1.blynk.cloud/external/api/update?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v1=" + v1)
}

function decrement(ID) {
    const cur = document.getElementById(ID);
    var v1 = cur.value;
    v1 = (Number(v1) - Number(cur.step));
    if (Number(v1) < 0) {
        v1 = 0;
    }
    cur.value = v1;
    document.getElementById(ID + "s").innerHTML = v1;
    // console.log(String.fromCharCode(ID.charCodeAt(0) - 68));
    sessionStorage.setItem('saved_val_u', v1);
    // if(curr_state != 1){
    fetch("https://blr1.blynk.cloud/external/api/update?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v1=" + v1)
    //     curr_state = 1;
    // }

    // let response=fetch("https://blr1.blynk.cloud/external/api/get?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1")
    //     .then(response => response.json())
    //     .then(data => {
    //         const myJSON = JSON.stringify(data)
    //         console.log(response);
    //         console.log(myJSON);
    //         console.log(typeof(myJSON));

    //         if(myJSON=="1"){
    //         }else if(myJSON=="0"){
    //             //console.log("bye");
    //             fetch("https://blr1.blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1=1")
    //             document.getElementById(ID + "s").innerHTML = 1;
    //         }
    //     });
}

function leave() {
    sessionStorage.removeItem("saved_countdown");
    sessionStorage.removeItem("saved_val_v");
    sessionStorage.removeItem("saved_val_u");
    fetch("https://blr1.blynk.cloud/external/api/update?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v5=" + UserVR2)
    fetch("https://blr1.blynk.cloud/external/api/update?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v3=0")
    fetch("https://blr1.blynk.cloud/external/api/update?token=dNAlYuQN6r6pEX2Fn5jX9vNd29KJLjvS&v1=0")
        .then(() => {
            location.replace("../home_page/home.html")
        })
}

function return_home() {
    location.href = '../home_page/home.html'
}


window.addEventListener('beforeunload', () => {
    fetch("https://blr1.blynk.cloud/external/api/update?token=PjC1-u_h-OBVRuKZFKf0cQ2XVuYI_V6o&v0=" + "1")
    fetch('https://blr1.blynk.cloud/external/api/update?token=PjC1-u_h-OBVRuKZFKf0cQ2XVuYI_V6o&v3=0')
})
