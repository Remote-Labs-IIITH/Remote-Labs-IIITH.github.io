var data_KE = [0];
var data_PE = [0];
var data_TE = [0];
var myLineChart;
var temp_TE1 = 0;
var temp_TE2 = 0;

document.addEventListener('DOMContentLoaded', () => {
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
});

function stop1(){
    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v1")
    .then(response => response.json())
    .then(data => {
        const curr_val = JSON.stringify(data)
        if(curr_val == "0"){
            fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v1=1");
            setTimeout(function(){get_val_1()},4000);
        }else{
            fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v1=0");
        }
    })
}

function get_val_1(){

    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v11")
    .then(response => response.json())
    .then(data => {
        const KE1 = data;
        data_KE.push(KE1);
        temp_TE1 = data
        temp_TE2 = data;
    })

    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v16")
    .then(response => response.json())
    .then(data => {
        const PE1 = data;
        data_PE.push(PE1);        
        temp_TE2 += data;

        data_TE.push(temp_TE2);

        // myLineChart.update();
        // setTimeout(function(){myLineChart.update()}, 1000);

        setTimeout(function(){
            myLineChart.update();
            document.getElementById("myTable").rows[1].cells[1].innerHTML = data;
            document.getElementById("myTable").rows[1].cells[2].innerHTML = temp_TE1;
            document.getElementById("myTable").rows[1].cells[3].innerHTML = (data + temp_TE1).toFixed(2);
            temp_TE1 = 0;
            temp_TE2 = 0;
        }, 1000);


        setTimeout(function(){get_val_2()}, 4000);
    })
}

function get_val_2(){
    
    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v12")
    .then(response => response.json())
    .then(data => {
        const KE2 = data;
        data_KE.push(KE2);
        temp_TE1 = data;
        temp_TE2 = data;
    })

    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v17")
    .then(response => response.json())
    .then(data => {
        const PE2 = data;
        data_PE.push(PE2);
        
        temp_TE2 += data;
        data_TE.push(temp_TE2);

        // myLineChart.update();
        setTimeout(function(){
            myLineChart.update();
            document.getElementById("myTable").rows[2].cells[1].innerHTML = data;
            document.getElementById("myTable").rows[2].cells[2].innerHTML = temp_TE1;
            document.getElementById("myTable").rows[2].cells[3].innerHTML = (data + temp_TE1).toFixed(2);
            temp_TE1 = 0;
            temp_TE2 = 0;
        }, 1000);

        setTimeout(function(){get_val_3()}, 4000);
    })
}

function get_val_3(){
    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v13")
    .then(response => response.json())
    .then(data => {
        const KE3 = data;
        data_KE.push(KE3);
        temp_TE1 = data;
        temp_TE2 = data;
    })

    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v18")
    .then(response => response.json())
    .then(data => {
        const PE3 = data;
        data_PE.push(PE3);
        
        temp_TE2 += data;
        data_TE.push(temp_TE2);

        // myLineChart.update();
        setTimeout(function(){
            myLineChart.update();
            document.getElementById("myTable").rows[3].cells[1].innerHTML = data;
            document.getElementById("myTable").rows[3].cells[2].innerHTML = temp_TE1;
            document.getElementById("myTable").rows[3].cells[3].innerHTML = (data + temp_TE1).toFixed(2);
            temp_TE1 = 0;
            temp_TE2 = 0;
        }, 1000);

        setTimeout(function(){get_val_4()}, 4000);
    })

}

function get_val_4(){
    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v14")
    .then(response => response.json())
    .then(data => {
        const KE4 = data;
        data_KE.push(KE4);
        temp_TE1 = data;
        temp_TE2 = data;
    })

    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v19")
    .then(response => response.json())
    .then(data => {
        const PE4 = data;
        data_PE.push(PE4);
        
        temp_TE2 += data;
        data_TE.push(temp_TE2);

        // myLineChart.update();
        setTimeout(function(){
            myLineChart.update();
            document.getElementById("myTable").rows[4].cells[1].innerHTML = data;
            document.getElementById("myTable").rows[4].cells[2].innerHTML = temp_TE1;
            document.getElementById("myTable").rows[4].cells[3].innerHTML = (data + temp_TE1).toFixed(2);
            temp_TE1 = 0;
            temp_TE2 = 0;
        }, 1000);

        setTimeout(function(){get_val_5()}, 4000);
    })

}

function get_val_5(){
    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v15")
    .then(response => response.json())
    .then(data => {
        const KE5 = data;
        data_KE.push(KE5);
        temp_TE2 = data;
        temp_TE1 = data;
    })

    fetch("https://blynk.cloud/external/api/get?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v20")
    .then(response => response.json())
    .then(data => {
        const PE5 = data;
        data_PE.push(PE5);
        
        temp_TE2 += data;
        data_TE.push(temp_TE2);

        setTimeout(function(){
            myLineChart.update();
            document.getElementById("myTable").rows[5].cells[1].innerHTML = data;
            document.getElementById("myTable").rows[5].cells[2].innerHTML = temp_TE1;
            document.getElementById("myTable").rows[5].cells[3].innerHTML = (data + temp_TE1).toFixed(2);
            temp_TE1 = 0;
            temp_TE2 = 0;
        }, 1000);
    })
}


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

                const elem = document.getElementById("myTable");
                for (let i = 1; i < 6; i++) {
                    for(let j = 1; j < 4; j++){
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
    fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v10=1")
    fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v21=0")
        .then(() => {
             location.replace("../home_page/home.html")
        })
}