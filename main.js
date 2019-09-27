let watcherID = null;
let divConsole = document.querySelector('#console')
divConsole.log = (text,lineNumber="") => {
    divConsole.innerHTML += "["+window.Date().slice(16,24)+"] "+"[ line: "+lineNumber+" ]" + String(text +"</br>");
    divConsole.scrollBy(0,100);
};
divConsole.error = (text) => {
  divConsole.innerHTML += "<em>["+window.Date().slice(16,24)+"] "+ String(text+"</em></br>");
  divConsole.scrollBy(0,100);
};
divConsole.tag = (text) => {
  divConsole.innerHTML += "<color-tag>["+window.Date().slice(16,24)+"] "+ String(text+"</color-tag></br>");
  divConsole.scrollBy(0,100);
};


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
    divConsole.log("");
    divConsole.log('你的位置 :');
    divConsole.log('纬度 : ' + crd.latitude);
    divConsole.log('经度 : ' + crd.longitude);
    divConsole.log('误差 : ±' + crd.accuracy + ' 米.');
  };
  
  function error(err) {
    divConsole.error('ERROR(' + err.code + '): ' + err.message);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  startWatch();

function stopWatch(id) {
  navigator.geolocation.clearWatch(id);
  watcherID = null;
}
function startWatch() {
  if (watcherID !== null) {
    divConsole.log("已经在监控");
    return;
  }else{
    let id = navigator.geolocation.watchPosition(success, error, options);
    watcherID = id;
  }
}
function setTag() {
  let element = document.querySelector('#tagName')
  divConsole.tag(element.value);
}