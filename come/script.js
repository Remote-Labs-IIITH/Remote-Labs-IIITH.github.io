// var data = [];

// document.addEventListener('DOMContentLoaded', () => {

//     if(typeof sessionStorage.getItem('uid')  === 'object'){
//         location.href = '../sign_in/sign_in.html'
//     }
// })

// function leave(){
//     // location.replace("../home_page/home.html")
//     fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v0=" + "1")
//     fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v6=0")
//         .then(() => {
//              location.replace("../home_page/home.html")
//         })
// }

// window.addEventListener('beforeunload',  () => {
//     // document.querySelector("#f").innerHTML = ((parseFloat(value1)*parseFloat(value2))/(parseFloat(value1) + parseFloat(value2))).toFixed(2);
//     fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v0=1")
//     fetch("https://blynk.cloud/external/api/update?token=Ox9y5Ci8n4t0uMC-q9HCEq1o_p2obdg4&v6=0")

// });

// function save_vals(){
//     const data = JSON.parse(localStorage.getItem('experiment_Data'));
//     const exp_data = {
//         "u_val" : value1,
//         "v_val" : value2,
//         "f_val" : ((parseFloat(value1)*parseFloat(value2))/(parseFloat(value1) + parseFloat(value2))).toFixed(2),
//     };
//     data.push(exp_data);
//     localStorage.setItem('experiment_Data', JSON.stringify(data));
// };

// function download_vals() {
//     csvStr = JSON2CSV();
//     var hiddenElement = document.createElement('a');
//     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvStr);
//     hiddenElement.target = '_blank';
//     hiddenElement.download = 'output.csv';
//     hiddenElement.click();
// };
// function JSON2CSV() {
//     JsonArray = JSON.parse(localStorage.getItem('experiment_Data'));
//     JsonFields = ["u_val","v_val","f_val"]
//     var csvStr = JsonFields.join(",") + "\n";

//     JsonArray.forEach(element => {
//         u_val = element.u_val;
//         v_val = element.v_val;
//         f_val = element.f_val;

//         csvStr += u_val + ',' + v_val + ','  + f_val + "\n";
//     })
//     return csvStr;
// }

function return_home(){
    location.href='../home_page/home.html'
}
function return_dasboard(){
    location.href='come.html'
}
