// let permission = Notification.permission;
/*
if (permission === "granted") {   
       showNotification();
} else if (permission === "default") {   
      
} else {  
       alert("Use normal alert");
}*/

function showNotification() {   
      // if (document.visibilityState === "visible") {
      //        return;
      // }   
      //  var title = "joke";   
       icon = "blinkies/connection_established.gif"   
       var body = "not malware";   
       var notification = new Notification('joke', { body, icon });   
       notification.onclick = () => { 
          notification.close();
          window.parent.focus();
       }
}

function requestAndShowPermission() {
   Notification.requestPermission(function (permission) {
      if (permission === "granted") {
            showNotification();
      }
   });
}

// on some browsers like safari or firefox notifications may be 
// requested through a click event but not on page load
$('#allow-push-notification').click(function () {
    $('#allow-push-notification-bar').hide();
    Notification.requestPermission().then(function (status) {
        if (status === 'denied') {
            // do nothing       
        } else if (status === 'granted') {
            showNotification();
        }
    });
});
