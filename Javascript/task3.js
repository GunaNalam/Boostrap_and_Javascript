function multiply(){
    let a=document.getElementById("number1").value,b=document.getElementById("number2").value;
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    document.getElementById("display").innerHTML=a*b;
}

function division(){
    let a=document.getElementById("number1").value,b=document.getElementById("number2").value;
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    console.log(a/b);
    document.getElementById("display").innerHTML=Math.floor(a/b);
}