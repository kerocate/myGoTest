let divConsole = document.querySelector('#console')
divConsole.log = (text,lineNumber="") => {
    divConsole.innerHTML += "["+window.Date().slice(16,24)+"] "+"[ line: "+lineNumber+" ]" + String(text +"</br>");
}
divConsole.error = (text) => {
  divConsole.innerHTML += "<em>["+window.Date().slice(16,24)+"] "+ String(text+"</em></br>");
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
  
    divConsole.log('你的位置 :');
    divConsole.log('纬度 : ' + crd.latitude);
    divConsole.log('经度 : ' + crd.longitude);
    divConsole.log('正负 ' + crd.accuracy + ' 米.');
  };
  
  function error(err) {
    divConsole.error('ERROR(' + err.code + '): ' + err.message);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  navigator.geolocation.watchPosition(success, error, options);