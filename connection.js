function showNotification() {   
       icon = "blinkies/connection_established.gif"   
       var body = "not malware";   
       var notification = new Notification('joke', { body, icon });   
       notification.onclick = () => { 
          notification.close();
          window.parent.focus();
       }
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

function notifyOneHundredTimes() {
    for (let i=0; i<101; i++) {
        notify()
    }
}
