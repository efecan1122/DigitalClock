
function GetClock(){

    let clock= new Date();
    let hour=clock.getHours();
    let minute=clock.getMinutes();
    let second=clock.getSeconds();

    let year=clock.getFullYear();
    let month=clock.getMonth()+1;
    let day=clock.getDate();

    document.getElementById("hour").innerText=hour;
    document.getElementById("minute").innerText=minute;
    document.getElementById("second").innerText=second;

    document.querySelector("#date").innerText=day+" / "+month+" / "+year;



}

setInterval(function(){GetClock();},1000);