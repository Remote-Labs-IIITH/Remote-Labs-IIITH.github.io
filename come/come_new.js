var data_KE = [0];
// var data_PE = [0.080022264];
// var data_TE = [0.080022264];
var data_PE = [83.356];
var data_TE = [83.356];
var myLineChart;
var temp_TE1 = 0;
var temp_TE2 = 0;
let mass = 0.02;
var start_val = 83.356;
// let ht = [75.1, 70.1, 65.5, 61.5, 58.2];
// let PE_fix =  [0.0147196, 0.0137396, 0.012838, 0.012054, 0.0114072];

// let ht = [79.7 ,74.2 ,67.7 ,61.9 , 57.9]
// let PE_fix = [0.0782, 0.0728, 0.0664, 0.0607, 0.0568];

let ht = [82.091 , 74.2, 63.638, 51.996, 41.688 ]
let PE_fix = [80.503, 72.765, 62.407, 50.997, 40.882];
let flag = 0;

let UserCOE;

document.addEventListener('DOMContentLoaded', () => {

    if(typeof sessionStorage.getItem('uid') === 'object'){
        location.href = '../sign_in/sign_in.html'
    }

    if(sessionStorage.getItem('tried_Exp') == 0){
        sessionStorage.removeItem("saved_countdown");
        location.href = '../home_page/home.html'
    }

    document.getElementById("myTable").rows[1].cells[1].innerHTML = start_val.toFixed(4);
    document.getElementById("myTable").rows[1].cells[2].innerHTML = "0.0000";
    document.getElementById("myTable").rows[1].cells[3].innerHTML = "0.0000";
    document.getElementById("myTable").rows[1].cells[4].innerHTML = start_val.toFixed(4);

    var xValues = [0,1,2,3,4,5];
    myLineChart = new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                data: data_KE,
                borderColor:"red",
                fill: false,
                label: "Kinetic Energy"
            },
            {
                data: data_PE,
                borderColor: "green",
                fill: false,
                label: "Potential Energy"
            },
            {
                data: data_TE,
                borderColor: "blue",
                fill: false,
                label: "Total Energy"
            }
        ]},
            options: {
                legend: {display: true}
            }
        }
    );

    fetch("https://blr1.blynk.cloud/external/api/get?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v14")
        .then(response => response.json())
        .then(data => {
            UserCOE = Number(JSON.stringify(data)) + 1
        })
});

function stop1(){
    if(flag == 1){
        window.confirm('please reset the setup before experimenting again');
    }else{
        fetch("https://blr1.blynk.cloud/external/api/get?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v1")
        .then(response => response.json())
        .then(data => {
            const curr_val = JSON.stringify(data)
            if(curr_val == "0"){
                fetch("https://blr1.blynk.cloud/external/api/update?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v1=1");
                setTimeout(function(){get_val_1()},7000);
            }else{
                fetch("https://blr1.blynk.cloud/external/api/update?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v1=0");
            }
        })
        flag = 1;
    }    
}

function vel2KE(vel){
    return 0.5*0.1*vel*vel*1000;
}

function get_val_1(){
    fetch("https://blr1.blynk.cloud/external/api/get?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v4")
    .then(response => response.json())
    .then(data => {
        if(data != 0){
        const KE1 = vel2KE(data);
        data_KE.push(KE1);
        const PE1 = PE_fix[0];
        data_PE.push(PE1);
        temp_TE2 = KE1 + PE1;
        data_TE.push(temp_TE2);

        setTimeout(function(){
            myLineChart.update();
            document.getElementById("myTable").rows[2].cells[1].innerHTML = PE1.toFixed(4);
            document.getElementById("myTable").rows[2].cells[2].innerHTML = data.toFixed(4);
            document.getElementById("myTable").rows[2].cells[3].innerHTML = KE1.toFixed(4);
            document.getElementById("myTable").rows[2].cells[4].innerHTML = temp_TE2.toFixed(4);
        }, 1000);


        setTimeout(function(){get_val_2()}, 4000);
        }else{
                get_val_1();
            }
    })
}

function get_val_2(){

    fetch("https://blr1.blynk.cloud/external/api/get?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v5")
    .then(response => response.json())
    .then(data => {
        const KE2 = vel2KE(data);
        data_KE.push(KE2);
        const PE2 = PE_fix[1];
        data_PE.push(PE2);
        temp_TE2 = KE2 + PE2;
        data_TE.push(temp_TE2);

        setTimeout(function(){
            myLineChart.update();
            document.getElementById("myTable").rows[3].cells[1].innerHTML = PE2.toFixed(4);
            document.getElementById("myTable").rows[3].cells[2].innerHTML = data.toFixed(4);
            document.getElementById("myTable").rows[3].cells[3].innerHTML = KE2.toFixed(4);
            document.getElementById("myTable").rows[3].cells[4].innerHTML = temp_TE2.toFixed(4);
        }, 1000);

        setTimeout(function(){get_val_3()}, 4000);
    })
}


function get_val_3(){
    fetch("https://blr1.blynk.cloud/external/api/get?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v6")
    .then(response => response.json())
    .then(data => {
        const KE3 = vel2KE(data);
        data_KE.push(KE3);
        const PE3 = PE_fix[2];
        data_PE.push(PE3);
        temp_TE2 = KE3 + PE3;
        data_TE.push(temp_TE2);

        setTimeout(function(){
            myLineChart.update();
            document.getElementById("myTable").rows[4].cells[1].innerHTML = PE3.toFixed(4);
            document.getElementById("myTable").rows[4].cells[2].innerHTML = data.toFixed(4);
            document.getElementById("myTable").rows[4].cells[3].innerHTML = KE3.toFixed(4);
            document.getElementById("myTable").rows[4].cells[4].innerHTML = temp_TE2.toFixed(4);
        }, 1000);

        setTimeout(function(){get_val_4()}, 4000);
    })
}

function get_val_4(){
    fetch("https://blr1.blynk.cloud/external/api/get?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v7")
    .then(response => response.json())
    .then(data => {
        const KE4 = vel2KE(data);
        data_KE.push(KE4);
        const PE4 = PE_fix[3];
        data_PE.push(PE4);
        temp_TE2 = KE4 + PE4;
        data_TE.push(temp_TE2);

        setTimeout(function(){
            myLineChart.update();
            document.getElementById("myTable").rows[5].cells[1].innerHTML = PE4.toFixed(4);
            document.getElementById("myTable").rows[5].cells[2].innerHTML = data.toFixed(4);
            document.getElementById("myTable").rows[5].cells[3].innerHTML = KE4.toFixed(4);
            document.getElementById("myTable").rows[5].cells[4].innerHTML = temp_TE2.toFixed(4);
        }, 1000);

        setTimeout(function(){get_val_5()}, 4000);
    })
}

function get_val_5(){
    fetch("https://blr1.blynk.cloud/external/api/get?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v8")
    .then(response => response.json())
    .then(data => {
        const KE5 = vel2KE(data);
        data_KE.push(KE5);
        const PE5 = PE_fix[4];
        data_PE.push(PE5);
        temp_TE2 = KE5 + PE5;
        data_TE.push(temp_TE2);

        setTimeout(function(){
            myLineChart.update();
            document.getElementById("myTable").rows[6].cells[1].innerHTML = PE5.toFixed(4);
            document.getElementById("myTable").rows[6].cells[2].innerHTML = data.toFixed(4);
            document.getElementById("myTable").rows[6].cells[3].innerHTML = KE5.toFixed(4);
            document.getElementById("myTable").rows[6].cells[4].innerHTML = temp_TE2.toFixed(4);
        }, 1000);
    })

    document.querySelector("#start").checked = false;

}

function power_switch(){
    fetch("https://blr1.blynk.cloud/external/api/get?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v0")
    .then(response => response.json())
    .then(data => {
        const curr_val = JSON.stringify(data)
        if(curr_val == "0"){
            fetch("https://blr1.blynk.cloud/external/api/update?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v0=1")
        }else{
            fetch("https://blr1.blynk.cloud/external/api/update?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v0=0")
        }
})}

function reset(){
    fetch("https://blr1.blynk.cloud/external/api/update?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v2=1")
    flag = 0;
    myInterval = setInterval(myTimer, 500);
}

function myTimer() {
    fetch('https://blr1.blynk.cloud/external/api/get?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v2')
        .then(response => response.json())
        .then(data => {
            const myJSON = JSON.stringify(data)
            if (myJSON == "0") {
                clearInterval(myInterval);
                document.querySelector("#reset_btn").checked = false;
                document.querySelector("#start").checked = false;


                const elem = document.getElementById("myTable");
                for (let i = 2; i < 7; i++) {
                    for(let j = 1; j < 5; j++){
                        elem.rows[i].cells[j].innerHTML = 0;
                    }
                } 
                for (let i = 0; i < 5 ; i++){
                    data_KE.pop();
                }
                for (let i = 0; i < 5 ; i++){
                    data_PE.pop();
                }
                for (let i = 0; i < 5 ; i++){
                    data_TE.pop();
                }

                myLineChart.update();
            }
        });
    return false;
}

function leave(){
    sessionStorage.removeItem("saved_countdown");
    fetch("https://blr1.blynk.cloud/external/api/update?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v14=" + UserCOE)
    fetch("https://blr1.blynk.cloud/external/api/update?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v3=0")
    fetch("https://blr1.blynk.cloud/external/api/update?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v2=1")
        .then(() => {
             location.replace("../home_page/home.html")
        })
}