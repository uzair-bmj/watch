let msec = 0;
let sec = 0;
let min = 0;
let hr = 0;
let time;

function strt(){
function timer(){
    msec++;
    document.getElementById("msec").innerText = msec;
    document.getElementById("sec").innerText = sec;
    document.getElementById("min").innerText = min;
    document.getElementById("hr").innerText = hr;
    if(msec == 1000){
        msec= 0;
        sec++;
        if(sec == 60){
            sec=0;
            min ++;
            if(min == 60){
                min=0;
                hr++;
            }
        }
     }

}
time = setInterval(timer,1);
}

function stp(){
    clearInterval(time);
}
function rst(){
    document.getElementById("msec").innerText = 0;
    document.getElementById("sec").innerText = 0;
    document.getElementById("min").innerText = 0;
    document.getElementById("hr").innerText = 0;
}

