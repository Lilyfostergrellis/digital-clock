const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function upadteClock (){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h= h- 12
        ampm = "PM"
    }

    h = h<10 ? "0" + h : h;
    //if the hour is less than 10, display it with a 0 before the hour number
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(()=>{
        upadteClock()
    }, 1000);
    //call updateClock every second

}

upadteClock();