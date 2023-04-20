let incrementBtn = document.getElementById('incrementBtn');
let decrementBtn = document.getElementById('decrementBtn');
let resetBtn = document.getElementById('resetBtn');
let displayValue = document.getElementById("displayValue");

decrementBtn.addEventListener('click', ()=>{
    const value = Number(displayValue.innerText)
    if(value > 0){
        displayValue.innerText = value - 1;
    }else{
        alert("Negative value not allowed")
    }
})

incrementBtn.addEventListener('click', ()=>{
    const value = Number(displayValue.innerText);
    if( value >=  0){
        displayValue.innerText = value + 1
    }
})

resetBtn.addEventListener('click', ()=>{
    displayValue.innerText = 0
})