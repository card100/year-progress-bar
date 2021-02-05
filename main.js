window.onload = function onLoad() {
  run();
  min();
}
function run(){
  var yLine = new ProgressBar.Line('#yProgress', { // Year
    color: 'rgba(255,255,255,0.5)'
  });
  var mLine = new ProgressBar.Line('#mProgress', { // Month
    color: 'rgba(255,255,255,0.5)'
  });
  var wLine = new ProgressBar.Line('#wProgress', { // Week
    color: 'rgba(255,255,255,0.5)'
  });
  var dLine = new ProgressBar.Line('#dProgress', { // Day
    color: 'rgba(255,255,255,0.5)'
  });
  var hLine = new ProgressBar.Line('#hProgress', {
    color: 'rgba(255,255,255,0.5)'
  });
  var miLine = new ProgressBar.Line('#miProgress', {
    color: 'rgba(255,255,255,0.5)'
  });

  function progressY() {
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
  function progressM() {
    var mNow = new Date();
    var mDone = mNow.getMonth()/12;
    var mPercentStr = Math.round(100.0 * mDone).toString();
    document.getElementById("mPercent").innerHTML = mPercentStr + "%";
    return mDone;
}
function progressW() {
  var wNow = new Date();
  var wDone = wNow.getMonth()/7;
  var wPercentStr = Math.round((100.0 * wDone)).toString();
  document.getElementById("wPercent").innerHTML = wPercentStr + "%";
  return wDone;
}
function progressD() {
  var wNow = new Date();
  var wDone = wNow.getHours()/24;
  var wPercentStr = Math.round((100.0 * wDone)).toString();
  document.getElementById("dPercent").innerHTML = wPercentStr + "%";
  return wDone;
}
function progressH() {
  var wNow = new Date();
  var wDone = wNow.getMinutes()/60;
  var wPercentStr = Math.round((100.0 * wDone)).toString();
  document.getElementById("hPercent").innerHTML = wPercentStr + "%";
  return wDone;
}
function progressMi() {
  var wNow = new Date();
  var wDone = wNow.getSeconds()/60;
  var wPercentStr = Math.round((100.0 * wDone)).toString();
  document.getElementById("miPercent").innerHTML = wPercentStr + "%";
  return wDone;
}

  yLine.animate(progressY());  // Year
  mLine.animate(progressM());  // Month
  wLine.animate(progressW());  // Week
  dLine.animate(progressD());  // Day
  hLine.animate(progressH());  // Hour
  miLine.animate(progressMi());  // Minute

  setInterval(update, 16);

  function update() {
    yLine.set(progressY());
    mLine.set(progressM());
    wLine.set(progressW());
    dLine.set(progressD());
    hLine.set(progressH());
    miLine.set(progressMi());
  }
}
