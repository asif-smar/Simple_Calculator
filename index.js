function deleteMe(){
    document.getElementById("output-box").value="";

}

function calculate(NewValue){
    document.getElementById("output-box").value += NewValue;

}

function evaluation(){
    var a =document.getElementById("output-box").value;
    var b=eval(a);
    document.getElementById("output-box").value=b;

}