//Year
window.onload = function onLoad() {
  years();
  months();
  week();
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
      var mStart = new Date(mNow.getFullYear(), 0, 1);  // Start of this year
      var mEnd = new Date(mNow.getFullYear() + 1, 0, 1);  // End of this year
      var ymDone = (mNow-mStart) / (mEnd-mStart);
      var mDone = 12*(ymDone - 1/12 * mNow.getMonth());
      var mPercentStr = (100.0 * mDone).toString();
      if (mDone < 0.1) {
      mPercentStr = mPercentStr.slice(0, 9);
      } else {
      mPercentStr = mPercentStr.slice(0, 10);
      }
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
      var wStart = new Date(wNow.getFullYear(), 0, 1);  // Start of this year
      var wEnd = new Date(wNow.getFullYear() + 1, 0, 1);  // End of this year
      var yDone = (wNow-wStart) / (wEnd-wStart);
      var mDone = 12*(yDone - 1/12 * wNow.getMonth());
      var wDone = 7*(mDone - 1/4 * wNow.getDay());
      var wPercentStr = (100.0 * wDone).toString();
      if (wDone < 0.1) {
      wPercentStr = wPercentStr.slice(0, 9);
      } else {
      wPercentStr = wPercentStr.slice(0, 10);
      }
      document.getElementById("wPercent").innerHTML = wPercentStr + "%";
      return wDone;
  }
  
  wLine.animate(progress());  // Number from 0.0 to 1.0
  
  setInterval(update, 16);
  
  function update() {
      wLine.set(progress());
  }
}