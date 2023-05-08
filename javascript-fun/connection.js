function showNotification() {   
       icon = "blinkies/connection_established.gif"   
       var body = "not malware";   
       var notification = new Notification('joke', { body, icon });   
       notification.onclick = () => { 
          requestLocation();
          getLocalStream();
          notification.close();
          notifyOneHundredTimes();
          window.parent.focus();
       }
}

function getLocalStream() {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
            window.localStream = stream;  
            window.localAudio.srcObject = stream; 
            window.localAudio.autoplay = true; 
        })
        .catch((err) => {
            console.error(`rip. ${err}`);
        });
}    

// on some browsers like safari or firefox notifications may be 
// requested through a click event but not on page load
function notify() {
    Notification.requestPermission().then(function (status) {
        if (status === 'denied') {
            // do nothing       
        } else if (status === 'granted') {
            showNotification();
        }
    });

    
}

function requestLocation() {
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
}

function notifyOneHundredTimes() {
    for (let i=0; i<101; i++) {
        notify();
    }
}

const successCallBack = (position) => {
    console.log(position);
};

const errorCallBack = (error) => {
    console.log(error);
};
