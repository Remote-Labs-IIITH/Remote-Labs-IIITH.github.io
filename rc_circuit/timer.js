var time = 10; // This is the time allowed
var time_seconds = time*60; // This is time allowed in seconds
var saved_countdown = sessionStorage.getItem('saved_countdown');

if(saved_countdown == null) {
    // Set the time we're counting down to using the time allowed
    var new_countdown = new Date().getTime() + (time_seconds+1) * 1000;

    time = new_countdown;
    sessionStorage.setItem('saved_countdown', new_countdown);
} else {
    time = saved_countdown;
}

// Update the count down every 1 second
var x = setInterval(() => {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the allowed time
    var distance = time - now;

    // Time counter
    var minutes = Math.floor((distance / 60)/1000);
    var formattedMinutes = ("0" + minutes).slice(-2);
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var formattedSeconds = ("0" + seconds).slice(-2);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = formattedMinutes + ":" + formattedSeconds;
        
    // If the count down is over, write some text 
    // if (distance <= 0) {
    //     clearInterval(x);
    //     sessionStorage.removeItem("saved_countdown");
    //     sessionStorage.removeItem("saved_val_v");
    //     sessionStorage.removeItem("saved_val_u");
    //     document.getElementById("demo").innerHTML = "Session Ended";
    //     fetch("https://blr1.blynk.cloud/external/api/update?token=R77dMWPsQ8B7xavEV_HVjaVF01DklJji&v0=" + "1")
    //     fetch("https://blr1.blynk.cloud/external/api/update?token=R77dMWPsQ8B7xavEV_HVjaVF01DklJji&v3=0")
    //         .then(() => {
    //             location.replace("../home_page/home.html")
    //         })
    // }

    if (distance <= 0) {
        clearInterval(x);
        sessionStorage.removeItem("saved_countdown");
        document.getElementById("demo").innerHTML = "Session Ended";
        let response=fetch("https://blr1.blynk.cloud/external/api/get?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1")
            .then(response => response.json())
            .then(data => {
                const myJSON = JSON.stringify(data)
                console.log(response);
                console.log(myJSON);
                console.log(typeof(myJSON));
                if(myJSON=="0"){
                    console.log("hi");
               
                }else if(myJSON=="1"){
                    console.log("bye");
                    fetch("https://blr1.blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v1=0")
                }
                location.replace("../home_page/home.html");
                fetch("https://blr1.blynk.cloud/external/api/update?token=xhn8z8fVu6weEbbHIgVNjmQ4waWrX6Xm&v3=0")
               
            });
        }
}, 1000);
