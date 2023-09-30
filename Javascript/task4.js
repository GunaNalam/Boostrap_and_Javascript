function showTime(){
    const d = new Date();
    document.getElementById("display2").innerHTML=d;
}

function showDate(){
    const c = new Date();
    const year = c.getFullYear();
    let month = c.getMonth() + 1;
    let day = c.getDate();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    const d = day + '/' + month + '/' + year;
    document.getElementById("display1").innerHTML=d;
}