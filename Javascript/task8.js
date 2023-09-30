function fnamecheck(){
    let a=document.getElementById('fname').value;
    if (a.length<4)  document.getElementById('first-name').hidden=false;
    else
    {
        document.getElementById('first-name').hidden=true;
        return 1;
    }
    return 0;
} 

function lnamecheck(){
    let a=document.getElementById('lname').value;
    if (a.length<4)  document.getElementById('last-name').hidden=false;
    else
    {
        document.getElementById('last-name').hidden=true;
        return 1;
    }
    return 0;
} 

function emailcheck(){
    let a=document.getElementById('email').value;
    if (a.includes("@gmail.com"))  document.getElementById('email-check').hidden=true;
    else
    {
        document.getElementById('email-check').hidden=false;
        return 1;
    }
    return 0;
} 

function passcheck(){
    let a=document.getElementById('pass').value;
    if (a.length<9)  document.getElementById('pass-check').hidden=false;
    else
    {
        document.getElementById('pass-check').hidden=true;
        return 1;
    }
    return 0;
} 

function passcheck1(){
    let a=document.getElementById('pass').value;
    let b=document.getElementById('pass1').value;
    if (a!=b)  document.getElementById('pass-check1').hidden=false;
    else
    {
        document.getElementById('pass-check1').hidden=true;
        return 1;
    }
    return 0;
} 

function age_check(){
    let a=document.getElementById('age-input').value;
    a=Number.parseInt(a);
    if (a<18) document.getElementById('age').hidden=false;
    else
    {
        document.getElementById('age').hidden=true;
        return 1;
    }
    return 0;
}

function phone_check(){
    let a=document.getElementById('phone').value;
    if (a.length<10) document.getElementById('phone-check').hidden=false;
    else
    {
        document.getElementById('phone-check').hidden=true;
        return 1;
    }
    return 0;
}

function address_check(){
    let a=document.getElementById('address').value;
    if (a.length<10) document.getElementById('address-check').hidden=false;
    else
    {
        document.getElementById('address-check').hidden=true;
        return 1;
    }
    return 0;
}

function state_check(){
    let a=document.getElementById('state').value;
    if (a.length<5) document.getElementById('state-check').hidden=false;
    else
    {
        document.getElementById('state-check').hidden=true;
        return 1;
    }
    return 0;
}

function ticked(){
    document.getElementById('lang-check').hidden=true;
}

function conf_true(){
    document.getElementById('confirmation').hidden=true;
}

function register(){
    let a=document.getElementById('checked');
    let b=document.getElementById('lang1');
    let c=document.getElementById('lang2');
    let d=document.getElementById('lang3');
    let e=document.getElementById('lang4');
    if (a.checked) 
    {
        if (e.cheked || b.cheked || c.cheked || d.checked ) alert("Registeration Sucessfull!!");
        else document.getElementById('lang-check').hidden=false;
    }
    else
    {
        document.getElementById('confirmation').hidden=false;
        alert("Registeration Not Sucessfull!!");
    }
}