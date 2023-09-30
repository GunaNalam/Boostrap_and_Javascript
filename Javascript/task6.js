function username(){
    let a=document.getElementById("login-username").value;
    return !(a.length==0); 
}

function password(){
    let a=document.getElementById("login-password").value;
    return !(a.length==0); 
}

function check(){
    if (username() && password()) alert("login Successfull");
    else alert("Invalid Username or Password");
}

function remember(){
    let a=document.getElementById("login-username").value;
    let b=document.getElementById("login-password").value;
    var c = new Array(b.length + 1).join('*');
    if (username() && password()){
        alert(`Saving\nUsername ${a} \nPassword ${c}`);
    }
    else alert("Invalid Username or Password");
}

function forgotpassword(){
    let a=confirm("Redirecting to a new page");
    if (a){
        document.getElementById('login-page').hidden=true;    
        document.getElementById('forgot').hidden=false;  
    }
}

function signup()
{
    let a=confirm("Redirecting to a new page");
    if (a){
        document.getElementById('login-page').hidden=true;    
        document.getElementById('signup-page').hidden=false;  
    }
}

function check1(){
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