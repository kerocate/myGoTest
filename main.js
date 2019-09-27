let divConsole = document.querySelector('#console')
divConsole.log = (text,lineNumber) => {
    divConsole.innerHTML += "["+window.Date().slice(16,24)+"] "+ String(text +" —— [ line: "+lineNumber+ " ]</br>");
}
divConsole.error = (text,lineNumber) => {
  divConsole.innerHTML += "<em>["+window.Date().slice(16,24)+"] "+ String(text +" —— [ line: "+lineNumber+ " ]</em></br>");
}



if ("geolocation" in navigator) {
    divConsole.log("support geolocation!",9);
  } else {
    divConsole.log("not support geolocation!",11);
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    divConsole.log('Your current position is:',"function success 23");
    divConsole.log('Latitude : ' + crd.latitude,"function success 24");
    divConsole.log('Longitude: ' + crd.longitude,"function success 25");
    divConsole.log('More or less ' + crd.accuracy + ' meters.',"function success 26");
  };
  
  function error(err) {
    divConsole.error('ERROR(' + err.code + '): ' + err.message,"function error 30");
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  navigator.geolocation.watchPosition(success, error, options);