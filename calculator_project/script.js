console.log("working...");
function dis(x){
    document.getElementById('dis').value+=x;
}
function clr(){
    document.getElementById('dis').value="Clear";
    setTimeout(fun, 1000);
}
function fun(){
    document.getElementById('dis').value="";
}
function solve()
{
    var op=document.getElementById('dis').value;
    var ss=eval(op);
    document.getElementById('dis').value=ss;
}

//only for del function
function del(){
    var t=document.getElementById('dis').value;
    let p=t.toString();
    let result=p.slice(0,-1);
    document.getElementById('dis').value=result;
}
