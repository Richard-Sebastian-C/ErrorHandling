
function submit() {
    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;
    try{
    //sum
    sum = (a,b) => Number(a) + Number(b);
    document.getElementById("resultAdd").innerHTML = sum(a,b);

    //sub
    sub = (a,b) => Number(a) - Number(b);
    document.getElementById("resultSub").innerHTML = sub(a,b);

    //multiply
    multiply = (a,b) => Number(a) * Number(b);
    document.getElementById("resultMultiply").innerHTML = multiply(a,b);

    //divide
    divide = (a,b) => Number(a) / Number(b);
    document.getElementById("resultDivide").innerHTML = divide(a,b);
 
    }catch(err){
        document.getElementById("errorMessage").innerHTML = err.message;
    }
    
   

}



