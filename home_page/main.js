const e = require("express");

let UsersFL;
let UsersVR1;
let UsersVR2;
let UsersCOE;

function pendulum_theory(){
  location.href='../pendulum/theory.html';
}

function vanish_theory(){
  location.href='../vanish/theory.html';
}

function focal_theory(){
  location.href='../focal_length/theory.html';
}

function young_theory(){
  location.href='../young/theory.html';
}

function rc_theory(){
  location.href='../rc_circuit/theory.html';
}

function rc_exp(){
  sessionStorage.setItem('triedExp',1);
  location.href='../rc_circuit/rc_circuit.html';
}

function pendulum_exp(){
  fetch('https://blr1.blynk.cloud/external/api/isHardwareConnected?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL')
    .then(response => response.json())
    .then(data => {
      const connection = JSON.stringify(data)
      if (connection == "true") {
        fetch('https://blr1.blynk.cloud/external/api/get?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v5')
          .then(response => response.json())
          .then(data => {
            const myJSON = JSON.stringify(data)
            if (myJSON == "0") {
              location.href = '../pendulum/pendu.html'
              fetch("https://blr1.blynk.cloud/external/api/update?token=ePUMpo-rDkt1peBekOxcVgQpW9zebvfL&v5=1")
            }
            else {
              location.href = '../pendulum/queue.html'
            }
          })
      } else {
        alert('Device is currently offline, please try again later');
      }
    })
}

function come_theory(){
  location.href='../come/theory.html';
}

function come_exp(){
  fetch('https://blr1.blynk.cloud/external/api/isHardwareConnected?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH')
    .then(response => response.json())
    .then(data => {
      const connection = JSON.stringify(data)
      // const connection = "true";
      if (connection == "true") {
        fetch('https://blr1.blynk.cloud/external/api/get?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v3')
          .then(response => response.json())
          .then(data => {
            const myJSON = JSON.stringify(data)
            if (myJSON == "0") {
              sessionStorage.setItem('tried_Exp', 1);
              location.href = '../come/come.html'
              fetch("https://blr1.blynk.cloud/external/api/update?token=vPSztEgcvWot4_AHJ0DpBZvLytVKmiLH&v3=1")
            }
            else {
              // location.href = '../come/queue.html'
              alert('Setup is currently in use. Please try again later');
            }
          })
      } else {
        alert('Device is currently offline, please try again later');
      }
    })
}

function young_exp(){
  fetch('https://blr1.blynk.cloud/external/api/isHardwareConnected?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a')
    .then(response => response.json())
    .then(data => {
      const connection = JSON.stringify(data)
      if (connection == "true") {
        fetch('https://blr1.blynk.cloud/external/api/get?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v5')
          .then(response => response.json())
          .then(data => {
            const myJSON = JSON.stringify(data)
            if (myJSON == "0") {
              sessionStorage.setItem('tried_Exp', 1);
              location.href = '../young/young3.html'
              fetch("https://blr1.blynk.cloud/external/api/update?token=ilEv4NM3BlZSMolddR7EsuurFMx6DR5a&v5=1")
            }
            else {
              // location.href = '../come/queue.html'
              alert('Setup is currently in use. Please try again later');
            }
          })
      } else {
        alert('Device is currently offline, please try again later');
      }
    })
}

// function focal_exp(){
//   fetch('https://blr1.blynk.cloud/external/api/isHardwareConnected?token=LvC6vyL_uPSpPdgnlCln0I9Vab6zcogV')
//   .then(response => response.json())
//   .then(data => {
//     const connection = JSON.stringify(data)

//     if(connection == "true"){
//       fetch('https://blr1.blynk.cloud/external/api/get?token=LvC6vyL_uPSpPdgnlCln0I9Vab6zcogV&v6')
//       .then(response => response.json())
//       .then(data => {
//         const myJSON = JSON.stringify(data)
//         if (myJSON == "0") {
//           sessionStorage.setItem('tried_Exp', 1);
//           location.href='../focal_length/index.html'
//           fetch("https://blr1.blynk.cloud/external/api/update?token=LvC6vyL_uPSpPdgnlCln0I9Vab6zcogV&v6=1")
//         }
//         else{
//           // location.href='../focal_length/queue.html'
//           // location.href='../focal_length/index.html'
//           // fetch("https://blynk.cloud/external/api/update?token=LvC6vyL_uPSpPdgnlCln0I9Vab6zcogV&v6=1")
//           alert("Setup is currently in use. Please try again later");
//         }
//       })
//     }else{
//       alert('Device is currently offline, please try again later');
//     }
//   })
// }

function focal_exp(){
  // for first vanishing rod experiment exp1
  // check if hardware is connected for the first device
  
  fetch('https://blr1.blynk.cloud/external/api/isHardwareConnected?token=LvC6vyL_uPSpPdgnlCln0I9Vab6zcogV')
    .then(response => response.json())
    .then(data => {
      const connection = JSON.stringify(data)
      
      if(connection == "true"){
        fetch('https://blr1.blynk.cloud/external/api/get?token=LvC6vyL_uPSpPdgnlCln0I9Vab6zcogV&v6')
        .then(response => response.json())
        .then(data => {
          const myJSON = JSON.stringify(data)
          if (myJSON == "0") {
            sessionStorage.setItem('tried_Exp', 1);
            location.href='../focal_length/index.html'
            fetch("https://blr1.blynk.cloud/external/api/update?token=LvC6vyL_uPSpPdgnlCln0I9Vab6zcogV&v6=1")
          }
          else{
            fetch('https://blr1.blynk.cloud/external/api/isHardwareConnected?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc')
              .then(response => response.json())
              .then(data => {
                const connection = JSON.stringify(data)
                if(connection == "true")
                fetch('https://blr1.blynk.cloud/external/api/get?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v6')
                  .then(response => response.json())
                  .then(data => {
                    const myJSON = JSON.stringify(data)
                    if (myJSON == "0") {
                      sessionStorage.setItem('tried_Exp', 1);
                      location.href='../focal2/index.html'
                      fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v6=1")
                    }
                    else{
                      alert('Both the setups are currently in use, please try again later');
                    }
                })
                else{
                  alert('Both the setups are in use, please try again later');
                }
              })
          }
        })
      }
      else{
        fetch('https://blr1.blynk.cloud/external/api/isHardwareConnected?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc')
        .then(response => response.json())
        .then(data => {
          const connection = JSON.stringify(data)

          if(connection == "true")
          fetch('https://blr1.blynk.cloud/external/api/get?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v6')
            .then(response => response.json())
            .then(data => {
              const myJSON = JSON.stringify(data)
              if (myJSON == "0") {
                sessionStorage.setItem('tried_Exp', 1);
                location.href='../focal2/index.html'
                fetch("https://blr1.blynk.cloud/external/api/update?token=nQ1T3sl75lK3QvSnkbhRd2smAHaV4Jqc&v6=1")
              }
              else{
                alert('Setups are already in use, try again later');
              }
          })
          else{
            alert('Both the setups are offline');
          }
        })
      }
})}

function vanish_exp(){
  // For first vanishing rod experiment exp1
  // Check if Hardware is Connected for first device
  fetch('https://blr1.blynk.cloud/external/api/isHardwareConnected?token=R77dMWPsQ8B7xavEV_HVjaVF01DklJji')
    .then(response => response.json())
    .then(data => {
      const connection = JSON.stringify(data)
      if(connection == "true"){
          // Hardware is connected, so we check usage in vanish_exp1 function
          vanish_exp1();                     
        }
      else{
        // device automation for vanish_exp1
        fetch('https://blr1.blynk.cloud/external/api/get?token=R77dMWPsQ8B7xavEV_HVjaVF01DklJji&v4')
          .then(response => response.json())
          .then(data => {
            const myJSON = JSON.stringify(data)
            console.log(myJSON);
            if (myJSON == "1") {
              console.log("sorry");
            }
            else{
            console.log("sarle");
              fetch('https://blr1.blynk.cloud/external/api/update?token=R77dMWPsQ8B7xavEV_HVjaVF01DklJji&v4=1')
              console.log("ok");
            }
            console.log("not connected");
            // alert('Device 1 is currently offline, please try again later');
            fetch('https://blr1.blynk.cloud/external/api/update?token=R77dMWPsQ8B7xavEV_HVjaVF01DklJji&v4=0')

            vanish_exp2();    
        });
      }  
    }); 
  }

  function vanish_exp1(){
    //usage switch for van_exp1
    fetch('https://blr1.blynk.cloud/external/api/get?token=R77dMWPsQ8B7xavEV_HVjaVF01DklJji&v3')
    .then(response => response.json())
       .then(data=>{
          const myJSON=JSON.stringify(data)
          if(myJSON=="0")
          {
              // myJSON = 0 means that the setup is free
              // toggle it to 0 in leave session of van_exp1
              sessionStorage.setItem('tried_Exp', 1);
              location.href="../vanish/vanish.html";
              fetch('https://blr1.blynk.cloud/external/api/update?token=R77dMWPsQ8B7xavEV_HVjaVF01DklJji&v3=1')
          }
          
          else{
              // if the setup of exp1 is in use, we check if vanish_exp2 function
              vanish_exp2();
          }
       })
  }
  
  function vanish_exp2(){
    //usage switch for van_exp2
    fetch('https://blr1.blynk.cloud/external/api/isHardwareConnected?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm')// van_exp2 auth token
      .then(response => response.json())
      .then(data => {
        const connection = JSON.stringify(data)
        // console.log(connection);
      
        if(connection == "true"){
          fetch('https://blr1.blynk.cloud/external/api/get?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v3')
          .then(response => response.json())
          .then(data=>{
              const myJSON=JSON.stringify(data)
              if(myJSON=="0")
              {
                  // myJSON = 0 means that the setup is free
                  // toggle it to 0 in leave session of van_exp1
                  sessionStorage.setItem('tried_Exp', 1);
                  location.href="../vanish3/vanish.html";  
                  fetch('https://blr1.blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v3=1')
              }
              else{
                alert("Setups are already in use, try again later");
              }})
                
        }else{
          fetch('https://blr1.blynk.cloud/external/api/get?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v0')// device automation for van_exp2
            .then(response => response.json())
            .then(data => {
              const myJSON = JSON.stringify(data)
              console.log(myJSON);
              if (myJSON == "1") {
              }
              else{
                fetch('https://blr1.blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v0=1')
              }
              // alert('Device 2 is currently offline, please try again later');
              alert("Setups are already in use, try again later");
              fetch('https://blr1.blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v0=0')
          });
        }
      })
  }

window.addEventListener('DOMContentLoaded', () => {
  if(typeof sessionStorage.getItem('uid')  === 'object'){
    location.href = '../sign_in/sign_in.html'
  }

  sessionStorage.setItem('tried_Exp', 0);

  fetch('https://blr1.blynk.cloud/external/api/get?token=LvC6vyL_uPSpPdgnlCln0I9Vab6zcogV&v3')
      .then(response => response.json())
      .then(data => {
        UsersFL = JSON.stringify(data)
        // document.getElementById('UserFL').innerHTML = `User Count: ${UsersFL}`;
      })

  fetch('https://blr1.blynk.cloud/external/api/get?token=R77dMWPsQ8B7xavEV_HVjaVF01DklJji&v5')
    .then(response => response.json())
    .then(data => {
      UsersVR1 = Number(JSON.stringify(data))
  })

  fetch('https://blr1.blynk.cloud/external/api/get?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v5')
    .then(response => response.json())
    .then(data => {
      UsersVR2 = Number(JSON.stringify(data))

      // document.getElementById('UserVR').innerHTML = `User Count: ${UsersVR1 + UsersVR2}`;
  })
})


window.addEventListener("orientationchange", ()=> {
  if(window.orientation == 90){
    // console.log("landscape");
    document.querySelector('.head').style.display = 'block'
  }else{
    // console.log("portrait");
    document.querySelector('.head').style.display = 'none'
  }
})
