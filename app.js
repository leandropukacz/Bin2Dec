const input = document.getElementById("input1");
const boton = document.getElementById("boton1");
const resultado = document.getElementById("resultado");

input.addEventListener("keydown", (e) => { 
    if (!/[0-1]+/.test(e.key)){
        e.preventDefault();    
    }
});


boton.addEventListener("click", convertir);








function convertir(){
    let cantBucl = 0;
    let sum = 0;
    let numBin = input.value;
    //101 = 5
    //110 = 6
    //111 = 7
    
    for(let i = numBin.length; i > 0; i--){
        cantBucl++;
        if(parseInt(numBin[i - 1]) == 1){
            if(i == numBin.length)    
                sum += Math.pow(2, 0);
            else
                sum += Math.pow(2, cantBucl - 1);
        }

    }
    
    if(sum == 0)
        sum = 0;
    if(!numBin.length)
        sum = "-";    

    for(let i = 0; i <= sum; i++){
        
        setTimeout(() =>{
            resultado.innerHTML = createElement(i);

        },10);

    }
    
}


function createElement(value){
    let elemento = `<div><p>${value}</p></div>`;
    resultado.classList.add("resultado");
    return elemento;
}



