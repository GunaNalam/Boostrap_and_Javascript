function reverse(){
    let a=document.getElementById("number1").value,b=0;
    a=Number.parseInt(a);
    while (a){
        b=b*10+(a%10);
        a=Math.floor(a/10);
    }
    document.getElementById("display").innerHTML=b;
}