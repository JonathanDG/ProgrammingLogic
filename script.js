evaluar = () => {
    const n1 = parseInt(document.getElementById("num1").value);
    const n2 = parseInt(document.getElementById("num2").value);
    const n3 = parseInt(document.getElementById("num3").value);

    let arr = [];
    
  

    if(n1 < n2){
        if(n1 < n3){
            arr.push(n1);
            arr.push(n3);
        }else{
            arr.push(n3);
            arr.push(n1);
        }
        arr.push(n2);
    }else if(n1 < n3){
        if(n1 < n2){
            arr.push(n1);
            arr.push(n2);
        }else{
            arr.push(n2);
            arr.push(n1);
        }
        arr.push(n3);
    }else{
        if(n3 < n2){
            arr.push(n3);
            arr.push(n2);
        }else{
            arr.push(n2);
            arr.push(n3);
        }
        arr.push(n1);
    }
    console.log("Menor a mayor: ", arr);
    
    document.getElementById("menorMayor").innerHTML = "Menor a mayor: " + arr;
    arr.reverse()
    console.log("Mayor a menor: ", arr);

    document.getElementById("mayorMenor").innerHTML= "Mayor a menor: " + arr;
}