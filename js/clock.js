function startTime() {

    var timer;

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ms = today.getMilliseconds();   

    h = checkTime(h); 
    m = checkTime(m);
    s = checkTime(s);
    ms = checkTime(ms);
    
    try {
	document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + ":" + ms;
	timer = setTimeout(startTime, 30);
    }
    catch(e) {
	clearTimeout(timer);
    }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
