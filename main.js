//Year
window.onload = function onLoad() {
  years();
  months();
  week();
  day();
  hour();
  min();
}
function years(){
  var yLine = new ProgressBar.Line('#yProgress', {
    color: 'rgba(255,255,255,0.5)'
  });

  function progress() {
    var now = new Date();
    var yStart = new Date(now.getFullYear(), 0, 1);  // Start of this year
    var yEnd = new Date(now.getFullYear() + 1, 0, 1);  // End of this year
    var yDone = (now-yStart) / (yEnd-yStart);
    var yPercentStr = (100.0 * yDone).toString();
    if (yDone < 0.1) {
      yPercentStr = yPercentStr.slice(0, 9);
    } else {
      yPercentStr = yPercentStr.slice(0, 10);
    }
    document.getElementById("yPercent").innerHTML = yPercentStr + "%";
    return yDone;
  }

  yLine.animate(progress());  // Number from 0.0 to 1.0

  setInterval(update, 16);

  function update() {
    yLine.set(progress());
  }
}


//Month
function months(){
  var mLine = new ProgressBar.Line('#mProgress', {
  color: 'rgba(255,255,255,0.5)'
  });
  
  function progress() {
      var mNow = new Date();
      var mDone = mNow.getMonth()/12;
      var mPercentStr = Math.round(100.0 * mDone).toString();
      document.getElementById("mPercent").innerHTML = mPercentStr + "%";
      return mDone;
  }
  
  mLine.animate(progress());  // Number from 0.0 to 1.0
  
  setInterval(update, 16);
  
  function update() {
      mLine.set(progress());
  }
}


//Week
function week(){
  var wLine = new ProgressBar.Line('#wProgress', {
  color: 'rgba(255,255,255,0.5)'
  });
  
  function progress() {
      var wNow = new Date();
      var wDone = wNow.getMonth()/7;
      var wPercentStr = Math.round((100.0 * wDone)).toString();
      document.getElementById("wPercent").innerHTML = wPercentStr + "%";
      return wDone;
  }
  
  wLine.animate(progress());  // Number from 0.0 to 1.0
  
  setInterval(update, 16);
  
  function update() {
      wLine.set(progress());
  }
}


//Day
function day(){
  var wLine = new ProgressBar.Line('#dProgress', {
  color: 'rgba(255,255,255,0.5)'
  });
  
  function progress() {
      var wNow = new Date();
      var wDone = wNow.getHours()/24;
      var wPercentStr = Math.round((100.0 * wDone)).toString();
      document.getElementById("dPercent").innerHTML = wPercentStr + "%";
      return wDone;
  }
  
  wLine.animate(progress());  // Number from 0.0 to 1.0
  
  setInterval(update, 16);
  
  function update() {
      wLine.set(progress());
  }
}


//hour
function hour(){
  var wLine = new ProgressBar.Line('#hProgress', {
  color: 'rgba(255,255,255,0.5)'
  });
  
  function progress() {
      var wNow = new Date();
      var wDone = wNow.getMinutes()/60;
      var wPercentStr = Math.round((100.0 * wDone)).toString();
      document.getElementById("hPercent").innerHTML = wPercentStr + "%";
      return wDone;
  }
  
  wLine.animate(progress());  // Number from 0.0 to 1.0
  
  setInterval(update, 16);
  
  function update() {
      wLine.set(progress());
  }
}


//min
function min(){
  var wLine = new ProgressBar.Line('#miProgress', {
  color: 'rgba(255,255,255,0.5)'
  });
  
  function progress() {
      var wNow = new Date();
      var wDone = wNow.getSeconds()/100;
      var wPercentStr = Math.round((100.0 * wDone)).toString();
      document.getElementById("miPercent").innerHTML = wPercentStr + "%";
      return wDone;
  }
  
  wLine.animate(progress());  // Number from 0.0 to 1.0
  
  setInterval(update, 16);
  
  function update() {
      wLine.set(progress());
  }
}