var celebration=new Date('Dec 25,2022 00:00:00');

function countdown(){
    var today= new Date();
    var different=celebration-today;

    var seconds=1000;
    var minutes=seconds * 60;
    var hours=minutes * 60;
    var days=hours * 24;

var d=Math.floor(different / (days));
var h=Math.floor((different % (days)) / (hours));
var m=Math.floor((different % (hours)) / (minutes));
var s=Math.floor((different % (minutes)) / (seconds));

document.getElementById("days").innerHTML=d;
document.getElementById("hours").innerHTML=h;
document.getElementById("minutes").innerHTML=m;
document.getElementById("seconds").innerHTML=s;

}

setInterval(()=>{
    countdown();
}, 1000);