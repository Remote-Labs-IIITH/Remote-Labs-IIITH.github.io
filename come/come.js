var data_vel = [];

document.addEventListener('DOMContentLoaded', () => {
    sessionStorage.setItem('experiment_Data', JSON.stringify(data_vel))
    var xValues = [100,200,300,400,500,600,700,800,900,1000];
    new Chart("myChart", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{ 
            data: [],
            borderColor: "red",
            fill: false
        }]},
        options: {
        legend: {display: false}
        }
    });
});        

function stop1(){

    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v1")
    .then(response => response.json())
    .then(data => {
        const curr_val = JSON.stringify(data)
        if(curr_val == "0"){
            fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v1=1")
            setTimeout(function(){}, 2000); 
            // const data_arr = JSON.parse(sessionStorage.getItem('experiment_Data'));
            // console.log(data_arr);
            console.log(data_vel);
            fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v4")
            .then(response => response.json())
            .then(data => {
                const vel1 = JSON.stringify(data)
                data_vel.push(vel1);
            })
            fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v5")
            .then(response => response.json())
            .then(data => {
                const vel2 = JSON.stringify(data)
                data_vel.push(vel2);
            })
            // sessionStorage.setItem("experiment_Data", data_arr);
            console.log(data_vel);

            make_chart();
        }else{
            fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v1=0")
        }
})}

function stop2(){

    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v2")
    .then(response => response.json())
    .then(data => {
        const curr_val = JSON.stringify(data)
        if(curr_val == "0"){
            fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v2=1")
            setTimeout(function(){}, 2000); 
            // const data_arr = JSON.parse(sessionStorage.getItem('experiment_Data'));

            fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v6")
            .then(response => response.json())
            .then(data => {
                const vel3 = JSON.stringify(data)
                data_vel.push(vel3);
                // data_arr.push(vel3);
            })
            // sessionStorage.setItem("experiment_Data", data_arr);
            make_chart();
            // console.log(data_arr);
            console.log(data_vel);
        }else{
            fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v2=0")
        }

    
})}

function stop3(){

    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v3")
    .then(response => response.json())
    .then(data => {
        const curr_val = JSON.stringify(data)
        if(curr_val == "0"){
            fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v3=1")
            setTimeout(function(){}, 2000); 
            // const data_arr = JSON.parse(sessionStorage.getItem('experiment_Data'));
            fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v7")
            .then(response => response.json())
            .then(data => {
                const vel4 = JSON.stringify(data)
                data_vel.push(vel4);
                // data_arr.push(vel4);
            })
            fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v8")
            .then(response => response.json())
            .then(data => {
                const vel5 = JSON.stringify(data)
                data_vel.push(vel5);

                // data_arr.push(vel5);
            })
            // sessionStorage.setItem("experiment_Data", data_arr);
            make_chart();
            console.log(data_vel);

        }else{
            fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v3=0")
        }
    
})}

function power_switch(){
    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v0")
    .then(response => response.json())
    .then(data => {
        const curr_val = JSON.stringify(data)
        if(curr_val == "0"){
            fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v0=1")
        }else{
            fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v0=0")
        }
})}

function reset(){
    fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v10=1")
    myInterval = setInterval(myTimer, 500);
}

function myTimer() {
    fetch('https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v10')
        .then(response => response.json())
        .then(data => {
            const myJSON = JSON.stringify(data)
            if (myJSON == "0") {
                clearInterval(myInterval);
                document.querySelector("#reset_btn").checked = false;
            }
        });
    return false;
}

function make_chart(){
    var xValues = [100,200,300,400,500,600,700,800,900,1000];
    new Chart("myChart", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [
        { 
            data: data_vel,
            borderColor: "red",
            fill: false
        }
        // { 
        //     data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
        //     borderColor: "green",
        //     fill: false
        // }, 
        // { 
        //     data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
        //     borderColor: "blue",
        //     fill: false
        // }
        ]
        },
        options: {
        legend: {display: false}
        }
    });
}

function leave(){
    fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v10=1")
    fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v21=0")
        .then(() => {
             location.replace("../home_page/home.html")
        })
}
