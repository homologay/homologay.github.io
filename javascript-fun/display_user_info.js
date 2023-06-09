var OSName = "unknown";
var navApp = navigator.userAgent.toLowerCase();
switch (true) {
  case (navApp.indexOf("win") != -1):
    OSName = "windows";
    break;
  case (navApp.indexOf("mac") != -1):
    OSName = "apple";
    break;
  case (navApp.indexOf("linux") != -1):
    OSName = "linux";
    break;
  case (navApp.indexOf("x11") != -1):
    OSName = "unix";
    break;
}
console.log(OSName, navApp);
