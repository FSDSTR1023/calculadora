const screen = document.querySelector('.screen')
const result = document.querySelector('.result')
const operations = document.querySelector('.operations')
const buttons = [...document.querySelectorAll(".button")]
const operationList = ['/','*','-','+','%']
let lastButton = ''


result.value = '0'
buttons.map(btn=>{
    btn.addEventListener("click",()=>handleClick(btn.dataset.value))
    btn.addEventListener("mousedown", ()=>{
        btn.classList.add("down")
    })
})

document.addEventListener("mouseup", ()=>{
    buttons.map(btn=>btn.classList.remove("down"))
})

function handleClick(value){
    // Convert result to new operation value
    if(lastButton==="="){
        if(!isNaN(result.value)){
            operations.value = result.value
        }else{
            clearScreen()
        }
    }

    // Check button
    if(value==="="){ // =
        try{
            result.value = eval(operations.value.replace("%","/100"))
        }catch{
            showError()
        }
    }else if(value==="C"){ // C
        clearScreen()
    }else if(value==="B"){ // <-
        eraseLast()
    }else if(parseInt(value)>=0 && parseInt(value)<=9){ // Number
        operations.value+=value
    }else{ // Operation
        // If last button was another operation, modify the operation
        if(operationList.includes(lastButton)){
            eraseLast()
        }
        operations.value += value
    }
    lastButton = value
}

function clearScreen() {
    result.value = '0'
    operations.value = ''
    screen.classList.remove("error")
}

function showError(){
    result.value = "Syntax Error"
    screen.classList.add("error")
}

function eraseLast(){
    operations.value = operations.value.slice(0,-1)
    if(operations.value==='') operations.value='0'
}