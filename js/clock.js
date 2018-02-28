function startTime() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ms = today.getMilliseconds();
    
    m = checkTime(m);
    s = checkTime(s);
    ms = checkTime(ms);
    
    try {
	document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + ":" + ms;
    }
    catch(e) {
	
    }
    var t = setTimeout(startTime, 30);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
