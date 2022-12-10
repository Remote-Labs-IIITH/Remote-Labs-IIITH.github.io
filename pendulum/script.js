var myInterval;
var gval;
var data = [];
var value1;
var def_len = 22;
var gval_Interval;

function get_gval(){
    gval_Interval = setInterval(gTimer, 1000);
}

function gTimer(){
    fetch('https://blynk.cloud/external/api/get?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v4')
        .then(response => response.json())
        .then(data => {
            const myJSON = JSON.stringify(data)
            const curr = document.querySelector("#f");
            // console.log("Tu Pagal Hai kya");
            if(curr.innerHTML != myJSON){
                curr.innerHTML = myJSON;
                gval = myJSON;
            }
        })
}

function myfunction() {
    document.getElementById("bt1").innerHTML = "Recalibrating";
    fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v3=" + "1")
    myInterval = setInterval(myTimer, 1000);
}

function myTimer() {
    fetch('https://blynk.cloud/external/api/get?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v3')
        .then(response => response.json())
        .then(data => {
            const myJSON = JSON.stringify(data)
            if (myJSON == "0") {
                document.getElementById("bt1").innerHTML = "Recalibrate";
                clearInterval(myInterval);
                document.querySelector("#v").value = def_len;
                document.querySelector("#vs").innerHTML = def_len.toString();
                sessionStorage.setItem('saved_val_v', def_len);
                saved_v_val = def_len;
                fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v0=" + def_len)
            }
        });
    return false;
}

var saved_v_val;
document.addEventListener('DOMContentLoaded', () =>{

    if(typeof sessionStorage.getItem('uid')  === 'object'){
        location.href = '../sign_in/sign_in.html'
    }

    saved_v_val = sessionStorage.getItem('saved_val_v');
    if(saved_v_val == null){
        saved_v_val = def_len;
        sessionStorage.setItem('saved_val_v', saved_v_val);
        localStorage.setItem('experiment_Data', JSON.stringify(data));        
    }
    value1 = saved_v_val;
    document.querySelector("#vs").innerHTML = saved_v_val;
    document.querySelector("#v").value = saved_v_val;


    const inputslider_v = document.querySelector("#v");
    inputslider_v.oninput = () => {
        value2 = inputslider_v.value;
        document.querySelector("#vs").innerHTML = value2;
        sessionStorage.setItem('saved_val_v', value2);
        value1 = value2;
        return false;
    }

    inputslider_v.onmouseup = () => {
        fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v0=" + value2)
    }
})

function start(){
    fetch("https://blynk.cloud/external/api/get?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v1")
    .then(response => response.json())
    .then(data => {
        const curr_val = JSON.stringify(data)
        if(curr_val == "0"){
            fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v1=1")
            get_gval();
            setTimeout(function(){wait1()}, 2000);

            //fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v2=0")
        }})};

function stop_exp(){
    fetch("https://blynk.cloud/external/api/get?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v2")
    .then(response => response.json())
    .then(data => {
        const curr_val = JSON.stringify(data)
        if(curr_val == "0"){
            fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v2=1")
            get_gval();
            setTimeout(function(){wait2()}, 2000);

            //fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v2=0")
        }})};

function wait1(){
    document.querySelector("#start_btn").checked = false;

}
function wait2(){
    document.querySelector("#stop_btn").checked = false;

}
        // }else{
        //     // fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v1=0")
        //     fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v2=1")
        //     clearInterval(gval_Interval);
        //     document.querySelector("#v").value = 24;
        //     var value2 = 24;
        //     document.querySelector("#vs").innerHTML = value2;
        //     sessionStorage.setItem('saved_val_v', value2);
        //     value1 = value2; 
        //     fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v0=24")
        //     fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v1=0")

        // }

// function stop_exp(){
//     fetch("https://blynk.cloud/external/api/get?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v2")
//     .then(response => response.json())
//     .then(data => {
//         const curr_val = JSON.stringify(data)
//         if(curr_val == "0"){
//             fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v2=1")
//             clearInterval(gval_Interval);
//         }else{
//             fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v2=0")
//         }
//     })
//     document.querySelector("#v").value = 24;
//     var value2 = 24;
//     document.querySelector("#vs").innerHTML = value2;
//     sessionStorage.setItem('saved_val_v', value2);
//     value1 = value2; 
//     fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v0=24")

// }

// function reset(){
//     fetch("https://blynk.cloud/external/api/get?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v3")
//     .then(response => response.json())
//     .then(data => {
//         const curr_val = JSON.stringify(data)
//         if(curr_val == "0"){
//             fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v3=1")
//         }else{
//             fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v3=0")
//         }
//     })
// }



function increment(){
    const cur = document.querySelector("#v");
    var v1 = cur.value;
    v1 = (Number(v1) + Number(cur.step)).toFixed(0);
    if(Number(v1) > 27){
        v1 = 27;
    }
    cur.value = v1;
    value1 = v1;
    document.querySelector("#vs").innerHTML = v1;
    fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v0=" + v1)
};

function decrement(){
    const cur = document.querySelector("#v");
    var v1 = cur.value;
    v1 = (Number(v1) - Number(cur.step)).toFixed(0);
    if(Number(v1) < 22){
        v1 = 22;
    }
    cur.value = v1;
    value1 = v1;
    document.querySelector("#vs").innerHTML = v1;
    fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v0=" + v1)
};

function leave(){
    sessionStorage.removeItem("saved_countdown");
    sessionStorage.removeItem("saved_val_v");
    clearInterval(gval_Interval);

    fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v3=" + "1")
    fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v5=0")
        .then(() => {
            location.replace("../home_page/home.html")
    })

};

window.addEventListener('beforeunload',  () =>{
    fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v3=1")
    fetch("https://blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v5=0")    
})

function save_vals(){
    const data = JSON.parse(localStorage.getItem('experiment_Data'));
    const exp_data = {
        "v_val" : value1,
        "g_val" : gval
        // "f_val" : ((parseFloat(value1)*parseFloat(value2))/(parseFloat(value1) + parseFloat(value2))).toFixed(2),
    };
    data.push(exp_data);
    localStorage.setItem('experiment_Data', JSON.stringify(data));
};

function download_vals() {
    csvStr = JSON2CSV();
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvStr);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'output.csv';
    hiddenElement.click();
};
function JSON2CSV() {
    JsonArray = JSON.parse(localStorage.getItem('experiment_Data'));
    JsonFields = ["v_val","g_val"];
    var csvStr = JsonFields.join(",") + "\n";

    JsonArray.forEach(element => {
        v_val = element.v_val;
        g_val = element.g_val;

        csvStr += v_val + ','  + g_val + "\n";
    })
    return csvStr;
};

function return_home(){
    clearInterval(gval_Interval);
    location.href='../home_page/home.html'
};
function return_home(){
    clearInterval(gval_Interval);
    location.href='pendu.html'
}
