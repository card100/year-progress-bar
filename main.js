
window.onload = function onLoad() {
  var line = new ProgressBar.Line('#yProgress', {
    color: '#FFEA82',
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
  });
  /*
 window.onload = function onLoad() {
  var line = new ProgressBar.Line('#mProgress', {
    color: '#FFEA82',
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
  });*/

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
    return done;
  }

  line.animate(progress());  // Number from 0.0 to 1.0

  setInterval(update, 16);

  function update() {
    line.set(progress());
  }

};
