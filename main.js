
window.onload = function onLoad() {
  var line = new ProgressBar.Line('#progress', {
    color: '#FFEA82',
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
  });

  function progress() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 1);  // Start of this year
    var end = new Date(now.getFullYear() + 1, 0, 1);  // End of this year
    var done = (now-start) / (end-start);
    var percentStr = (100.0 * done).toString();
    if (done < 0.1) {
      percentStr = percentStr.slice(0, 9);
    } else {
      percentStr = percentStr.slice(0, 10);
    }
    document.getElementById("percent").innerHTML = percentStr + "%";
    return done;
  }

  line.animate(progress());  // Number from 0.0 to 1.0

  setInterval(update, 16);

  function update() {
    line.set(progress());
  }

};
