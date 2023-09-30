function check(){
    let a1=document.getElementById("box-1").value,a2=document.getElementById("box-2").value,a3=document.getElementById("box-3").value,a4=document.getElementById("box-4").value;
    if (a1.length==0){
        document.getElementById("box-1").style.borderStyle = "solid";
        document.getElementById("box-1").style.borderColor = "red";
        document.getElementById('content-1').hidden = false
    }
    if (!a2.includes("@email.com")){
        document.getElementById("box-2").style.borderStyle = "solid";
        document.getElementById("box-2").style.borderColor = "red";
        document.getElementById('content-2').hidden = false
    }
    if (!a3.includes("https://",0)){
        document.getElementById("box-3").style.borderStyle = "solid";
        document.getElementById("box-3").style.borderColor = "red";
        document.getElementById('content-3').hidden = false
    }
    if (a4.length==0){
        document.getElementById("box-4").style.borderStyle = "solid";
        document.getElementById("box-4").style.borderColor = "red";
        document.getElementById('content-4').hidden = false
    }
}